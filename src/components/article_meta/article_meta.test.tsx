import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'
import { ArticleMeta } from './article_meta'
import { mock_article_meta as mock } from './M.article_meta'

describe('<ArticleMeta />', () => {
  it('should render name author and link', () => {
    const { debug, container } = renderTheme(<ArticleMeta {...mock} />)
    debug()
    const author = screen.getByRole('link', { name: mock.author.name })
    expect(author).toHaveAttribute('href', '/author/' + mock.author.slug)
    const date = document.getElementsByTagName('time')
    expect(date[0].textContent).toMatch(/4 de out. de 2022/)
    expect(date[0].getAttribute('dateTime')).toBe(mock.createdAt)
    expect(
      screen.getByRole('link', { name: RegExp(mock.category.name) }),
    ).toHaveAttribute('href', '/category/' + mock.category.slug)
    const tags = document.getElementsByClassName('tags')
    expect(tags.length).toBe(1)
    expect(tags[0].textContent).toMatch(/#React#JavaScript/)
    const component = document.getElementsByClassName(
      'id-component-article-meta',
    )
    console.log(component[0].textContent)
  })
})
