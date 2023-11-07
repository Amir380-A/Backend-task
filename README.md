# Medical-task

This is primarily a backend task but, it was required to add a frontend to it using React to be a Full-stack MERN project.
This is a web application for managing medical patient information. It provides features for user registration, login, viewing patient profiles, and more.
While the Backend is finished, the frontend is still under development.

## Requirements:

- A medical caregiver logs in to the system and view patients' profiles.
- modify / update / add a component to the profile (a note , a message, a medication...etc.) and save the new data
- Patient to receive a notification on their email
- login to the system to view the modified / added data.

## Features

- User registration and login using authorization and authntication by JWT.
- creating a patient
- Viewing patient profiles
- Updating patient information

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB database setup (connection string available in `.env` file)

### Installation

Clone the repository:

```bash
git clone https://github.com/Amir380-A/medical-task.git
cd medical-task
```

Navigate to the backend and the frontend:
Install dependencies:

```
npm install
```

Create a .env file in the root directory and add your environment variables:

```bash
SECRET_KEY=your_secret_key
USER_GMAIL=your_email@gmail.com
GMAIL_PASSWORD=your_email_password
MONGODB_URI=your_mongodb_connection_string

```

Run the development server:

```bash
npm start
```

Or you can use docker and build the two dockerfiles for the backend and the frontend using compose

Run tests through jest and supertest by

```bash
npm test
```
# API Documentation

This document provides information about the endpoints available in our API.

## Authentication

### Register

- **Endpoint**: `POST /auth/register`
- **Description**: Register a new user.
- **Request Body**:
  - `username` (string): The username for the new user.
  - `password` (string): The password for the new user.
  - `email` (string): The email for the new user.
  - `role` (string): The password for the new user.
  

### Login

- **Endpoint**: `POST /auth/login`
- **Description**: Authenticate a user.
- **Request Body**:
  - `username` (string): The username of the user.
  - `password` (string): The password of the user.
- **Response**:
  - `200 OK`: Authentication successful. Returns a token for authorization.
  - `401 Unauthorized`: Invalid credentials.

## Patients

### List Patients

- **Endpoint**: `GET /patients/`
- **Description**: Retrieve a list of all patients.
- **Response**:
  - `200 OK`: Returns a list of patients.
  - `401 Unauthorized`: Unauthorized access.
  - `403 Forbidden`: Access to the resource is forbidden for the current user.

### Create a Patient

- **Endpoint**: `POST /patients/`
- **Description**: Create a new patient record.
- **Request Body**:
  - `username` (string): The username for the new user.
  - `password` (string): The password for the new user.
  - `email` (string): The email for the new user.
- **Response**:
  - `201 Created`: Patient record created successfully.
  - `400 Bad Request`: Invalid input data.

### Get Patient Details

- **Endpoint**: `GET /patients/{patient_id}/`
- **Description**: Retrieve details of a specific patient.
- **Path Parameter**:
  - `patient_id` (string): The ID of the patient.
- **Response**:
  - `200 OK`: Returns details of the patient.
  - `404 Not Found`: Patient not found.
  - `401 Unauthorized`: Unauthorized access.
  - `403 Forbidden`: Access to the resource is forbidden for the current user.

### Update Patient Details

- **Endpoint**: `PUT /patients/{patient_id}/`
- **Description**: Update details of a specific patient.
- **Path Parameter**:
  - `patient_id` (string): The ID of the patient.
- **Request Body**:
  - `name` (string): The updated name of the patient.
  - `dob` (string): The updated date of birth of the patient (e.g., "YYYY-MM-DD").
- **Response**:
  - `200 OK`: Patient details updated successfully.
  - `400 Bad Request`: Invalid input data.
  - `404 Not Found`: Patient not found.
  - `401 Unauthorized`: Unauthorized access.
  - `403 Forbidden`: Access to the resource is forbidden for the current user.

### Delete a Patient

- **Endpoint**: `DELETE /patients/{patient_id}/`
- **Description**: Delete a specific patient.
- **Path Parameter**:
  - `patient_id` (string): The ID of the patient to be deleted.
- **Response**:
  - `204 No Content`: Patient deleted successfully.
  - `404 Not Found`: Patient not found.
  - `401 Unauthorized`: Unauthorized access.
  - `403 Forbidden`: Access to the resource is forbidden for the current user.

---


The frontend is configured to run in port 3000 and the backend on 5000. but you can change it as you want.
Technologies Used:

- ReactJS
- NodeJS
- MongoDB
- Mongoose
- NodeMailer
- JWT
- Docker
- GitHub Action
- Jest
