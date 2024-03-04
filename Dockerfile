# Use an official Node runtime as a parent image
FROM node:20.11.1

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# RUN npm run rollup

RUN npm run build-storybook

RUN npm install -g http-server

CMD ["http-server", "storybook-static", "-p 8083"]

# Define the command to run your application
# CMD ["npm", "start"]

# Additional instructions based on feedback
# Include build and run commands
# Note: Adjust the actual build and run commands based on your project structure and requirements
# e.g., If you use Storybook, include relevant commands here

# Run command example (replace with your actual run command)