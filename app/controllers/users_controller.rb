class UsersController < ApplicationController
  skip_before_action :authorized, only: :create
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  # User sign up
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  # User logged in
  def show
    current_user = User.find_by(id: session[:user_id])
    if current_user
      render json: current_user
    else
      render json: { error: "Not authorized" }, status: :unathorized
    end
  end

  private

  def user_params
    params.permit(:username, :password, :email)
  end

  def render_unprocessable_entity(invalid)
    render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end
