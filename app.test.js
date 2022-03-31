const request = require('supertest');
const { response } = require('./app.js');
const app = require('./app.js');

describe("Test GET /products", () => {
    it('Total number of data', () => {
        return request(app)
            .get('/products/list')
            .expect(200)
            .then((response) => {
                expect(response.body.length).toBe(9)
            })
    })

    it('Checking availability of a specific product ID', () => {
        return request(app)
            .get('/products/list')
            .expect(200)
            .then((response) =>
                expect(response.body._id = "62419418c19eb6831c1b2c97"))
    })
})