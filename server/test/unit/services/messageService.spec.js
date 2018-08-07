const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const { messageService } = require('../../../services');

const expect = chai.expect;
chai.use(chaiAsPromised);

describe('unit:services:messageService', () => {

    describe('messageService:getMyMessage', () => {

        it(`returns the same message`, () => {
            const message = 'hey!';

            return expect(messageService.getMyMessage({ message })).to.eventually.equal(message);
        });

        it(`returns an error if message is empty`, () => {
            let message;
            return expect(messageService.getMyMessage({ message })).to.be.rejectedWith('Message is empty');
        });

    });

});