"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { api } from '@/trpc/react';

const formSchema = z.object({
  content: z.string().min(1, 'Le contenu est requis'),
  platform: z.enum(['YOUTUBE', 'TIKTOK', 'INSTAGRAM']),
});

export function AITools() {
  const [analysis, setAnalysis] = useState('');
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: '',
      platform: 'YOUTUBE',
    },
  });

  const analyzeMutation = api.ai.analyzeContent.useMutation({
    onSuccess: (data) => {
      setAnalysis(data.analysis || '');
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await analyzeMutation.mutateAsync(values);
  }

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Analyse de contenu</CardTitle>
          <CardDescription>
            Obtenez une analyse détaillée de votre contenu et des suggestions
            d&apos;amélioration
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="platform"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Plateforme</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez une plateforme" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="YOUTUBE">YouTube</SelectItem>
                        <SelectItem value="TIKTOK">TikTok</SelectItem>
                        <SelectItem value="INSTAGRAM">Instagram</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contenu à analyser</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Collez votre script, description ou concept ici..."
                        className="min-h-[200px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={analyzeMutation.isPending}>
                {analyzeMutation.isPending ? 'Analyse en cours...' : 'Analyser'}
              </Button>
            </form>
          </Form>
          {analysis && (
            <div className="mt-6">
              <h3 className="mb-2 font-semibold">Analyse</h3>
              <div className="rounded-lg border bg-card p-4">
                <p className="whitespace-pre-wrap">{analysis}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}