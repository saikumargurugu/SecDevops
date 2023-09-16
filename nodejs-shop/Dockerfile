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

COPY nginx.conf /usr/src/app/nginx/conf.d/

# copy SSL/TLS certificates
COPY nginx.conf /usr/src/app/nginx/nginx.conf
COPY my-ssl-cert.crt /usr/src/app/nginx/ssl/my-ssl-cert.crt
COPY my-ssl-cert.key /usr/src/app/nginx/ssl/my-ssl-cert.key

# Container exposed network port number
EXPOSE 3000

#ENV Variables
ENV NODE_ENV=development
ENV PORT=3000
ENV MONGO_DEFAULT_DATABASE=shoppingdatabase
ENV MONGODB_URL=mongodb://mongo:27017/shoppingdatabase
ENV API_URL=http://localhost:3000
ENV ME_CONFIG_BASICAUTH_USERNAME: admin
ENV ME_CONFIG_BASICAUTH_PASSWORD: pass
ENV ME_CONFIG_MONGODB_URL: mongodb://mongo:27017/shoppingdatabase
ENV ME_CONFIG_MONGODB_SERVER: mongo
ENV ME_CONFIG_MONGODB_PORT: 27017
ENV ME_CONFIG_MONGODB_ENABLE_ADMIN: true
ENV ME_CONFIG_OPTIONS_EDITORTHEME: default
ENV NGINX_PROXY_BACKEND=shopping:3000

# Command to run within the container
CMD ["node", "app.js"]