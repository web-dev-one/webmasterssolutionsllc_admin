class Shade < ApplicationRecord
    belongs_to :buyer
    belongs_to :install, optional: true
end
