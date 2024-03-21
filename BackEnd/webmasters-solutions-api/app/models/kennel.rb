class Kennel < ApplicationRecord
    has_one_attached :image
    belongs_to :buyer 
    belongs_to :install
end
