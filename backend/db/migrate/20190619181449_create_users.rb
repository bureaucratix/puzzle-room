class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.boolean :riddle_complete
      t.boolean :chess_complete
      t.boolean :drag_complete
      t.boolean :math_complete
      t.boolean :found_complete
      t.boolean :whiteboard_complete

      t.timestamps
    end
  end
end
