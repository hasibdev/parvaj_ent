import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Admin from 'App/Models/Admin'
import Seller from 'App/Models/Seller'

export default class extends BaseSeeder {
  public async run() {
    const email = 'admin@test.com'
    await Admin.create({
      name: 'Admin',
      email,
      password: '123456'
    })

    await Seller.create({
      name: 'Seller',
      email: "seller@test.com",
      shop_name: "Test Shop",
      password: '123456'
    })
  }
}
