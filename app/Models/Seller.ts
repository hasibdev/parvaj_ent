import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'

import {
  attachment,
  AttachmentContract
} from '@ioc:Adonis/Addons/AttachmentLite'
import Admin from './Admin'

export default class Seller extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string | null

  @column()
  public phone: string

  @column()
  public shop_name: string

  @attachment({ folder: 'sellers/profile' })
  public profile_image: AttachmentContract | null

  @attachment({ folder: 'sellers/banner' })
  public banner_image: AttachmentContract | null

  @column({ serializeAs: null })
  public password: string

  @column()
  public email_varified: boolean

  @column()
  public phone_varified: boolean

  @column()
  public admin_id: number

  @hasOne(() => Admin)
  admin: HasOne<typeof Admin>

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(seller: Seller) {
    if (seller.$dirty.password) {
      seller.password = await Hash.make(seller.password)
    }
  }
}
