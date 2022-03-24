import { ShallowWrapper, shallow } from "enzyme";
import Button from "./Button"

describe('<Button />', () => {

    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Button className='bg-10-light text-xl text-30-light' text='Contact Me' />);
    })

    it('should render correctly', () => {
        wrapper.render();
    });

});
