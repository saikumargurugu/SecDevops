# do this to install before to install mongo
# docker pull mongo-express

# Use the official Node.js image as the base image
FROM mongo-express:latest


RUN mkdir -p /usr/src/app

# Setting working directory in the container

RUN mkdir -p /usr/src/app
# Set the working directory

COPY . /usr/src/app

ENV CONFIG_MONGODB_URL='mongodb://mongo:27017/'
ENV CONFIG_BASICAUTH_USERNAME='admin'
ENV CONFIG_BASICAUTH_PASSWORD='pass'
ENV CONFIG_SITE_ENABLE_ADMIN=true

# Expose the port Mongo Express will run on
EXPOSE 8081





