import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {
  loadPosts,
  resolveLoadPosts,
} from '../../api/load-posts'
import { Post_template } from '../../templates/Post/Post'
import { type_strapi_post } from '../../types/strapi/post'
import { type_strapi_settings } from '../../types/strapi/settings'
import { format_config } from '../../utils/format-config'
import { format_post } from '../../utils/format-post'

export default function PostPage({
  _posts,
  setting,
  slug,
}: {
  slug: string
  _posts: any
  setting: type_strapi_settings
}) {
  useEffect(() => {
    console.log('_posts')
    console.log(_posts)
    console.log('setting')
    console.log(setting)
  }, [])
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading ...</h1>
  }
  return (
    <>
      <Head>
        <title>
          {_posts.posts.data[0].attributes.title}
        </title>
      </Head>
      <Post_template
        slug={slug}
        post={format_post(_posts)}
        settings={format_config(setting)}
      />
    </>
  )
}

export const getStaticProps = async (
  ctx: any,
) => {
  let data = null
  try {
    data = await loadPosts({
      slug: ctx.params.slug as string,
    })
  } catch {
    data = null
  }

  if (!data || !data.posts.data.length) {
    return { props: { NotFound: true } }
  }

  return {
    props: {
      slug: ctx.params.slug,
      _posts: data,
      setting: data.setting.data,
    },
    revalidate: 24 * 60 * 60,
  }
}

export const getStaticPaths = async () => {
  let data = null
  let paths: any = []

  try {
    data = await loadPosts()
    paths = data.posts.data.map((post) => ({
      params: { slug: post.attributes.slug },
    }))
  } catch {
    data = null
  }

  if (!data || !data.posts.data.length) {
    return (paths = [])
  }

  return {
    paths,
    fallback: true,
  }
}
