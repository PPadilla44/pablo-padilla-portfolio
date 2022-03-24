import Nav from "./Nav";
import { shallow, ShallowWrapper } from 'enzyme';

describe('<Nav />', () => {

    describe('<Nav />', () => {


        let wrapper: ShallowWrapper;

        beforeEach(() => {
            wrapper = shallow(<Nav />);
        })

        it('should render correctly', () => {
            wrapper.render();
        });

    });


});