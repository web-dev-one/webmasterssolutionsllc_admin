Rails.application.routes.draw do
  namespace :api do
    # get 'buyers/index'
    # get 'buyers/show'
    # get 'buyers/create'
    # get 'buyers/delete'
    resources :buyers, only: [:index, :show, :create, :delete]
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
