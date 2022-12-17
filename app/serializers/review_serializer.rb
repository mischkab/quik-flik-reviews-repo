class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :comment, :rating
  has_one :movie
  has_one :user
end
