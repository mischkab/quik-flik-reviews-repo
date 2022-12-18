class UsersController < ApplicationController
  skip_before_action :authorized, only: :create
  # User sign up
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  # User logged in
  def show
    render json: @current_user
  end

  private

  def user_params
    params.permit(:username, :password, :email)
  end
end
