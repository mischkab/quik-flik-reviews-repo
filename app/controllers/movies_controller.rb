class MoviesController < ApplicationController
  def index
    render json: Movie.all, status: :ok
  end

  def show
    movie = Movie.find_by(id: params[:id])
    if movie
      render json: movie, status: :ok
    else
      render json: { error: 'Movie not found' }, status: :not_found
    end
  end

  def create
    movie = Movie.create(movie_params)
    render json: movie, status: :created
  end

  def update
    #find
    movie = Movie.find_by(id: params[:id])
    if movie
      #update
      movie.update(movie_params)
      render json: movie, status: :accepted
    else
      render json: { error: 'Movie not found' }, status: :not_found
    end
  end

  private

  def movie_params
    params.permit(:title, :overview, :director, :image)
  end
end
