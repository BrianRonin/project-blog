import Head from 'next/head'
import { useRouter } from 'next/router'
import {
  loadPosts,
  resolveLoadPosts,
} from '../../api/load-posts'
import { Post_template } from '../../templates/Post/Post'
import { type_strapi_settings } from '../../types/strapi/settings'
import { format_config } from '../../utils/format-config'
import { format_post } from '../../utils/format-post'

export default function PostPage({
  _posts,
  setting,
}: {
  _posts: resolveLoadPosts
  setting: type_strapi_settings
}) {
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
        settings={format_config(setting)}
        post={format_post(_posts)}
      />
    </>
  )
}

export const getStaticProps = async (ctx) => {
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