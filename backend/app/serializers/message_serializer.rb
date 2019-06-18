class MessageSerializer < ActiveModel::Serializer
  attributes :author, :content, :id
end