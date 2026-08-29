import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-project.supabase.co';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({
          request,
        });
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options)
        );
      },
    },
  });

  // Extract path and locale
  const pathname = request.nextUrl.pathname;
  const segments = pathname.split('/').filter(Boolean);
  const lang = segments[0] === 'en' ? 'en' : 'es';

  // Only verify user session when interacting with Academy auth/classroom routes to minimize overhead
  const isClassroomRoute = pathname.startsWith(`/${lang}/academy/classroom`);
  const isLoginRoute = pathname === `/${lang}/academy/login`;

  if (isClassroomRoute || isLoginRoute) {
    let user = null;
    try {
      // Avoid network call if using dummy placeholder URL during local dev without credentials
      if (supabaseUrl && !supabaseUrl.includes('placeholder-project')) {
        const { data } = await supabase.auth.getUser();
        user = data.user;
      }
    } catch {
      user = null;
    }

    // Protected Classroom Route: unauthenticated users redirect to login
    if (isClassroomRoute && !user) {
      const loginUrl = new URL(`/${lang}/academy/login`, request.url);
      loginUrl.searchParams.set('redirectTo', pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Login Route: authenticated users redirect to classroom
    if (isLoginRoute && user) {
      return NextResponse.redirect(new URL(`/${lang}/academy/classroom`, request.url));
    }
  }

  return response;
}
