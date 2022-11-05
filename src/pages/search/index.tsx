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

export default function SearchPage({
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

export const getServerSideProps = async (ctx) => {
  let data = null
  try {
    data = await loadPosts({
      title: ctx.query.q as string,
    })
  } catch {
    data = null
  }

  if (data === null) {
    return { props: { NotFound: true } }
  }

  return {
    props: {
      _posts: data.posts.data,
      setting: data?.setting
        ? data.setting.data
        : data,
    },
  }
}
