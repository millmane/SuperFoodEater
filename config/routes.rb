Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :listings
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"

end
