import { type_strapi_img } from './image'
import { type_strapi_menu_link } from './menu_link'

export type type_strapi_settings = {
  blog_name: string
  blog_description: string
  logo: type_strapi_img
  menu_link: type_strapi_menu_link[]
  footer: string
}
