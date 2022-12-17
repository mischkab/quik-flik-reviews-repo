class Review < ApplicationRecord
  belongs_to :movie
  belongs_to :user
  validates :title, :comment, :rating, presence: true
end
