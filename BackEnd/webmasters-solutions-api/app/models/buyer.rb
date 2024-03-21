class Buyer < ApplicationRecord
  has_many :kennels
  has_many :installs
  has_many :shades
end
