import { Metadata } from 'next';
import { getServerAuthSession } from '@/server/auth';
import { DashboardShell } from '@/components/dashboard/shell';
import { DashboardHeader } from '@/components/dashboard/header';
import { AITools } from '@/components/dashboard/ai-tools';

export const metadata: Metadata = {
  title: 'Outils IA',
  description: 'Utilisez l\'IA pour améliorer votre contenu',
};

export default async function AIPage() {
  const session = await getServerAuthSession();

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Outils IA"
        text="Utilisez l'intelligence artificielle pour améliorer votre contenu"
      />
      <AITools />
    </DashboardShell>
  );
}