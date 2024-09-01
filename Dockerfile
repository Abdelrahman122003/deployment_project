# Use an official base image for the runtime environment (Node.js in this example)
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files (if using npm)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code into the container
COPY . /app/

# Expose the port the app runs on
EXPOSE 5001

# Define the command to run the web application
CMD ["npm", "start"]
