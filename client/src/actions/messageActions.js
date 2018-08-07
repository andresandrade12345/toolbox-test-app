import { SEND_MESSAGE_SUCCESS, SEND_MESSAGE_ERROR } from './actionTypes';
import messageAPI from '../api/messageAPI';

export function sendMessageSuccess (data) {
    return {
        type: SEND_MESSAGE_SUCCESS,
        payload: data,
    }
}

export function sendMessageError (data) {
    return {
        type: SEND_MESSAGE_ERROR,
        payload: data,
    }
}

export function sendMessage (data) {
    return dispatch =>
        messageAPI.sendMessage(data)
            .then(res => dispatch(sendMessageSuccess(res.data)))
            .catch(err => { dispatch(sendMessageError(err.response.data)) })
}