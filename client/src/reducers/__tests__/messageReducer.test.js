import messageReducer, { initialState } from '../messageReducer';
import { SEND_MESSAGE_SUCCESS, SEND_MESSAGE_ERROR } from '../../actions/actionTypes';

describe('test:messageReducer', () => {

    test('returns the initial state', () => {
        return expect(messageReducer(undefined, {})).toEqual(initialState);
    });

    test('handles SEND_MESSAGE_SUCCESS', () => {
        const messageMock = {
            message: 'test message',
        };
        const successSendDataMock = {
            type: SEND_MESSAGE_SUCCESS,
            payload: messageMock,
        };

        return expect(messageReducer({}, successSendDataMock)).toEqual(messageMock);
    });

    test('handles SEND_MESSAGE_ERROR', () => {
        const errorMock = {
            error: '[message] is required',
        };
        const errorSendDataMock = {
            type: SEND_MESSAGE_SUCCESS,
            payload: errorMock,
        };

        return expect(messageReducer({}, errorSendDataMock)).toEqual(errorMock);
    });

});