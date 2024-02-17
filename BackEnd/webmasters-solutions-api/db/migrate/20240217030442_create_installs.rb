class CreateInstalls < ActiveRecord::Migration[7.0]
  def change
    create_table :installs do |t|
      t.string :installation_address
      t.datetime :installation_date
      t.references :kennel, null: false, foreign_key: true
      t.references :buyer, null: false, foreign_key: true
      t.integer :worker_count

      t.timestamps
    end
  end
end
