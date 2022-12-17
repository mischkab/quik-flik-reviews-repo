class Movie < ApplicationRecord
  has_many :reviews, dependent: :destroy
  validates :title, :overview, presence: true
end
