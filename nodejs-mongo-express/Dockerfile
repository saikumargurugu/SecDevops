FROM node:latest

# Creating a new directory for app files and setting path in the container
RUN mkdir -p /usr/src/app

# Setting working directory in the container
WORKDIR /usr/src/app

# Copying the package.json file (contains dependencies) from the project source dir to the container dir
COPY . /usr/src/app

# Install Mongo Express globally (you can specify the version you need)
# 2>&1  is to redirect errors to specific dirrectory.

RUN npm install -g mongo-express 2>&1 | tee npm-install.log
# Copy the Mongo Express configuration file into the container
COPY mongo-express-config.js /usr/src/app/config
 
# Expose the port on which Mongo Express will run
EXPOSE 8081

# Start Mongo Express when the container is launched
CMD ["mongo-express"]
