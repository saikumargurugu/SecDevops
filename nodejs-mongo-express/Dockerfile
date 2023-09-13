# Use an official MongoDB Express image as the base image
FROM mongo-express

# Set environment variables for MongoDB Express
ENV ME_CONFIG_MONGODB_URL 'mongodb://mongo:27017/shoping_database'
ENV ME_CONFIG_BASICAUTH_USERNAME 'admin'
ENV ME_CONFIG_BASICAUTH_PASSWORD 'pass'
ENV ME_CONFIG_SITE_ENABLE_ADMIN true
ENV ME_CONFIG_SITE_ENABLE_DEBUGGER true
ENV ME_CONFIG_SITE_ENABLE_TRIGGERS true

# Expose port 8081
EXPOSE 27017
