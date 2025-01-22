import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: Request): Promise<NextResponse> {
    const currentTime = new Date();
    const seconds = currentTime.getSeconds();
    const color = seconds % 2 === 0 ? 'blue' : 'red';  // 0초마다 색상 변경

    // public 폴더 내 escobar.svg 파일 경로
    const filePath = path.resolve('public', 'zzanga1.svg');
    const svgFileContent = fs.readFileSync(filePath, 'utf8');

    // SVG 내용에 동적 색상 삽입
    const svg = svgFileContent.replace(/fill="black"/g, `fill="currentColor"`);  // 모든 fill="black"을 동적으로 변경


    // 캐시 방지 헤더 추가
    return new NextResponse(svg, {
        headers: {
            'Content-Type': 'image/svg+xml',
            'Cache-Control': 'no-cache, no-store, must-revalidate', // 캐시 방지
            'Pragma': 'no-cache', // 구형 브라우저 호환
            'Expires': '0', // 즉시 만료
        },
    });
}
