import { screen } from '@testing-library/react'
import { renderTheme } from '../../../styles/render-theme'
import { mock_post_card } from './M.post_card'
import { PostCard } from './post_card'
describe('<PostCard />', () => {
  it('should render correctly', () => {
    const { container } = renderTheme(
      <PostCard {...mock_post_card} />,
    )
    expect(
      screen.getByRole('heading', {
        name: mock_post_card.title,
      }),
    )
    expect(
      screen.getByRole('img', {
        name: mock_post_card.coverWithMetaProps
          .coverWithMeta.altText,
      }),
    )
    expect(
      screen.getByText(mock_post_card.excerpt),
    )
    expect(
      screen.getByRole('link', {
        name: mock_post_card.title,
      }),
    ).toHaveAttribute('href', '/post/test')

    expect(container).toMatchSnapshot()
  })
})
