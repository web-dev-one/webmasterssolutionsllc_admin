class AddStatusToBuyers < ActiveRecord::Migration[7.0]
  def change
    add_column :buyers, :status, :string, default: "pending"
  end
end
