import { screen } from '@testing-library/react'
import { renderTheme } from '~/styles/render-theme'
import { ArticleHeader } from './article_header'
import { mock_article_header } from './M.article_header'
describe('<ArticleHeader />', () => {
  it('should render', () => {
    const { container, debug } = renderTheme(
      <ArticleHeader {...mock_article_header} />,
    )
    expect(screen.getByText(mock_article_header.excerpt)).toBeInTheDocument()
    expect(container).toMatchSnapshot()
    debug()
  })
})
