class CreateBarn < ActiveRecord::Migration[7.0]
  def change
    create_table :barns do |t|
      t.integer :cost
      t.string :roof
      t.integer :l
      t.integer :w
      t.integer :h

      t.timestamps
    end
  end
end
