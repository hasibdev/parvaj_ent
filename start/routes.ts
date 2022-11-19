import Route from '@ioc:Adonis/Core/Route'

// Http public route
import './routes/http.route'

// Admin Routes
Route.group(async () => {
  await require('./routes/admin.route')
})
  .prefix('admin')
  .namespace('App/Controllers/Admin')

// Admin Routes
Route.group(async () => {
  await require('./routes/seller.route')
})
  .prefix('seller')
  .namespace('App/Controllers/Seller')
