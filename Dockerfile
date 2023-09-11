FROM node:latest

# Creating a new directory for app files and setting path in the container
RUN mkdir -p /usr/src/app

# Setting working directory in the container
WORKDIR /usr/src/app

# Copying the package.json file (contains dependencies) from the project source dir to the container dir
COPY package.json /usr/src/app

# Installing the dependencies into the container
RUN npm install

# Copying the source code of the Application into the container dir
# Note that you must be in the source code directory, and remember COPY is recursive
COPY . /usr/src/app

# Container exposed network port number
EXPOSE 3000

# Command to run within the container
CMD ["node", "server.js"]
