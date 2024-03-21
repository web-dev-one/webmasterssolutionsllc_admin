class CreateShade < ActiveRecord::Migration[7.0]
  def change
    create_table :shades do |t|
      t.integer :cost
      t.string :roof
      t.integer :l
      t.integer :w

      t.timestamps
    end
  end
end
