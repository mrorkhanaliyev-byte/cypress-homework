// API LESSON 2 — Auth, query, zəncir, negativ testlər
// Sayt: dummyjson.com (reqres.in əvəzinə — reqres artıq bloklayır)
const BASE = 'https://dummyjson.com';

describe('API Lesson 2 - dummyjson', () => {

    it('login returns a token', () => {
        cy.request({
            method: 'POST',
            url: `${BASE}/auth/login`,
            body: { username: 'emilys', password: 'emilyspass' }
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).to.have.property('accessToken');
        });
    });

    it('sends query parameters', () => {
        cy.request({
            method: 'GET',
            url: `${BASE}/users`,
            qs: { limit: 3, skip: 0 }
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.users).to.have.length(3);
        });
    });

    it('creates a user', () => {
        cy.request({
            method: 'POST',
            url: `${BASE}/users/add`,
            body: { firstName: 'Nigar', age: 25 }
        }).then((res) => {
            expect(res.status).to.eq(201);
            expect(res.body).to.have.property('id');
            expect(res.body.firstName).to.eq('Nigar');
        });
    });

    it('deletes a user', () => {
        cy.request('DELETE', `${BASE}/users/1`).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.isDeleted).to.be.true;
        });
    });

    it('returns 400 for invalid login (negative)', () => {
        cy.request({
            method: 'POST',
            url: `${BASE}/auth/login`,
            body: { username: 'wrong', password: 'wrong' },
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.eq(400);
            expect(res.body).to.have.property('message');
        });
    });

    it('chains login then uses token in next request', () => {
        cy.request({
            method: 'POST',
            url: `${BASE}/auth/login`,
            body: { username: 'emilys', password: 'emilyspass' }
        }).then((loginRes) => {
            const token = loginRes.body.accessToken;
            cy.request({
                method: 'GET',
                url: `${BASE}/auth/me`,
                headers: { Authorization: `Bearer ${token}` }
            }).then((meRes) => {
                expect(meRes.status).to.eq(200);
                expect(meRes.body.email).to.include('@');
            });
        });
    });
});
