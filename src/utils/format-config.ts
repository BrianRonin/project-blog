import { type_strapi_menu_link } from '../types/strapi/menu_link'
import { type_strapi_settings } from '../types/strapi/settings'

export const format_config = (
  obj: type_strapi_settings,
) => {
  return {
    blog_name: obj.attributes.blog_name,
    blog_description:
      obj.attributes.blog_description,
    logo: {
      url: obj.attributes.logo.data.attributes
        .url,
      altText:
        obj.attributes.logo.data.attributes
          .alternativeText,
    },
    menu_link: obj.attributes.menu_link.reduce<
      type_strapi_menu_link[]
    >((prev, m) => {
      return [
        ...prev,
        {
          text: m.text,
          link: m.link,
          new_tab: m.new_tab,
        },
      ]
    }, []),
    footer: obj.attributes.footer,
  }
}
