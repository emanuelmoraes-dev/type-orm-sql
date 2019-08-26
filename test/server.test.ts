import app from '../src/app';
import req from 'supertest';

test('[GET /]', async () => {
    const res = await req(app).get('/');
    expect(res.text).toBe('Hello World With TypeScript!');
})