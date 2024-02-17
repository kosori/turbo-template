import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    AUTH_DISCORD_ID: z
      .string({ required_error: 'Please add the AUTH_DISCORD_ID variable' })
      .min(1),
    AUTH_DISCORD_SECRET: z
      .string({ required_error: 'Please add the AUTH_DISCORD_SECRET variable' })
      .min(1),
    AUTH_GITHUB_ID: z
      .string({ required_error: 'Please add the AUTH_GITHUB_ID variable' })
      .min(1),
    AUTH_GITHUB_SECRET: z
      .string({ required_error: 'Please add the AUTH_GITHUB_SECRET variable' })
      .min(1),
    AUTH_SECRET:
      process.env.NODE_ENV === 'production'
        ? z
          .string({ required_error: 'Please add the AUTH_SECRET variable' })
          .min(1)
        : z.string().min(1).optional(),
  },
  client: {},
  experimental__runtimeEnv: {},
  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION,
});
