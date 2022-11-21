import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel } from '@ioc:Adonis/Lucid/Orm'

import {
  attachment,
  AttachmentContract
} from '@ioc:Adonis/Addons/AttachmentLite'

export default class Admin extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public phone: string

  @column({ serializeAs: null })
  public password: string

  @attachment({ folder: 'admins/profile' })
  public profile_image: AttachmentContract

  @attachment({ folder: 'admins/banner' })
  public banner_image: AttachmentContract

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(admin: Admin) {
    if (admin.$dirty.password) {
      admin.password = await Hash.make(admin.password)
    }
  }
}
