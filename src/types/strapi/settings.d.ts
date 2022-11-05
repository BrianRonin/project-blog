import { type_strapi_img } from './image'
import { type_strapi_menu_link } from './menu_link'

export type type_strapi_settings = {
  id: string
  attributes: {
    blog_name: string
    blog_description: string
    logo: {
      data: {
        attributes: {
          url: string
          alternativeText: string
        }
      }
    }
    menu_link: {
      id: string
      new_tab: boolean
      text: string
      link: string
    }[]
    footer: string
  }
}
