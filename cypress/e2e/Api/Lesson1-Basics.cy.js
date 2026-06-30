// API LESSON 1 — cy.request() əsasları
// Sayt: jsonplaceholder.typicode.com (pulsuz, auth yox)
const BASE = 'https://jsonplaceholder.typicode.com';

describe('API Lesson 1 - JSONPlaceholder', () => {

    it('GET - fetches a post by id', () => {
        cy.request('GET', `${BASE}/posts/1`).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).to.have.property('id', 1);
            expect(res.body).to.have.property('title');
            expect(res.body.userId).to.be.a('number');
        });
    });

    it('POST - creates a new post', () => {
        cy.request({
            method: 'POST',
            url: `${BASE}/posts`,
            body: { title: 'My Test Post', body: 'test body', userId: 1 }
        }).then((res) => {
            expect(res.status).to.eq(201);
            expect(res.body).to.have.property('id');
            expect(res.body.title).to.eq('My Test Post');
        });
    });

    it('PUT - updates a post', () => {
        cy.request({
            method: 'PUT',
            url: `${BASE}/posts/1`,
            body: { id: 1, title: 'Updated Title', body: 'updated', userId: 1 }
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.title).to.eq('Updated Title');
        });
    });

    it('DELETE - deletes a post', () => {
        cy.request('DELETE', `${BASE}/posts/1`).then((res) => {
            expect(res.status).to.eq(200);
        });
    });
});
