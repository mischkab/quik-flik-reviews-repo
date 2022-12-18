class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  #User sign up
  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: User
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
