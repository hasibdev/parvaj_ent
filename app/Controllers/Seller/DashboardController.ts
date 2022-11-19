import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DashboardController {
  public async index({ inertia }: HttpContextContract) {
    return inertia.render('Seller/Dashboard')
  }

  public async create({ }: HttpContextContract) { }

  public async store({ }: HttpContextContract) { }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
