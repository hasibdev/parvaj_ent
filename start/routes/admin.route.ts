import Route from '@ioc:Adonis/Core/Route'

// Auth

Route.group(() => {
  Route.get('/login', 'AuthController.view').as('login')
  Route.post('/login', 'AuthController.login').as('login.post')

  // Auth Middleware
  Route.group(() => {
    Route.get('/', 'DashboardController.index').as('dashboard')
  }).middleware(['auth:admin'])

}).as('admin')
