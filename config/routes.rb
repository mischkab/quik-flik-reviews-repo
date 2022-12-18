Rails.application.routes.draw do
  
  resources :movies, only: [:index, :show, :create, :update, :destroy] do
    resources :reviews, only: [:index, :show, :create, :update, :destroy]
  end

  # user signup
  post "/signup", to: "users#create"
  # user login
  post "/login", to: "sessions#create"
  # stay logged in
  get "/me", to: "users#show"
  # user logout
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
