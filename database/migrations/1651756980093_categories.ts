import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import StatusType from 'App/Enums/StatusType'

export default class Categories extends BaseSchema {
  protected tableName = 'categories'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id').primary()

      table.string('name').notNullable()
      table.string('description').nullable()

      table.bigInteger('seller_id').unsigned().references('sellers.id').notNullable()

      table.enum('status', Object.values(StatusType)).defaultTo(StatusType.DRAFT)

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
