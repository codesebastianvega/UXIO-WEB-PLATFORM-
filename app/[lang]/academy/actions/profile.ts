'use server';

import { revalidatePath } from 'next/cache';
import { createClient } from '@/lib/supabase/server';
import { StudentProfileData } from '@/lib/supabase/profile';

interface UpdateProfilePayload {
  fullName: string;
  bio?: string;
  instagram?: string;
  tiktok?: string;
  youtube?: string;
  website?: string;
  city?: string;
  profession?: string;
  lang?: string;
}

export async function updateStudentProfileAction({
  fullName,
  bio = '',
  instagram = '',
  tiktok = '',
  youtube = '',
  website = '',
  city = '',
  profession = '',
  lang = 'es',
}: UpdateProfilePayload): Promise<{
  success: boolean;
  profile?: Partial<StudentProfileData>;
  error?: string;
}> {
  try {
    const supabase = await createClient();

    // 1. Authenticate user from server session
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (!user || authError) {
      return {
        success: false,
        error: 'Unauthorized: Inicie sesión para modificar su perfil.',
      };
    }

    const cleanName = fullName.trim();
    if (!cleanName) {
      return {
        success: false,
        error: 'El nombre no puede estar vacío.',
      };
    }

    const now = new Date().toISOString();

    // 2. Update profile in database (never touching role or email)
    const { data, error: updateErr } = await supabase
      .from('profiles')
      .upsert(
        {
          id: user.id,
          full_name: cleanName,
          email: user.email,
          bio: bio.trim() || null,
          instagram: instagram.trim() || null,
          tiktok: tiktok.trim() || null,
          youtube: youtube.trim() || null,
          website: website.trim() || null,
          city: city.trim() || null,
          profession: profession.trim() || null,
          updated_at: now,
        },
        { onConflict: 'id' }
      )
      .select('*')
      .single();

    if (updateErr) {
      return { success: false, error: updateErr.message };
    }

    // 3. Revalidate classroom views
    revalidatePath(`/${lang}/academy/classroom`, 'layout');
    revalidatePath(`/${lang}/academy/classroom/profile`, 'page');

    return {
      success: true,
      profile: {
        id: user.id,
        fullName: data.full_name,
        email: data.email,
        bio: data.bio,
        instagram: data.instagram,
        tiktok: data.tiktok,
        youtube: data.youtube,
        website: data.website,
        city: data.city,
        profession: data.profession,
      },
    };
  } catch (err: any) {
    return {
      success: false,
      error: err?.message || 'Error al actualizar el perfil.',
    };
  }
}
