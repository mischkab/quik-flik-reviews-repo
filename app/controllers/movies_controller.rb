class MoviesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  before_action :find_movie, only: [:show, :update, :destroy]

  # GET /movies
  def index
    render json: Movie.all, status: :ok
  end

  # GET /movies/:id
  def show
    render json: @movie, include: :reviews, status: :ok
  end

  # POST /movies
  def create
    movie = Movie.create!(movie_params)
    render json: movie, status: :created
  end

  # PATCH /movies/:id
  def update
    @movie.update!(movie_params)
    render json: @movie, status: :accepted
  end

  # DELETE /movies/:id
  def destroy
    @movie.destroy
    head :no_content
  end

  private

  def movie_params
    params.permit(:title, :overview, :director, :image)
  end

  def find_movie
    @movie = Movie.find(params[:id])
  end

  def render_not_found_response
    render json: { error: 'Movie not found' }, status: :not_found
  end
end
