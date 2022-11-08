import Head from 'next/head'
import { useEffect } from 'react'
import {
  default_variables,
  loadPosts,
  resolveLoadPosts,
} from '../api/load-posts'
import { Posts_template } from '../templates/Posts/Posts'
import { type_strapi_post } from '../types/strapi/post'
import { type_strapi_settings } from '../types/strapi/settings'
import { format_config } from '../utils/format-config'
import { formater_posts } from '../utils/format-posts'

export default function Index({
  _posts,
  setting,
  variables,
}: {
  _posts: { attributes: type_strapi_post }[]
  setting: type_strapi_settings
  variables: any
}) {
  useEffect(() => {
    console.log('_posts')
    console.log(_posts)
    console.log('setting')
    console.log(setting)
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
        _posts={formater_posts(_posts)}
        settings={format_config(setting)}
        _variables={variables}
      />
    </>
  )
}

export const getStaticProps = async () => {
  let data = null
  try {
    data = await loadPosts()
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
      variables: {
        ...default_variables,
      },
    },
    revalidate: 24 * 60 * 60,
  }
}
