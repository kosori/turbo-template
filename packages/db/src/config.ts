import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

const connectionString = [
  'postgresql://',
  process.env.DB_USERNAME,
  ':',
  process.env.DB_PASSWORD,
  '@',
  process.env.DB_HOST,
  '/',
  process.env.DB_NAME,
  '?sslmode=require',
].join('');

export default {
  schema: './src/schema',
  driver: 'pg',
  dbCredentials: { connectionString },
  tablesFilter: ['turbo_template_*'],
} satisfies Config;
