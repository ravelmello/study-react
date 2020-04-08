const request = require('supertest');
const app = require('../../src/app');
const conn = require('../../src/database/conn');

describe('Login', () => {

    afterAll(async ()=> {
       await conn.destroy();
    });

    it("Eu efetuo a tentativa de logar no sistema, com uma ONG válida", async () => {
        const response = await request(app)
        .post('/login')
        .send({
            id: "9119c8a2"
        })
        .expect(200)
    });

    it("Eu efetuo a tentativa de logar no sistema, com uma ONG inválida ou inexistente", async () => {
        const response = await request(app)
        .post('/login')
        .send({
            id: ""
        })
        .expect(400)
    })
})