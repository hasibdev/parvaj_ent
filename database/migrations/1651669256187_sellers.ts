import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SellersSchema extends BaseSchema {
  protected tableName = 'sellers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id').primary()

      table.string('name', 100).notNullable()
      table.string('phone', 20).notNullable()
      table.string('email', 255).nullable()

      table.string('shop_name').notNullable()
      table.json('profile_image').nullable()
      table.json('banner_image').nullable()

      table.boolean('email_varified').defaultTo(false)
      table.boolean('phone_varified').defaultTo(false)

      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
