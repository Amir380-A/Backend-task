# Use the official Node.js image with Alpine Linux
FROM node:14-alpine as frontend

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json to the working directory
COPY package*.json ./

# Install frontend dependencies
RUN npm install 

# Copy the rest of the frontend code
COPY . .

# Build the frontend
RUN npm run build

# Expose the port the frontend will run on 
EXPOSE 3000
