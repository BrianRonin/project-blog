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

export default function TagPage({
  _posts,
  setting,
  _variables,
}: {
  _posts: { attributes: type_strapi_post }[]
  setting: type_strapi_settings
  _variables: any
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
        _posts={formater_posts(_posts)}
        settings={format_config(setting)}
        _variables={_variables}
      />
    </>
  )
}

export const getStaticProps = async (ctx) => {
  let data = null
  const _variables = {
    tag: ctx.params.slug as string,
  }

  try {
    data = await loadPosts(_variables)
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
      _variables,
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
