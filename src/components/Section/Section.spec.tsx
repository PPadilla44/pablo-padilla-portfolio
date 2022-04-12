import Section from "./Section";
import { shallow, ShallowWrapper } from 'enzyme';

describe('<Section />', () => {

    describe('<Section />', () => {


        let wrapper: ShallowWrapper;

        beforeEach(() => {
            wrapper = shallow(
                <Section name="test">
                    <h1>Testing</h1>
                </Section>

            );
        })

        it('should render correctly', () => {
            wrapper.render();
        });

    });


});