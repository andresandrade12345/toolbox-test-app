import { SEND_MESSAGE_SUCCESS, SEND_MESSAGE_ERROR } from '../actions/actionTypes';

export const initialState = {
    message: null,
    error: null,
};

export default function messageReducer (state = initialState, action) {
    switch (action.type) {
        case SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case SEND_MESSAGE_ERROR:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}