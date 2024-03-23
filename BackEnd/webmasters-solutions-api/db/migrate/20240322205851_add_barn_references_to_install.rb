class AddBarnReferencesToInstall < ActiveRecord::Migration[7.0]
  def change
    add_reference :installs, :barn, null: false, foreign_key: true
  end
end
