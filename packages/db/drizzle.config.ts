import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

const uri = [
  'postgres://',
  process.env.DB_USERNAME,
  ':',
  process.env.DB_PASSWORD,
  '@',
  process.env.DB_HOST,
  ':6543/',
  process.env.DB_NAME,
].join('');

export default {
  schema: './src/schema',
  driver: 'pg',
  dbCredentials: { connectionString: uri },
  tablesFilter: ['turbo-template_*'],
} satisfies Config;
