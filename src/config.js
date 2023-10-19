module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'production',
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://courtneycarson:Bruno858@localhost:5432/secret_camping',
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://courtneycarson:Bruno858@localhost:5432/secret_camping',
  API_TOKEN: process.env.API_TOKEN || 'dummy-api-token',
}

// DATABASE_URL=postgres://courtneycarson:Bruno858@/tmp:5432/secret_camping

// CONNECTION_STRING="postgresql://dbuser:dbpassword@localhost:5432/dbname"