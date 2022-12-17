class MoviesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  # GET /movies
  def index
    render json: Movie.all, status: :ok
  end

  # GET /movies/:id
  def show
    movie = find_movie
    render json: movie, status: :ok
  end

  # POST /movies
  def create
    movie = Movie.create(movie_params)
    render json: movie, status: :created
  end

  # PATCH /movies/:id
  def update
    movie = find_movie
    movie.update(movie_params)
    render json: movie, status: :accepted
  end

  # DELETE /movies/:id
  def destroy
    movie = find_movie
    movie.destroy
    head :no_content
  end

  private

  def movie_params
    params.permit(:title, :overview, :director, :image)
  end

  def find_movie
    Movie.find(params[:id])
  end

  def render_not_found_response
    render json: { error: 'Movie not found' }, status: :not_found
  end
end
