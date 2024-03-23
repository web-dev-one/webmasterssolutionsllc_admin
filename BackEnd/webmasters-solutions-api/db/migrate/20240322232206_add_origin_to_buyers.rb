class AddOriginToBuyers < ActiveRecord::Migration[7.0]
  def change
    add_column :buyers, :origin, :string, default: "google"

  end
end
