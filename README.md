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

Or you can use docker and build the two dockerfiles for the backend and the frontend

The frontend is configured to run in port 3000 and the backend on 5000. but you can change it as you want.
Technologies Used:
- ReactJS
- NodeJS
- MongoDB
- Mongoose
- NodeMailer
- JWT


