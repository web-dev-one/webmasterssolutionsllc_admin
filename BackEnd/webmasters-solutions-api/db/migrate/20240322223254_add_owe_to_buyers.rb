class AddOweToBuyers < ActiveRecord::Migration[7.0]
  def change
    add_column :buyers, :amount_owed, :integer
  end
end
