import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    Button,
    Form,
    Input,
    Alert
} from 'reactstrap';
import { storeIntialStateMock, storeStateWithMessageMock, storeStateWithMessageErrorMock } from '../../../__mocks__/mocks';
import { MessageForm } from '../';

const mockStore = configureMockStore([thunk]);

const props = {
    sendMessage: jest.fn(),
};

let wrapper;
let store;

describe('test:MessageForm', () => {

    beforeEach(() => {
        store = mockStore(storeIntialStateMock);

        wrapper = shallow(
            <MessageForm store={store} {...props} />
        );

        jest.resetAllMocks()
    });

    describe('MessageForm', () => {

        test('renders a <Form> element', () => {
            expect(wrapper.find(Form).length).toBe(1);
        });

        test(`renders an <Input> with name 'message' and type 'textarea'`, () => {
            const inputComp = wrapper.find(Input);

            expect(inputComp.length).toBe(1);
            expect(inputComp.prop('name')).toBe('message');
            expect(inputComp.prop('type')).toBe('textarea');
        });

        test(`renders a <Button> with class 'message-form-submit-btn' and type 'submit'`, () => {
            const inputComp = wrapper.find(Button).findWhere(x => x.props().type === 'submit').at(0);

            expect(inputComp.length).toBe(1);
            expect(inputComp.prop('type')).toBe('submit');
        });

        test(`renders a <Button> with class 'message-form-reset-btn' and type 'reset'`, () => {
            const inputComp = wrapper.find(Button).findWhere(x => x.props().type === 'reset').at(0);

            expect(inputComp.length).toBe(1);
            expect(inputComp.prop('type')).toBe('reset');
        });

        test('calls sendMessage if message is not empty', () => {
            wrapper = mount(
                <MessageForm store={store} {...props} />
            );

            const formComp = wrapper.find(Form);
            const messageInputComp = wrapper.find(Input);

            messageInputComp.find('textarea').getDOMNode().value = 'testMessage';

            formComp.props().onSubmit();
            expect(wrapper.props().sendMessage.mock.calls.length).toBe(1);

            wrapper.unmount();
        });

        test(`renders an <Alert> for server response if message is sent successfully`, () => {
            store = mockStore(storeStateWithMessageMock);

            wrapper.setProps(store.getState());

            const messageResponseAlert = wrapper.find(Alert);

            expect(messageResponseAlert.length).toBe(1);
        });

        test(`renders an <Alert> with error for server errors`, () => {
            store = mockStore(storeStateWithMessageErrorMock);

            wrapper.setProps(store.getState());

            const messageResponseErrorAlert = wrapper.find(Alert);

            expect(messageResponseErrorAlert.length).toBe(1);
        })

    });
});