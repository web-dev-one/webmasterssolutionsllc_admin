class CreateKennels < ActiveRecord::Migration[7.0]
  def change
    create_table :kennels do |t|
      t.integer :cost
      t.string :color
      t.string :model_type

      t.timestamps
    end
  end
end
