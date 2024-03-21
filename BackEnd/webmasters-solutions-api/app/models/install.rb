class Install < ApplicationRecord
  belongs_to :kennel, optional: true
  belongs_to :buyer
end
