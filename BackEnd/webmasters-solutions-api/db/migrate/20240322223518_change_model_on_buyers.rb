class ChangeModelOnBuyers < ActiveRecord::Migration[7.0]
  def change
    rename_column :buyers, :model, :occupation
  end
end
