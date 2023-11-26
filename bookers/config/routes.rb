Rails.application.routes.draw do
  resources :books
  
  root 'homes#top'

  
  get "up" => "rails/health#show", as: :rails_health_check

end
