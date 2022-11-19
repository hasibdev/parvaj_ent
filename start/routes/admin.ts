import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
   // Auth
   Route.get('/login', 'AuthController.login')

   Route.get('/', 'DashboardController.index')

   Route.resource('categories', 'CategoriesController')
   Route.resource('products', 'ProductsController')

}).prefix('admin').namespace('App/Controllers/admin')
