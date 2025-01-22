import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(): Promise<NextResponse> {

    const filePath = path.resolve('public', 'zzanga1.svg');
    const svgFileContent = fs.readFileSync(filePath, 'utf8');


    // 캐시 방지 헤더 추가
    return new NextResponse(svgFileContent, {
        headers: {
            'Content-Type': 'image/svg+xml',
        },
    });
}
