import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    framework: 'Next.js 14 App Router',
    owner: 'Manish Lalotra',
    service: 'nextjs-typescript-saas-dashboard'
  });
}
