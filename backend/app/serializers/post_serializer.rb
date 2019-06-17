class PostSerializer < ActiveModel::Serializer
  has_many :messages
  attributes :title, :messages
end