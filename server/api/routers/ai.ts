import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const aiRouter = createTRPCRouter({
  analyzeContent: protectedProcedure
    .input(z.object({
      content: z.string(),
      platform: z.enum(['YOUTUBE', 'TIKTOK', 'INSTAGRAM']),
    }))
    .mutation(async ({ input }) => {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: `You are an expert content analyzer for ${input.platform}. Analyze the following content and provide detailed feedback and suggestions for improvement.`,
          },
          {
            role: 'user',
            content: input.content,
          },
        ],
        model: 'gpt-4-turbo-preview',
      });

      return {
        analysis: completion.choices[0].message.content,
      };
    }),

  generateIdeas: protectedProcedure
    .input(z.object({
      topic: z.string(),
      platform: z.enum(['YOUTUBE', 'TIKTOK', 'INSTAGRAM']),
    }))
    .mutation(async ({ input }) => {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: `You are a creative content strategist for ${input.platform}. Generate engaging content ideas for the following topic.`,
          },
          {
            role: 'user',
            content: input.topic,
          },
        ],
        model: 'gpt-4-turbo-preview',
      });

      return {
        ideas: completion.choices[0].message.content,
      };
    }),
});