import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CategoriesController {
  public async index({ inertia }: HttpContextContract) {
    return inertia.render('Admin/Categories/Index')
  }

  public async create({ inertia }: HttpContextContract) {
    return inertia.render('Admin/Categories/Create')
  }

  public async store({ }: HttpContextContract) { }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
