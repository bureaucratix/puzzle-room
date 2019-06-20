class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :chess_complete, :math_complete, :found_complete, :riddle_complete, :whiteboard_complete, :drag_complete, :created_at
end