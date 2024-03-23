class ChangeBarnIdToInstalls < ActiveRecord::Migration[7.0]
  def change
    change_column_null(:installs, :barn_id, true, "N/A")
  end
end
