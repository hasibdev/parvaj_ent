import Route from '@ioc:Adonis/Core/Route'

// Auth

Route.group(() => {
  Route.get('/login', 'AuthController.view').as('login')
  Route.post('/login', 'AuthController.login').as('login.post')

  Route.group(() => {
    Route.get('/', 'DashboardController.index').as('dashboard')

    Route.resource('categories', 'CategoriesController').as('categories')
    Route.resource('products', 'ProductsController').as('products')
  }).middleware(['auth:seller'])


}).as('seller')
