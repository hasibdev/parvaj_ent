import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BaseValidator from './BaseValidator'

export class CreateSellerValidator extends BaseValidator {
  constructor(protected ctx: HttpContextContract) {
    super()
  }

  public schema = schema.create({
    name: schema.string({ trim: true }),
    phone: schema.string({ trim: true }, [
      rules.unique({ table: 'sellers', column: 'phone' }),
    ]),
    email: schema.string.nullable({ trim: true }, [
      rules.email(),
      rules.unique({ table: 'sellers', column: 'email' }),
    ]),
    shop_name: schema.string({ trim: true }),
    profile_image: schema.file.nullable({ extnames: ['.jpg', '.png', '.jpeg', '.svg'], size: '2mb' }),
    banner_image: schema.file.nullable({ extnames: ['.jpg', '.png', '.jpeg', '.svg'], size: '2mb' }),
    password: schema.string({}, [
      rules.minLength(6),
      rules.maxLength(180),
      rules.confirmed('confirmed_password')
    ])
  })

  public messages = { ...this.messages }
}
