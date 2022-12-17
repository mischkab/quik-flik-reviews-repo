class ReviewsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  before_action :find_movie
  before_action :find_review, only: [:show, :update, :destroy]

  # GET /movies/:movie_id/reviews
  def index
    reviews = @movie.reviews
    render json: reviews, include: :user, status: :ok
  end

  # GET /movies/:movie_id/reviews/:id
  def show
    render json: @review, include: :user, status: :ok
  end

  # POST /movies/:movie_id/reviews
  def create
    review = Review.create!(review_params)
    render json: review, status: :created
  end

    # PATCH /movies/:movie_id/reviews
  def update
    @review.update!(review_params)
    render json: @review, status: :accepted
  end

  def destroy
    @review.destroy
    head :no_content
  end

  private

  def find_movie
    @movie = Movie.find(params[:movie_id])
  end

  def find_review
    @review = @movie.reviews.find(params[:id])
  end

  def review_params
    params.permit(:title, :comment, :rating, :movie_id, :user_id)
  end

  def render_not_found_response
    render json: { error: 'Movie not found' }, status: :not_found
  end

  def render_unprocessable_entity(invalid)
    render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end