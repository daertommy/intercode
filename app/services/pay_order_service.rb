class PayOrderService < ApplicationService
  validate :check_order_status

  attr_reader :order, :stripe_token

  def initialize(order, stripe_token)
    @order = order
    @stripe_token = stripe_token
  end

  private

  def inner_call
    charge = begin
      create_charge
    rescue Stripe::CardError => e
      errors.add :base, e.message
      return failure(errors)
    end

    update_order(charge)
    OrdersMailer.purchased(order).deliver_now
    success
  end

  def create_charge
    customer = Stripe::Customer.create(
      email: order.user_con_profile.email,
      source: stripe_token
    )

    Stripe::Charge.create(
      customer: customer.id,
      amount: order.price.fractional,
      description: "#{description} for #{convention.name}",
      currency: order.price.currency.iso_code.downcase
    )
  end

  def update_order(charge)
    order.update!(
      status: 'paid',
      payment_amount: order.price,
      payment_note: "Paid via Stripe on \
#{Time.at(charge.created).in_time_zone(convention.timezone)} (Charge ID #{charge.id})",
      charge_id: charge.id
    )
  end

  def description
    @description ||= order.order_entries.map(&:describe_products).to_sentence
  end

  def convention
    @convention ||= order.user_con_profile.convention
  end

  def check_order_pending
    return if order.status == 'pending' || order.status == 'unpaid'

    errors.add(:base, "This order is already #{order.status}.")
  end
end
