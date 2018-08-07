import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { SEND_MESSAGE_SUCCESS, SEND_MESSAGE_ERROR } from '../actionTypes';
import { errorMessageMock, messageMock } from '../../__mocks__/mocks';
import { sendMessage } from '../messageActions';

const mockStore = configureMockStore([thunk]);

describe('test:messageActions', () => {

    const mock = new MockAdapter(axios);

    describe('messageActions:sendMessage', () => {

        test('creates SEND_MESSAGE_SUCCESS after successfully sending message', () => {
            mock.onPost().reply(200, messageMock);

            const expectedActions = [
                {
                    type: SEND_MESSAGE_SUCCESS,
                    payload: messageMock,
                },
            ];

            const store = mockStore({ message: {} });

            return store.dispatch(sendMessage(messageMock))
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                });
        });

        test('creates SEND_MESSAGE_ERROR if message is missing', () => {
            mock.onPost().reply(400, errorMessageMock);

            const expectedActions = [
                {
                    type: SEND_MESSAGE_ERROR,
                    payload: errorMessageMock,
                },
            ];

            const store = mockStore({ message: {} });

            return store.dispatch(sendMessage(errorMessageMock))
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                });
        });

    });

});


