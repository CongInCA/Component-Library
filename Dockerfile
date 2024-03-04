# Use an official Node runtime as a parent image
FROM node:20.11.1

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all local files to the container
COPY . .

# Build the production application
RUN npm run build

# Expose port 8083 to the outside world
EXPOSE 8083

# Command to run the application
CMD ["npm", "start"]
