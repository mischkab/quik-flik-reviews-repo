class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :overview, :director, :image
  has_many :reviews
  has_many :users
end
