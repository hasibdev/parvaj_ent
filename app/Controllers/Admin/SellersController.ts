import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SellersController {
  public async index({ inertia }: HttpContextContract) {
    return inertia.render('Admin/Sellers/Index')
  }

  public async create({ inertia }: HttpContextContract) {
    return inertia.render('Admin/Sellers/Create')
  }

  public async store({ }: HttpContextContract) {

  }

  public async show({ inertia }: HttpContextContract) {
    return inertia.render('Admin/Sellers/Show')
  }

  public async edit({ inertia }: HttpContextContract) {
    return inertia.render('Admin/Sellers/Index')
  }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
