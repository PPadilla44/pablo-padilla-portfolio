import { ShallowWrapper, shallow } from "enzyme";
import Logo from "./Logo"

describe('<Logo />', () => {

    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Logo className="w-14 h-14 text-6xl font-bold" />);
    })

    it('should render correctly', () => {
        wrapper.render();
    });

});
