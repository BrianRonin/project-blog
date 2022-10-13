import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'
import { NavLink } from './nav_link'

describe('<NavLink />', () => {
  it('should render a link', () => {
    renderTheme(<NavLink link={'google.com'}>teste</NavLink>)
    expect(screen.getByRole('link', { name: 'teste' })).toBeInTheDocument()
  })
  it('should have default target', () => {
    renderTheme(<NavLink link={'google.com'}>teste</NavLink>)
    expect(screen.getByRole('link', { name: 'teste' })).toHaveAttribute(
      'target',
      '_self',
    )
  })
  it('should have attributes', () => {
    renderTheme(
      <NavLink newTab={true} link={'google.com'}>
        teste
      </NavLink>,
    )
    expect(screen.getByRole('link', { name: 'teste' })).toHaveAttribute(
      'target',
      '_blank',
    )
  })
  it('should snapshot', () => {
    renderTheme(<NavLink link={'google.com'}>teste</NavLink>)
    expect(screen.getByRole('link', { name: 'teste' })).toMatchSnapshot()
  })
})
