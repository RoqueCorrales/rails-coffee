Rails.application.routes.draw do
  resources :productions
  resources :blights
  resources :empl_works
  resources :works
  resources :farmers
  resources :users
  resources :sessions, only: [:create, :destroy]

    match '/signin',  to: 'sessions#create',      via: 'post'
    match '/signout', to: 'sessions#destroy',     via: 'delete'
   
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
