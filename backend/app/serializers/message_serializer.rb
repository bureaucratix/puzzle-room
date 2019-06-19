class MessageSerializer < ActiveModel::Serializer
  attributes :author, :content, :id, :user_id
end