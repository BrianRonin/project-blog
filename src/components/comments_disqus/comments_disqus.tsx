import { DiscussionEmbed } from 'disqus-react'
import { useEffect } from 'react'
import config from '../../config/index'
import { if_window } from '../../utils/is-window'
import * as S from './S.comments_disqus'

export type commentsDisqusProps = {
  slug: string
  allowComments: boolean
  title: string
}

export const CommentsDisqus = ({
  slug,
  allowComments,
  title,
}: commentsDisqusProps) => {
  useEffect(() => {
    let remove_ads: any
    if_window(() => {
      remove_ads = setTimeout(() => {
        document
          .querySelectorAll('iframe[src*=ads]')
          .forEach((el) => el.remove)
      }, 1000)
    })
    return () => clearTimeout(remove_ads)
  }, [])

  if (!allowComments) return null
  return (
    <S.Main>
      <DiscussionEmbed
        shortname='title'
        config={{
          url: `${config.url}/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt-BR',
        }}
      />
    </S.Main>
  )
}
