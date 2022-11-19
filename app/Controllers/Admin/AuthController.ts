import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { LoginValidator } from 'App/Validators/AdminAuthValidator'

export default class AuthController {
  private loginView = 'Admin/Auth/Login'

  public async view({ inertia }: HttpContextContract) {
    return inertia.render(this.loginView)
  }
  public async login({ auth, request, response }: HttpContextContract) {
    const payload = await request.validate(LoginValidator)
    await auth.use('admin').attempt(payload.identifier, payload.password)

    return response.status(303).redirect('/admin')
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.logout()
    return response.status(303).redirect('/admin/login')
  }
}
