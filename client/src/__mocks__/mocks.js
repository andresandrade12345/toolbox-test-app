export const storeIntialStateMock = {
    message: {
        message: null,
        error: null,
    }
};

export const storeStateWithMessageMock = {
    message: {
        message: 'testMessage',
        error: null,
    }
};

export const storeStateWithMessageErrorMock = {
    message: {
        message: null,
        error: '[message] is required',
    }
};

export const messageMock = { message: 'test message' };

export const errorMessageMock = { error: '[message] is required' };