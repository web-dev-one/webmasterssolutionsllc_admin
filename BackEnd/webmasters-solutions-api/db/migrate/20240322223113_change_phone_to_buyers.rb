class ChangePhoneToBuyers < ActiveRecord::Migration[7.0]
  def change
    rename_column :buyers, :price, :amount_paid
  end
end
