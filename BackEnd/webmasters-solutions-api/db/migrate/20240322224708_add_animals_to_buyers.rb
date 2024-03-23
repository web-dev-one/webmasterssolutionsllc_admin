class AddAnimalsToBuyers < ActiveRecord::Migration[7.0]
  def change
    add_column :buyers, :animals, :string, array:true, default: []
  end
end
