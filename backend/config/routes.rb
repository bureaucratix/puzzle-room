Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :messages
      resources :riddles
    end
  end
end