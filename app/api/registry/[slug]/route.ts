import { NextResponse } from 'next/server';
import { RESOURCES_DATA } from '@/data/resources';
import { getComponentSourceCode } from '@/data/component-code-templates';

/**
 * CLI Registry API Endpoint
 * Serves single-file components for `npx @uxio/ui add [slug]`
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const item = RESOURCES_DATA.find((r) => r.slug === slug);

  if (!item) {
    return NextResponse.json(
      {
        error: `Component '${slug}' not found in UXIO Registry.`,
        availableComponents: RESOURCES_DATA.map((r) => r.slug),
      },
      { status: 404 }
    );
  }

  const code = getComponentSourceCode(slug);

  return NextResponse.json(
    {
      name: item.name,
      slug: item.slug,
      filename: `${item.name}.tsx`,
      version: '1.0.0',
      description: item.description,
      isOpenSource: item.isOpenSource,
      dependencies: ['lucide-react', 'clsx', 'tailwind-merge'],
      code,
      meta: {
        author: 'UXIO Studio & Labs',
        license: 'MIT',
        docsUrl: `https://uxio.dev/resources/components/${slug}`,
      },
    },
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    }
  );
}
