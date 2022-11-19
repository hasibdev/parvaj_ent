import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'

export default class CategorySeeder extends BaseSeeder {
  public async run() {
    await Category.createMany([
      { name: "LP Gas", description: "", admin_id: 1 },
      { name: "Water", description: "", admin_id: 1 },
    ])
  }
}
