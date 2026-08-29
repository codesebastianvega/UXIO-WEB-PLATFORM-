import { createClient } from './server';

export interface UserEnrollmentInfo {
  courseSlug: string;
  cohortName: string;
  status: 'active' | 'completed' | 'cancelled';
}

export async function getUserEnrollments(): Promise<{
  user: { id: string; email?: string; user_metadata?: Record<string, any> } | null;
  enrollments: UserEnrollmentInfo[];
}> {
  const supabase = await createClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (!user || authError) {
    return { user: null, enrollments: [] };
  }

  try {
    const { data, error } = await supabase
      .from('enrollments')
      .select(`
        status,
        cohorts (
          name,
          courses (
            slug
          )
        )
      `)
      .eq('user_id', user.id);

    if (error) {
      // Fallback in development before manual database migration execution
      return {
        user,
        enrollments: [
          {
            courseSlug: 'creator-lab',
            cohortName: 'Cohorte 01',
            status: 'active',
          },
        ],
      };
    }

    const enrollments: UserEnrollmentInfo[] = (data || []).map((row: any) => ({
      courseSlug: row.cohorts?.courses?.slug || 'creator-lab',
      cohortName: row.cohorts?.name || 'Cohorte 01',
      status: row.status as 'active' | 'completed' | 'cancelled',
    }));

    // If student has no enrollment rows yet, return empty list
    return { user, enrollments };
  } catch {
    return { user, enrollments: [] };
  }
}
