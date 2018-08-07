import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import httpClient from '../httpClient';

describe('test:httpClient', () => {
    const mock = new MockAdapter(axios);

    describe('httpClient:get', () => {

        test('returns 200', () => {
            const mockData = { test: 'testGet' };

            mock.onGet('/api').reply(200, mockData);

            return httpClient.get({ url: '/api' })
                .then(res => {
                    expect(res.status).toEqual(200);
                    expect(res.data).toEqual(mockData);
                })
        });

        test('returns 400', () => {
            const mockData = { test: 'test' };

            mock.onGet().reply(400, mockData);

            return httpClient.get({ url: '/api' })
                .catch(err => {
                    expect(err.response.status).toEqual(400);
                })
        });

        test('returns 500', () => {
            mock.onGet().reply(500);

            return httpClient.get({ url: '/api' })
                .catch(err => {
                    expect(err.response.status).toEqual(500);
                })
        });

    });

    describe('httpClient:post', () => {

        test('returns 200', () => {
            const mockData = { test: 'testPost' };

            mock.onPost('/api').reply(200, mockData);

            return httpClient.post({ url: '/api' })
                .then(res => {
                    expect(res.status).toEqual(200);
                    expect(res.data).toEqual(mockData);
                })
        });

        test('returns 400', () => {
            const mockData = { test: 'testPost' };

            mock.onPost().reply(400, mockData);

            return httpClient.post({ url: '/api' })
                .catch(err => {
                    expect(err.response.status).toEqual(400);
                })
        });

        test('returns 500', () => {
            mock.onPost().reply(500);

            return httpClient.post({ url: '/api' })
                .catch(err => {
                    expect(err.response.status).toEqual(500);
                })
        });

    });

    describe('httpClient:put', () => {

        test('returns 200', () => {
            const mockData = { test: 'testPut' };

            mock.onPut('/api').reply(200, mockData);

            return httpClient.put({ url: '/api' })
                .then(res => {
                    expect(res.status).toEqual(200);
                    expect(res.data).toEqual(mockData);
                })
        });

        test('returns 400', () => {
            const mockData = { test: 'testPut' };

            mock.onPut().reply(400, mockData);

            return httpClient.put({ url: '/api' })
                .catch(err => {
                    expect(err.response.status).toEqual(400);
                })
        });

        test('returns 500', () => {
            mock.onPut().reply(500);

            return httpClient.put({ url: '/api' })
                .catch(err => {
                    expect(err.response.status).toEqual(500);
                })
        });

    });

    describe('httpClient:del', () => {

        test('returns 200', () => {
            const mockData = { test: 'testDelete' };

            mock.onDelete('/api').reply(200, mockData);

            return httpClient.delete({ url: '/api' })
                .then(res => {
                    expect(res.status).toEqual(200);
                    expect(res.data).toEqual(mockData);
                })
        });

        test('returns 400', () => {
            const mockData = { test: 'testDelete' };

            mock.onDelete().reply(400, mockData);

            return httpClient.delete({ url: '/api' })
                .catch(err => {
                    expect(err.response.status).toEqual(400);
                })
        });

        test('returns 500', () => {
            mock.onDelete().reply(500);

            return httpClient.delete({ url: '/api' })
                .catch(err => {
                    expect(err.response.status).toEqual(500);
                })
        });

    });

});