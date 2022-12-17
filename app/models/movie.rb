class Movie < ApplicationRecord
  has_many :reviews
  validates :title, :overview, presence: true
end
