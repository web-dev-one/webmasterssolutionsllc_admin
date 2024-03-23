class Barn < ApplicationRecord
    belongs_to :buyer
    has_many :installs
    has_many :kennels, through: :installs
    has_many :shades, through: :installs
    has_many :barns, through: :installs

end
