class AddReferencesToBarn < ActiveRecord::Migration[7.0]
  def change
    add_reference :barns, :buyer, null: false, foreign_key: true
  end
end
