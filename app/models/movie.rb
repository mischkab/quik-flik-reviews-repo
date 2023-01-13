class Movie < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :users, through: :reviews

  validates :title, :overview, presence: true

  # Get average rating of all reviews for a movie
  def calc_avg
    return 0 unless reviews.size.positive?

    avg = reviews.average(:rating)
    update_column(:average_rating, avg)
  end
end
