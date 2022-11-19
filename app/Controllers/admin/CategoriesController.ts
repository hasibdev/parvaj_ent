import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { pagination } from 'App/helpers/utils'
import Category from 'App/Models/Category'
import { CreateCategoryValidator } from 'App/Validators/CategoryValidator'

export default class CategoriesController {
  public async index({ request, inertia }: HttpContextContract) {
    const { page, perPage } = pagination(request)

    const data = await Category.query().paginate(page, perPage)

    return inertia.render('Admin/Categories/Index', { data })
  }

  public async create({ inertia }: HttpContextContract) {
    return inertia.render('Admin/Categories/Create')
  }

  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateCategoryValidator)
    await Category.create(payload)

    return response.status(303).redirect('/admin/categories')
  }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
