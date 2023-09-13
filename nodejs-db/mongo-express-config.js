var mongoExpress = require('mongo-express/lib/middleware')

var config = {
  // MongoDB URL (change to your database URL)
  mongodb: {
    server: 'mongodb://mongo-container:27017/', // Replace 'mongo-container' with your MongoDB container name or IP
    autoReconnect: true,
    poolSize: 4,
    admin: true,
  },

  // Basic security options (customize as needed)
  site: {
    cookieSecret: 'your-secret-key',
    sessionSecret: 'your-session-secret',
    baseUrl: '/mongo-express',
    port: 8081, // Port where Mongo Express will listen
    useHttps: false, // Set to true if you have HTTPS configured
    useBasicAuth: false, // Set to true for basic authentication
    basicAuth: {
      username: 'admin',
      password: 'password',
    },
  },
}

module.exports = config
