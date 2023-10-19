module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'production',
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
  DATABASE_URL: process.env.DATABASE_URL || 'postgres://xpskjyty:ikKBt_esfB8x3V_252ktQ0V7lOV4u5iH@chunee.db.elephantsql.com/xpskjyty',
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgres://xpskjyty:ikKBt_esfB8x3V_252ktQ0V7lOV4u5iH@chunee.db.elephantsql.com/xpskjyty',
  API_TOKEN: process.env.API_TOKEN || 'dummy-api-token',
}

// DATABASE_URL=postgres://courtneycarson:Bruno858@/tmp:5432/secret_camping

// CONNECTION_STRING="postgresql://dbuser:dbpassword@localhost:5432/dbname"
