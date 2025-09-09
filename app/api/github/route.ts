import { NextResponse } from 'next/server';

const GITHUB_USERNAME = 'parth-valia';

export async function GET() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, {
      headers: {
        'Accept': 'application/vnd.github+json',
      },
      // Cache for 1 hour
      next: { revalidate: 3600 },
    } as any);

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch repositories' }, { status: res.status });
    }

    const data = await res.json();

    const repos = (data || [])
      .filter((r: any) => !r.fork)
      .map((r: any) => ({
        id: r.id,
        name: r.name,
        full_name: r.full_name,
        description: r.description,
        html_url: r.html_url,
        language: r.language,
        stargazers_count: r.stargazers_count,
        forks_count: r.forks_count,
        updated_at: r.updated_at,
        topics: r.topics || [],
      }));

    return NextResponse.json({ repos });
  } catch (error) {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}


