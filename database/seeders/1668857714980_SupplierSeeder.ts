import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Supplier from 'App/Models/Supplier'

export default class SupplierSeeder extends BaseSeeder {
  public async run() {
    await Supplier.createMany([
      {
        name: 'G Gas',
        address: 'Ulon Rampura',
        phone: "0123456789",
        admin_id: 1
      },
      {
        name: 'Helal',
        address: 'Bou Bazar',
        phone: "0123456789",
        admin_id: 1
      },
    ])
  }
}
