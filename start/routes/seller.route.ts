import Route from '@ioc:Adonis/Core/Route'

// Auth
Route.get('/login', 'AuthController.view')
Route.post('/login', 'AuthController.login')

Route.group(() => {
  Route.get('/', 'DashboardController.index')

  Route.resource('categories', 'CategoriesController')
  Route.resource('products', 'ProductsController')

})
