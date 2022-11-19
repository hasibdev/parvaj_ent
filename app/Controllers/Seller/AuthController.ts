import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { LoginValidator } from 'App/Validators/AdminAuthValidator'

export default class AuthController {
  public async view({ inertia }: HttpContextContract) {
    return inertia.render('Seller/Auth/Login')
  }
  public async login({ auth, request, response }: HttpContextContract) {
    const payload = await request.validate(LoginValidator)
    await auth.use('seller').attempt(payload.identifier, payload.password)

    return response.status(303).redirect('/seller')
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.logout()
    return response.status(303).redirect('/seller/login')
  }
}
