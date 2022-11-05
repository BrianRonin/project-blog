import { load_posts_variables } from '../../../api/load-posts'
import { Button } from '../../button/button'
import { mock_post_card } from '../post_card/M.post_card'
import {
  PostCard,
  postCardProps,
} from '../post_card/post_card'
import * as S from './S.post_grid'

export type postGridProps = {
  posts?: postCardProps[]
  hasLoadMore?:
    | {
        handleButton?: () => any
        hasMore?: boolean
        buttonDisabled: boolean
      }
    | undefined
}

export const PostGrid = ({
  posts,
  hasLoadMore,
}: postGridProps) => {
  return (
    <S.Main>
      {posts?.length === undefined && (
        <S.NotFound>
          Nenhum post encontrado aqui
        </S.NotFound>
      )}
      <S.Grid>
        {posts?.length !== 0 &&
          posts?.map((post, i) => (
            <PostCard
              key={'key-react-post-cart' + i}
              {...post}
            />
          ))}
      </S.Grid>
      {!!hasLoadMore && (
        <S.ButtonContainer>
          <Button
            text={
              hasLoadMore.hasMore
                ? 'Carregar mais'
                : 'Sem mais posts'
            }
            handle={hasLoadMore.handleButton}
            disabled={hasLoadMore.buttonDisabled}
          />
        </S.ButtonContainer>
      )}
    </S.Main>
  )
}
