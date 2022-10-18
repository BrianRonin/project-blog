import { screen } from '@testing-library/react'
import { renderTheme } from '../../../styles/render-theme'
import { CoverWithMeta } from './cover_with_meta'
import { mock_coverWithMeta } from './M.cover_with_meta'
import { formatDate } from '../../../utils/format-date'

describe('<CoverWithMeta />', () => {
  it('should render and match snapshot', () => {
    const { container } = renderTheme(
      <CoverWithMeta {...mock_coverWithMeta} />,
    )
    const meta = document.getElementsByClassName(
      'id-component-article-meta',
    )[0].textContent
    expect(meta).toMatch(
      'Por BrianRonin em 4 de out. de 2022, Docker, #React#JavaScript',
    )
    expect(
      screen.getByRole('img', {
        name: 'alt da imagem',
      }),
    ).toHaveAttribute(
      'src',
      'https://miro.medium.com/max/640/0*i1v1In2Tn4Stnwnl.jpg',
    )
    expect(container).toMatchSnapshot()
  })
})
