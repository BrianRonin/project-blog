import Head from 'next/head'
import { useEffect, useState } from 'react'
import {
  default_variables,
  loadPosts,
  resolveLoadPosts,
} from '../../api/load-posts'
import { Posts_template } from '../../templates/Posts/Posts'
import { type_strapi_post } from '../../types/strapi/post'
import { type_strapi_settings } from '../../types/strapi/settings'
import { format_config } from '../../utils/format-config'
import { formater_posts } from '../../utils/format-posts'

export default function CategoryPage({
  _posts,
  setting,
  _variables,
}: {
  _posts: { attributes: type_strapi_post }[]
  setting: type_strapi_settings
  _variables: any
}) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (_posts) setLoading(false)
    console.log(_posts)
    console.log(setting)
    // console.log('aqui')
    // console.log('aqui 2')
    // // console.log(posts)
  }, [_posts])

  return loading ? (
    <h1>Loading</h1>
  ) : (
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
    category: ctx.params.slug as string,
  }

  try {
    data = await loadPosts(_variables)
  } catch {
    data = null
  }

  if (data === null) {
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
    fallback: true,
    paths: [],
  }
}
