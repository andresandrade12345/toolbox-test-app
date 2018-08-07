const { expect } = require('chai');

const { errorFormatter } = require('../../../../lib/apiUtils/validationErrorFormatter');

describe('unit:lib:apiUtils:validationErrorFormatter', () => {

    describe('unit:lib:apiUtils:validationErrorFormatter:errorFormatter', () => {

        it('formats validation errors', () => {
            const validationErrorMock = {
                "msg": "is required",
                "param": "message",
                "value": "",
                "location": "body",
                "nestedErrors": [],
            };

            return expect(errorFormatter({ msg: validationErrorMock.msg, param: validationErrorMock.param }))
                .to.equal(`[${validationErrorMock.param}] ${validationErrorMock.msg}`)
        });

    });

});