import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Customer from 'App/Models/Customer'

export default class CustomerSeeder extends BaseSeeder {
  public async run() {
    await Customer.createMany([
      {
        name: 'Eddis Molla',
        address: 'Ulon Rampura',
        phone: "0123456789",
        admin_id: 1
      },
      {
        name: 'Hasan Hotel',
        address: 'Ulon Rampura',
        phone: "0123456789",
        admin_id: 1
      },
    ])
  }
}
