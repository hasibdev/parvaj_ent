import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class CategorySeeder extends BaseSeeder {
  public async run() {
    await Product.createMany([
      {
        name: 'Omera 12KG',
        price: 1200,
        description: "",
        brand: "Omera",
        category_id: 1,
        qty: 1,
        unit: 12,
        unit_alias: "kg",
        admin_id: 1
      },
      {
        name: 'Omera 35KG',
        price: 1200,
        description: "",
        brand: "Omera",
        category_id: 1,
        qty: 1,
        unit: 35,
        unit_alias: "kg",
        admin_id: 1
      },
      {
        name: 'Bashundhara 12KG',
        price: 1250,
        description: "",
        brand: "Bashundhara",
        category_id: 1,
        qty: 1,
        unit: 12,
        unit_alias: "kg",
        admin_id: 1
      },
      {
        name: 'Bashundhara 35KG',
        price: 1250,
        description: "",
        brand: "Bashundhara",
        category_id: 1,
        qty: 1,
        unit: 35,
        unit_alias: "kg",
        admin_id: 1
      },
      {
        name: 'BM 12KG',
        price: 1150,
        description: "",
        brand: "BM",
        category_id: 1,
        qty: 1,
        unit: 12,
        unit_alias: "kg",
        admin_id: 1
      },
    ])
  }
}
