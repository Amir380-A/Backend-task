const request = require('supertest');
const app = require('../index'); // Assuming your express app is defined in 'app.js'

describe('Patients API', () => {
  it('should retrieve a list of patients', async () => {
    const response = await request(app).get('/patients');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(2); // Adjust as needed
  });

  it('should retrieve a single patient by ID', async () => {
    // Create a test patient in the database
    const testPatient = await request(app)
      .post('/patients')
      .send({ name: 'Test Patient', email: 'test@example.com', disease: 'Test Disease', comment: 'Test Comment' });

    const response = await request(app).get(`/patients/${testPatient.body._id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe('Test Patient');
  });

  it('should update a patient record', async () => {
    // Create a test patient in the database
    const testPatient = await request(app)
      .post('/patients')
      .send({ name: 'Test Patient', email: 'test@example.com', disease: 'Test Disease', comment: 'Test Comment' });

    const response = await request(app)
      .put(`/patients/${testPatient.body._id}`)
      .send({ disease: 'Updated Disease', comment: 'Updated Comment' });
    expect(response.statusCode).toBe(200);
    expect(response.body.disease).toBe('Updated Disease');
  });

  it('should delete a patient record', async () => {
    // Create a test patient in the database
    const testPatient = await request(app)
      .post('/patients')
      .send({ name: 'Test Patient', email: 'test@example.com', disease: 'Test Disease', comment: 'Test Comment' });

    const response = await request(app).delete(`/patients/${testPatient.body._id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'Patient deleted');
  });

});
