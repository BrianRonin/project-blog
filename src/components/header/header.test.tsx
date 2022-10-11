import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'
import { Header } from './header'
import { mock_header } from './M.header'

describe('<Header />', () => {
  it('should render with text', () => {
    const { container, debug } = renderTheme(<Header {...mock_header} />)
    expect(container).toBeInTheDocument()
    screen.getByRole('heading', { name: mock_header.title })
    screen.getByText('description lorem ipsum banana couve maça')
    expect(screen.getByAltText(mock_header.alt)).toHaveAttribute(
      'src',
      mock_header.srcImg,
    )
  })
  it('should render without text', () => {
    const { container, debug } = renderTheme(
      <Header allowText={false} {...mock_header} />,
    )
    expect(container).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: mock_header.title })).toBe(
      null,
    )
    expect(screen.queryByText(mock_header.description)).toBe(null)
    screen.getByAltText('alt da imagem')
  })
  it('should match snapshot', () => {
    const { container, debug } = renderTheme(<Header {...mock_header} />)
    expect(container).toMatchSnapshot()
  })
})
