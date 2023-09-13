# useing official nginx image from the docker hub
FROM nginx:latest

# copy custom Nginx configuration to the container
COPY nginx.conf /etc/nginx/conf.d/

# copy SSL/TLS certificates
COPY nginx.conf /etc/nginx/nginx.conf
COPY my-ssl-cert.crt /etc/nginx/ssl/my-ssl-cert.crt
COPY my-ssl-cert.key /etc/nginx/ssl/my-ssl-cert.key

# Expose ports 80 (HTTP) and 443 (HTTPS)
EXPOSE 80
EXPOSE 443

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
