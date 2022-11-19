import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id').primary()

      table.string('name').notNullable()
      table.integer('price').notNullable()
      table.integer('qty').notNullable()
      table.integer('unit').notNullable()
      table.string('unit_alias').notNullable()

      table.string('description').nullable()
      table.string('brand').notNullable()

      table.bigInteger('category_id').unsigned().references('categories.id').notNullable()
      table.bigInteger('admin_id').unsigned().references('admins.id').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
