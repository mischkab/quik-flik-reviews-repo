class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :comment, :rating
  belongs_to :movie
  belongs_to :user
end
