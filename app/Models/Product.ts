import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Category from './Category'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public price: number

  @column()
  public qty: number

  @column()
  public unit: number
  @column()
  public unit_alias: string

  @column()
  public description: string

  @column()
  public brand: string


  @column()
  public admin_id: number

  @column()
  public category_id: number

  @hasOne(() => Category)
  public category: HasOne<typeof Category>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
