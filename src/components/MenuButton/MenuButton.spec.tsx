import { ShallowWrapper, shallow } from "enzyme";
import MenuButton from "./MenuButton";

describe('<MenuButton />', () => {

  let wrapper: ShallowWrapper;
  const mockSet = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<MenuButton opened={false} setOpened={mockSet} />);
  })

  it('should render correctly', () => {
    wrapper.render();
  });

});
