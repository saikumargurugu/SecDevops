# Use an official Node.js runtime as a base image
FROM node:14

# Create a working directory for our application
WORKDIR /usr/src/app

# Install Mongo Express globally (you can specify the version you need)
RUN npm install -g mongo-express

# Copy the Mongo Express configuration file into the container
COPY mongo-express-config.js /app/config

# Expose the port on which Mongo Express will run
EXPOSE 8081

# Start Mongo Express when the container is launched
CMD ["mongo-express"]
