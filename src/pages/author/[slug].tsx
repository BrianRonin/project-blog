import Head from 'next/head'
import { useEffect } from 'react'
import {
  loadPosts,
  resolveLoadPosts,
} from '../../api/load-posts'
import { Posts_template } from '../../templates/Posts/Posts'
import { type_strapi_post } from '../../types/strapi/post'
import { type_strapi_settings } from '../../types/strapi/settings'
import { format_config } from '../../utils/format-config'
import { formater_posts } from '../../utils/format-posts'

export default function AuthorPage({
  _posts,
  setting,
}: {
  _posts: { attributes: type_strapi_post }[]
  setting: type_strapi_settings
}) {
  const posts = useEffect(() => {
    // console.log(posts)
    // console.log(setting)
    // console.log('aqui')
    // console.log('aqui 2')
    // // console.log(posts)
  }, [])
  return (
    <>
      <Head>
        <title>
          {setting.attributes.blog_name}
        </title>
        <meta
          name='description'
          content={
            setting.attributes.blog_description
          }
        />
      </Head>
      <Posts_template
        posts={formater_posts(_posts)}
        settings={format_config(setting)}
      />
    </>
  )
}

export const getStaticProps = async (ctx) => {
  let data = null
  try {
    data = await loadPosts({
      author: ctx.params.slug as string,
    })
  } catch {
    data = null
  }

  if (!data || !data.posts.data.length) {
    return { props: { NotFound: true } }
  }

  return {
    props: {
      _posts: data.posts.data,
      setting: data.setting.data,
    },
    revalidate: 24 * 60 * 60,
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}
