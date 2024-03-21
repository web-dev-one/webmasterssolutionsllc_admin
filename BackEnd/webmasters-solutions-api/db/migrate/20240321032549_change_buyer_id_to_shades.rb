class ChangeBuyerIdToShades < ActiveRecord::Migration[7.0]
  def change
    change_column_null(:shades, :buyer_id, true, "N/A")

  end
end
