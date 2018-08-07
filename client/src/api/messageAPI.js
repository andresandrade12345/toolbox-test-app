import httpClient from './httpClient'

export const MESSAGE_ENDPOINT = '/api/v1/message';

const sendMessage = data => httpClient.post({ url: MESSAGE_ENDPOINT, data });

const messageAPI = {
    sendMessage,
};

export default messageAPI;