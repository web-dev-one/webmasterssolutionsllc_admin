class ChangeKennelIdToInstalls < ActiveRecord::Migration[7.0]
  def change
    change_column_null(:installs, :kennel_id, true, "N/A")
  end
end
