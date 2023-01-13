class AddAverageToMovies < ActiveRecord::Migration[6.1]
  def change
    add_column :movies, :average_rating, :integer, default: 0
  end
end
