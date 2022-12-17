Rails.application.routes.draw do
  
  # resources :users
  resources :movies, only: [:index, :show, :create, :update, :destroy] do
    resources :reviews, only: [:index, :show, :create, :update, :destroy]
  end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
