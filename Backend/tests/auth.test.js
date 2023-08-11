const request = require('supertest');
const app = require('../index'); // Assuming your express app is defined in 'app.js'

describe('Authentication API', () => {
  it('should register a new user', async () => {
    const response = await request(app)
      .post('/auth/register')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'testpassword'
      });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('user');
    expect(response.body).toHaveProperty('token');
  });

  it('should log in an existing user', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        username: 'testuser',
        password: 'testpassword'
      });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('token');
  });
});
