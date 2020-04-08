const request = require('supertest');
const app = require('../../src/app');
const conn = require('../../src/database/conn');




describe('ONG', () => {
    beforeEach(async() => {
    //    await conn.migrate.rollback(); //zerando o banco de dados
        await conn.migrate.latest();
    });

    afterAll(async ()=> {
       await conn.destroy();
    });

    it("Dado que eu possa criar uma nova ONG", async () => {
        const response = await request(app)
            .post('/ong')
            .send({
                name: "BACEN",
                email: "onu@onu.com",
                whatsapp: 83988888483,
                city: "Recife",
                uf: "UF"
            })
            .expect(200)
            .then(res => {
                console.log(res.body);
                expect(res.body).toHaveProperty('id');
                expect(res.body.id).toHaveLength(8);
            })
            // console.log(response.body);
    })
})