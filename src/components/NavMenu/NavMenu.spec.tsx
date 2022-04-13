import { ShallowWrapper, shallow } from "enzyme";
import NavMenu from "./NavMenu";
describe('<NavMenu />', () => {

    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<NavMenu toggle={() => {}} opened={false} />);
    })

    it('should render correctly', () => {
        wrapper.render();
    });

});
