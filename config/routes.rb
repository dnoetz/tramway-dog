Rails.application.routes.draw do
  root 'pages#home'
  get 'about', to: 'pages#about'
  get 'services-products', to: 'pages#services'
  get 'contact', to: 'pages#contact'
  get 'testimonials', to: 'pages#testimonials'
  get 'prices', to: 'pages#prices'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
