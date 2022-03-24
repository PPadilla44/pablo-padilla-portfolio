import { ShallowWrapper, shallow } from "enzyme";
import Hero from "./Hero";

describe('<Hero />', () => {

    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Hero />);
    })

    it('should render correctly', () => {
        wrapper.render();
    });

});
