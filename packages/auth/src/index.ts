import type { DefaultSession } from 'next-auth';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import NextAuth from 'next-auth';
import Discord from 'next-auth/providers/discord';
import GitHub from 'next-auth/providers/github';

import { db, tableCreator } from '@acme/db';

export type { Session } from 'next-auth';

declare module 'next-auth' {
  type Session = {
    user: {
      id: string;
    } & DefaultSession['user'];
  };
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: DrizzleAdapter(db, tableCreator),
  providers: [Discord, GitHub],
  callbacks: {
    session: (opts) => {
      if (!("user" in opts)) throw "unreachable with session strategy";

      return {
        ...opts.session,
        user: {
          ...opts.session.user,
          id: opts.user.id,
        },
      };
    },
  },
});
