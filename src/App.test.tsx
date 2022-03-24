import App from './App';
import { shallow, ShallowWrapper } from 'enzyme';


describe('<App />', () => {

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should render correctly', () => {
    wrapper.render();
  });

});
