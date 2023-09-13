# useing official nginx image from the docker hub
FROM nginx:latest

RUN mkdir -p /usr/src/app

# Setting working directory in the container

WORKDIR /usr/src/app

# copy SSL/TLS certificates
COPY nginx.conf /usr/src/app/nginx.conf
COPY my-ssl-cert.crt /usr/src/app/ssl/my-ssl-cert.crt
COPY my-ssl-cert.key /usr/src/app/ssl/my-ssl-cert.key

# Expose ports 80 (HTTP) and 443 (HTTPS)
EXPOSE 80
EXPOSE 443

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
