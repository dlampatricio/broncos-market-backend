import path from 'path';

export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'), // Usar la URL completa de Neon (con SSL)
      host: env('DATABASE_HOST', 'ep-little-term-a8w7wsoc-pooler.eastus2.azure.neon.tech'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'broncos_market_db'),
      user: env('DATABASE_USERNAME', 'neondb_owner'),
      password: env('DATABASE_PASSWORD', '****************'),
      ssl: {
        // Configuración específica para Neon (SSL obligatorio)
        rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false),
      },
      schema: env('DATABASE_SCHEMA', 'public'),
    },
    pool: {
      min: env.int('DATABASE_POOL_MIN', 2),
      max: env.int('DATABASE_POOL_MAX', 10),
    },
    acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
  },
});