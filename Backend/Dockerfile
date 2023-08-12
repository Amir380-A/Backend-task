# Use the official Node.js image with Alpine Linux
FROM node:14-alpine as backend

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install backend dependencies
RUN npm install 

# Copy the rest of the backend code
COPY . .

# Expose the port the application runs on
EXPOSE 5000

# Command to start the application
CMD ["node", "index.js"]
