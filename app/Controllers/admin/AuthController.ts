import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
   public async login({ inertia }: HttpContextContract) {
      return inertia.render('Admin/Auth/Login')
   }
}
