import { ShallowWrapper, shallow } from "enzyme";
import MenuButton from "./MenuButton";

describe('<MenuButton />', () => {

  let wrapper: ShallowWrapper;
  const mockSet = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<MenuButton toggle={() => {}}  />);
  })

  it('should render correctly', () => {
    wrapper.render();
  });

});
