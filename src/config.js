module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://courtneycarson@localhost/secret_camping',
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://courtneycarson@localhost/secret_camping',
  API_TOKEN: process.env.API_TOKEN || 'dummy-api-token',
}