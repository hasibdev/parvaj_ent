import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { LoginValidator } from 'App/Validators/AdminAuthValidator'

export default class AuthController {
  private loginView = 'Admin/Auth/Login'

  public async view({ inertia }: HttpContextContract) {
    return inertia.render(this.loginView)
  }
  public async login({ auth, request, response, session }: HttpContextContract) {
    try {
      const payload = await request.validate(LoginValidator)
      await auth.use('admin').attempt(payload.identifier, payload.password)

      return response.status(303).redirect('/admin')
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
    return response.status(303).redirect('/admin/login')
  }
}
