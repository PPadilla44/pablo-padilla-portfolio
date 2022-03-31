import { ShallowWrapper, shallow } from "enzyme";
import Button from "./Button"

describe('<Button />', () => {

    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Button className='bg-dom text-xl text-white' text='Contact Me' />);
    })

    it('should render correctly', () => {
        wrapper.render();
    });

});
