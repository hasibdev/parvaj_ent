import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async view({ inertia }: HttpContextContract) {
    return inertia.render('Admin/Auth/Login')
  }
  public async login({ request }: HttpContextContract) {
    return request.all()
  }
}
