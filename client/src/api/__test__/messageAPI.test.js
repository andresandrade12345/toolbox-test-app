import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { messageMock } from "../../__mocks__/mocks";
import messageAPI, { MESSAGE_ENDPOINT } from '../messageAPI';

describe('test:messageAPI', () => {
    const mock = new MockAdapter(axios);

    describe('messageAPI:sendMessage', () => {

        test('returns the same message', () => {
            mock.onPost(MESSAGE_ENDPOINT).reply(200, messageMock);

            return messageAPI.sendMessage({ url: MESSAGE_ENDPOINT })
                .then(res => {
                    expect(res.status).toEqual(200);
                    expect(res.data).toEqual(messageMock);
                })
        });

        test('returns 400 if message is missing', () => {
            mock.onPost(MESSAGE_ENDPOINT).reply(400);

            return messageAPI.sendMessage({ url: MESSAGE_ENDPOINT })
                .catch(err => {
                    expect(err.response.status).toEqual(400);
                })
        });

    });

});