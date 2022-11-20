import Route from '@ioc:Adonis/Core/Route'

// Auth

Route.group(() => {
  Route.get('/login', 'AuthController.view').as('login')
  Route.post('/login', 'AuthController.login').as('login.post')

  // Auth Middleware
  Route.group(() => {
    Route.get('/', 'DashboardController.index').as('dashboard')

    Route.resource('sellers', 'SellersController').as('sellers')

    Route.post('logout', 'AuthController.logout').as('logout')
  }).middleware(['auth:admin'])

}).as('admin')
