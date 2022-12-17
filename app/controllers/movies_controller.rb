class MoviesController < ApplicationController
  def index
    render json: Movie.all, status: :ok
  end

  def show
    movie = Movie.find_by(id: params[:id])
    if movie
        render json: movie, status: :ok
    else
      render json: { error: 'Movie not found'}, status: :not_found
    end
  end
end