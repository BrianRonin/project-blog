import { renderTheme } from '../../../styles/render-theme'
import { PostTags } from './post_tags'
import { mock_post_tags } from './M.post_tags'
import { screen } from '@testing-library/react'

describe('<PostTags />', () => {
  it('should render and snapshot', () => {
    const { container } = renderTheme(
      <PostTags {...mock_post_tags} />,
    )
    expect(
      screen.getByText(/Tags:/i),
    ).toBeInTheDocument()
    expect(
      screen.getAllByRole('link'),
    ).toHaveLength(5)
    expect(container).toMatchSnapshot()
  })
  it('should snapshot without tags', () => {
    const { container } = renderTheme(
      <PostTags
        {...mock_post_tags}
        tags={undefined}
      />,
    )
    expect(container).toMatchSnapshot()
  })
})
