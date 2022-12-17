Rails.application.routes.draw do
  
  # resources :reviews
  resources :movies, only: [:index, :show, :create, :update]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
