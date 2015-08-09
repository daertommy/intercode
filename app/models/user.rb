class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :first_name, presence: true
  validates :last_name, presence: true

  has_many :user_con_profiles
  has_many :team_members
  
  liquid_methods :email, :first_name, :last_name, :nickname

  # Return the user's name.  Should this include the nickname, if one exists?
  def name
    self.last_name + ', ' + self.first_name
  end
  
  # More or less copied from:
  # http://stackoverflow.com/questions/819263/get-persons-age-in-ruby
  def age_as_of(date)
    date.year - birth_date.year - ((date.month > birth_date.month || (date.month == birth_date.month && date.day >= birth_date.day)) ? 0 : 1)
  end
  
  def age
    age_as_of Date.today
  end
  
  def address
    city_state_zip = [[city, state].reject(&:blank?).join(", "), zipcode].reject(&:blank?).join(" ")
    [address1, address2, city_state_zip, country].reject(&:blank?).join("\n")
  end
end
