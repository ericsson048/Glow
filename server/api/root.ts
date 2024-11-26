import { createTRPCRouter } from '@/server/api/trpc';
import { userRouter } from '@/server/api/routers/user';
import { courseRouter } from '@/server/api/routers/course';
import { aiRouter } from '@/server/api/routers/ai';

export const appRouter = createTRPCRouter({
  user: userRouter,
  course: courseRouter,
  ai: aiRouter,
});

export type AppRouter = typeof appRouter;