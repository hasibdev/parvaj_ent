import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  // Auth
  Route.get('/login', 'AuthController.view')
  Route.post('/login', 'AuthController.login')

  Route.get('/', 'DashboardController.index')

  Route.resource('categories', 'CategoriesController')
  Route.resource('products', 'ProductsController')

})
