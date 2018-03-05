class GraphqlController < ApplicationController
  skip_authorization_check

  def execute
    ActiveRecord::Base.transaction do
      result = execute_from_params(params)
      render json: result

      raise ActiveRecord::Rollback if result['errors'].present?
    end
  end

  private

  def execute_from_params(params)
    variables = ensure_hash(params[:variables])
    query = params[:query]
    operation_name = params[:operationName]
    context = {
      current_user: current_user,
      current_ability: current_ability,
      user_con_profile: user_con_profile,
      convention: convention,
      cadmus_renderer: cadmus_renderer,
      current_pending_order: current_pending_order
    }

    IntercodeSchema.execute(
      query,
      variables: variables,
      context: context,
      operation_name: operation_name
    )
  end

  # Handle form data, JSON body, or a blank value
  def ensure_hash(ambiguous_param)
    case ambiguous_param
    when String
      if ambiguous_param.present?
        ensure_hash(JSON.parse(ambiguous_param))
      else
        {}
      end
    when Hash, ActionController::Parameters
      ambiguous_param
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{ambiguous_param}"
    end
  end
end
