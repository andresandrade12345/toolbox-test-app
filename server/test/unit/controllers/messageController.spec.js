const { expect } = require('chai');
const request = require('supertest');

const messageController = require('../../../controllers/messageController');
const app = require('../../../app');
const config = require('../../../config');

const url = `/api/${config.apiVersion}/message`;

describe('unit:controllers:messageController', () => {

    describe('messageController:processMessage', () => {

        it(`returns the same message`, () => {
            const message = { message: 'hey!' };

            return request(app)
                .post(url)
                .set('Accept', 'application/json')
                .send(message)
                .expect(200)
                .then(res => {
                    expect(res.body).to.deep.equal(message);
                })
        });

        it('returns an error if message is empty', () => {
            const emptyMessage = { message: '' };
            const emptyMessageErrorMock = { error: '[message] is required' };

            return request(app)
                .post(url)
                .set('Accept', 'application/json')
                .send(emptyMessage)
                .expect(400)
                .then(res => {
                    expect(res.body).to.deep.equal(emptyMessageErrorMock);
                })
        });

    });

});