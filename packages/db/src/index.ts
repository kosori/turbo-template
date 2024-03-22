import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import * as auth from './schema/auth';
import * as post from './schema/post';

export const schema = { ...auth, ...post };

export { pgTable as tableCreator } from './schema/_table';

export * from 'drizzle-orm';

const client = neon(
  [
    'postgresql://',
    process.env.DB_USERNAME,
    ':',
    process.env.DB_PASSWORD,
    '@',
    process.env.DB_HOST,
    '/',
    process.env.DB_NAME,
    '?sslmode=require',
  ].join(''),
);

export const db = drizzle(client, { schema });
