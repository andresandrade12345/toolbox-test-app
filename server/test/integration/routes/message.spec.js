const { expect } = require('chai');
const request = require('supertest');

const config = require('../../../config');
const app = require('../../../app');

const url = `/api/${config.apiVersion}/message`;

describe('integration:routes:message', () => {

    describe('POST /message', () => {

        it('responds with 200', () => {
            const message = 'Hello world!';

            return request(app)
                .post(url)
                .set('Accept', 'application/json')
                .send({ message })
                .expect(200)
                .then(res => {
                    expect(res.body).to.deep.equal({ message });
                })
        });

        it('responds with 400 when message is empty', () => {
            let message = '';
            const errorMock = { error: '[message] is required' };

            return request(app)
                .post(url)
                .set('Accept', 'application/json')
                .send({ message })
                .expect(400)
                .then(res => {
                    expect(res.body).to.deep.equal(errorMock);
                })
        })

    });

});