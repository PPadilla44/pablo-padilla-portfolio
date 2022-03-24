import { ShallowWrapper, shallow } from "enzyme";
import NavMobile from "./NavMobile";

describe('<NavMobile />', () => {

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<NavMobile />);
  })

  it('should render correctly', () => {
    wrapper.render();
  });

});
