import { Metadata } from 'next';
import { getServerAuthSession } from '@/server/auth';
import { DashboardShell } from '@/components/dashboard/shell';
import { DashboardHeader } from '@/components/dashboard/header';
import { CoursesList } from '@/components/dashboard/courses-list';
import { api } from '@/trpc/server';

export const metadata: Metadata = {
  title: 'Mes cours',
  description: 'Gérez vos cours et votre progression',
};

export default async function CoursesPage() {
  const session = await getServerAuthSession();
  const courses = await api.course.getUserCourses.query();

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Mes cours"
        text="Gérez vos cours et suivez votre progression"
      />
      <CoursesList courses={courses} />
    </DashboardShell>
  );
}