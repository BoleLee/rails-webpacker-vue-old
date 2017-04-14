Rails.application.routes.draw do
  namespace :admin do
    get 'application/index'
    get 'home/index'
    get 'home/show'
    get 'help/index'
  end


  get 'static_pages/home'

  get 'static_pages/help'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
