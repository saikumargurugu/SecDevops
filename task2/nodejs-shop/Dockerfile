# Use an official MongoDB Express image as the base image
FROM node:latest

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install


COPY . /usr/src/app

ENV NODE_ENV=development
ENV PORT=3000
ENV MONGO_DEFAULT_DATABASE=shoppingdatabase
ENV AWS_ACCESS_KEY_ID=
ENV AWS_SECRET_ACCESS_KEY=
ENV ME_CONFIG_MONGODB_URL 'mongodb://mongo-service:27017/shoppingdatabase'
ENV ME_CONFIG_SITE_ENABLE_ADMIN true
ENV ME_CONFIG_SITE_ENABLE_DEBUGGER true
ENV ME_CONFIG_SITE_ENABLE_TRIGGERS true



EXPOSE 3000

CMD ["npm", "start"]