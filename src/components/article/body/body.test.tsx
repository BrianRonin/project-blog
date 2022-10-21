import { renderTheme } from '../../styles/render-theme';
import { Body } from './body';
describe('<Body />', () => {
  it('should render', () => {
    renderTheme(<Body ??hasMock?? />)
  })
})
