import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { LoginValidator } from 'App/Validators/AdminAuthValidator'

export default class AuthController {
  public async view({ inertia }: HttpContextContract) {
    return inertia.render('Seller/Auth/Login')
  }
  public async login({ auth, request, response, session }: HttpContextContract) {
    try {
      const payload = await request.validate(LoginValidator)
      await auth.use('seller').attempt(payload.identifier, payload.password)

      return response.status(303).redirect('/seller')
    } catch (error) {
      session.flash({
        errors: {
          invalid: 'Invalid E-mail or password!',
          error
        }
      })
      return response.redirect().back()
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.logout()
    return response.status(303).redirect('/seller/login')
  }
}
