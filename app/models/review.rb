class Review < ApplicationRecord
  belongs_to :movie
  belongs_to :user
  
  validates :title, :comment, :rating, presence: true

  after_commit -> (review) { review.movie.calc_avg }
end
