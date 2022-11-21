import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel } from '@ioc:Adonis/Lucid/Orm'

import {
  attachment,
  AttachmentContract
} from '@ioc:Adonis/Addons/AttachmentLite'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public firstName: string

  @column()
  public lastName: string

  @column()
  public email: string

  @column()
  public phone: string

  @attachment({ folder: 'users/profile' })
  public profile_image: AttachmentContract

  @attachment({ folder: 'users/banner' })
  public banner_image: AttachmentContract

  @column({ serializeAs: null })
  public password: string

  @column()
  public email_varified: boolean

  @column()
  public phone_varified: boolean

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
