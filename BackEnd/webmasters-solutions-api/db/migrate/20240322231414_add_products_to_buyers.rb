class AddProductsToBuyers < ActiveRecord::Migration[7.0]
  def change
    add_column :buyers, :products, :string, array:true, default: []
  end
end
