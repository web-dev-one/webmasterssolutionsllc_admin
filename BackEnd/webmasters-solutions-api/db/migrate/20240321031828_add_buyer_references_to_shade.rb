class AddBuyerReferencesToShade < ActiveRecord::Migration[7.0]
  def change
    add_reference :shades, :buyer, null: false, foreign_key: true
  end
end
