import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
    const svgFileUrl = `${baseUrl}/zzanga1.svg`;

    return NextResponse.redirect(svgFileUrl);
}