class ReviewsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  # GET /movies/:movie_id/reviews
  def index
    movie = Movie.find(params[:movie_id])
    reviews = movie.reviews
    render json: reviews, include: :user, status: :ok
  end

  private

  def render_not_found_response
    render json: { error: 'Movie not found' }, status: :not_found
  end
end
