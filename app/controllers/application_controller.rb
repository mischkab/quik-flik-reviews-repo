class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  
  before_action :authorized
  
  def authorized
    @current_user = User.find_by(id: session[:user_id])
    render json: { errors: ['Not Authorised']}, status: :unauthorized unless @current_user
  end

  def render_unprocessable_entity(exception)
    render json: { error: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
end
