FROM node:latest

# Creating a directory for app files and setting path in the container
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# Copying the package.json file from the project source dir to the container dir
COPY package.json /usr/src/app

# Installing the dependencies into the container
RUN npm install

# Copying the source code of the Application into the container
COPY . /usr/src/app


#ENV Variables
ENV NODE_ENV=development
ENV PORT=3001
ENV MONGODB_URL=mongodb://mongo:27017/mydatabase
ENV AWS_ACCESS_KEY_ID= 
ENV AWS_SECRET_ACCESS_KEY= 


# Container exposed network port number
EXPOSE 3001

# Command to run within the container
CMD ["npm", "start"]