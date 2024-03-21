class AddHToShade < ActiveRecord::Migration[7.0]
  def change
    add_column :shades, :h, :integer
  end
end
