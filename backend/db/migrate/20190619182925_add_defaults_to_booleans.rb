class AddDefaultsToBooleans < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :riddle_complete, :boolean, :default => false
    change_column :users, :chess_complete, :boolean, :default => false
    change_column :users, :drag_complete, :boolean, :default => false
    change_column :users, :math_complete, :boolean, :default => false
    change_column :users, :found_complete, :boolean, :default => false
    change_column :users, :whiteboard_complete, :boolean, :default => false
  end
end
