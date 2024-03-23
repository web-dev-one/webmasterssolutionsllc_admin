Rails.application.routes.draw do
  namespace :api do
    get 'installs/index'
    get 'installs/show'
    get 'installs/create'
    get 'installs/delete'
    get 'shades/index'
    get 'shades/show'
    get 'shades/create'
    get 'shades/delete'
    get 'kennels/index'
    get 'kennels/show'
    get 'kennels/create'
    get 'kennels/delete'
    # get 'buyers/index'
    # get 'buyers/show'
    # get 'buyers/create'
    # get 'buyers/delete'
    resources :buyers, only: [:index, :show, :create, :delete]
    resources :kennels, only: [:index, :show, :create, :delete]
    resources :shades, only: [:index, :show, :create, :update, :delete]
    resources :installs, only: [:index, :show, :create, :delete]
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
