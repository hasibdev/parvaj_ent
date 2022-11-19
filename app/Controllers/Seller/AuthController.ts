import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { LoginValidator } from 'App/Validators/AdminAuthValidator'

export default class AuthController {
  public async view({ inertia }: HttpContextContract) {
    return inertia.render('Admin/Auth/Login')
  }
  public async login({ auth, request, response }: HttpContextContract) {
    const payload = await request.validate(LoginValidator)
    await auth.use('seller').attempt(payload.identifier, payload.password)

    return response.redirect('/seller')
  }

  public async logout({ auth, inertia }: HttpContextContract) {
    await auth.logout()
    return inertia.render('Auth/AdminLogin')
  }
}
