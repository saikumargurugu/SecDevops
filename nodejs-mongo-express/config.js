// config.js
var env = process.env;

module.exports = {
  // MongoDB connection string
  mongodb: {
    url: env.CONFIG_MONGODB_URL || 'mongodb://mongo:27017/',
  },

  // Basic authentication (optional)
  basicAuth: {
    username: env.CONFIG_BASICAUTH_USERNAME || 'admin',
    password: env.CONFIG_BASICAUTH_PASSWORD || 'pass',
  },

  // Enable/Disable SSL (optional)
  site: {
    enableAdmin: v.CONFIG_SITE_ENABLE_ADMIN || false,
    enableDebugger: true,
    enableTriggers: true,
  },
};
