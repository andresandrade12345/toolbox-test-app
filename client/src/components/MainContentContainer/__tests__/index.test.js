import React from 'react';
import MainContent from '../';

describe('test:MainContent', () => {

    test('renders and pass snapshot test', () => {
        const wrapper = shallow(
            <MainContent />
        );

        return expect(wrapper).toMatchSnapshot();
    });

    test(`contains a div with text 'test'`, () => {
        const wrapper = mount(
            <MainContent>
                <div>Test</div>
            </MainContent>
        );

        const wrapperChildren = shallow(wrapper.prop('children'));

        return expect(wrapperChildren.text()).toBe('Test')
    });

});