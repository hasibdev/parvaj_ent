import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Admin from 'App/Models/Admin'

export default class extends BaseSeeder {
  public async run() {
    const email = 'admin@test.com'
    await Admin.create({
      name: 'Admin',
      email,
      shop_name: 'Parvaj Enterprise',
      password: '123456'
    })
  }
}
