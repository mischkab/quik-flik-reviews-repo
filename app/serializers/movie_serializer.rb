class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :overview, :director, :image
end
