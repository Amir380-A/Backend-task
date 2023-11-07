const request = require("supertest");
const express = require("express");
const patientRoutes = require("../routes/patients");

describe("Patient API Endpoints", () => {
  const app = express();
  app.use(express.json());
  app.use("/patients", patientRoutes);

  it("GET / should return all patients", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });

  it("GET /:id should return a specific patient", async () => {
    const response = await request(app).get("/641"); // Replace with a valid patient ID
    expect(response.status).toBe(200);
  });

  it("GET /:id should handle non-existent patient", async () => {
    const response = await request(app).get("/non-existent-patient-id"); // Use a non-existent patient ID
    expect(response.status).toBe(404);
  });

  it("POST / should create a new patient", async () => {
    const newPatient = {
      name: "John Doe",
      email: "johndoe@example.com",
      disease: "Fever",
      comment: "New patient data",
    };

    const response = await request(app).post("/").send(newPatient);

    expect(response.status).toBe(201);
  });

  it("PUT /:id should update a patient", async () => {
    const updatedPatient = {
      name: "Updated Name",
      email: "updated-email@example.com",
      disease: "Updated Disease",
      comment: "Updated patient data",
    };

    const response = await request(app)
      .put("/641") // Replace with a valid patient ID
      .send(updatedPatient);

    expect(response.status).toBe(200);
  });

  it("PUT /:id should handle non-existent patient", async () => {
    const updatedPatient = {
      name: "Updated Name",
      email: "updated-email@example.com",
      disease: "Updated Disease",
      comment: "Updated patient data",
    };

    const response = await request(app)
      .put("/non-existent-patient-id") // Use a non-existent patient ID
      .send(updatedPatient);

    expect(response.status).toBe(404);
  });

  it("DELETE /:id should delete a patient", async () => {
    const response = await request(app).delete("/641"); // Replace with a valid patient ID
    expect(response.status).toBe(200);
  });

  it("DELETE /:id should handle non-existent patient", async () => {
    const response = await request(app).delete("/non-existent-patient-id"); // Use a non-existent patient ID
    expect(response.status).toBe(404);
  });
});
