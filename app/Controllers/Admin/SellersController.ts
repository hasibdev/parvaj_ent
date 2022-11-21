import { Attachment } from '@ioc:Adonis/Addons/AttachmentLite'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Seller from 'App/Models/Seller'
import { CreateSellerValidator } from 'App/Validators/SellerValidator'

export default class SellersController {
  public async index({ inertia }: HttpContextContract) {
    return inertia.render('Admin/Sellers/Index')
  }

  public async create({ inertia }: HttpContextContract) {
    return inertia.render('Admin/Sellers/Create')
  }

  public async store({ request, response, auth }: HttpContextContract) {
    const payload = await request.validate(CreateSellerValidator)

    const seller = new Seller()

    seller.name = payload.name
    seller.email = payload.email
    seller.phone = payload.phone
    seller.shop_name = payload.shop_name
    seller.password = payload.password
    seller.admin_id = auth.user!.id

    const profileImage = request.file('profile_image')
    if (profileImage) {
      seller.profile_image = Attachment.fromFile(profileImage)
    }

    const bannerImage = request.file('banner_image')
    if (bannerImage) {
      seller.profile_image = Attachment.fromFile(bannerImage)
    }

    await seller.save()

    return response.status(303).redirect().back()
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
