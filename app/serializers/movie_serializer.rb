class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :overview, :director, :image, :average_rating
  has_many :reviews
  has_many :users
end
