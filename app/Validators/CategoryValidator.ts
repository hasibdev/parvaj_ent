import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BaseValidator from './BaseValidator'

export class CreateCategoryValidator extends BaseValidator {
  constructor(protected ctx: HttpContextContract) {
    super()
  }

  public schema = schema.create({
    name: schema.string({ trim: true }),
    description: schema.string.optional({ trim: true }),
  })

  public messages = { ...this.messages }
}
