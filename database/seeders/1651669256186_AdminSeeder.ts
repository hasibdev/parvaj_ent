import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Admin from 'App/Models/Admin'
import Seller from 'App/Models/Seller'

export default class extends BaseSeeder {
  public async run() {
    const email = 'admin@test.com'
    await Admin.create({
      name: 'Admin',
      email,
      phone: "0123456789",
      password: '123456'
    })

    await Seller.create({
      name: 'Seller',
      email: "seller@test.com",
      phone: "0123456789",
      shop_name: "Test Shop",
      admin_id: 1,
      password: '123456'
    })
  }
}
