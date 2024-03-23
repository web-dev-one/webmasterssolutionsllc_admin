class Install < ApplicationRecord
  belongs_to :kennel, optional: true
  belongs_to :shade, optional: true
  belongs_to :barn, optional: true
  belongs_to :buyer
end
