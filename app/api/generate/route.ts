// app/api/generate/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { image, theme } = await req.json();

  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      prompt: `Generate a room design based on the theme: ${theme}`,
      n: 1,
      size: '1024x1024',
      response_format: 'url',
    }),
  });

  const data = await response.json();
  const generatedImage = data.data[0].url;

  return NextResponse.json({ image: generatedImage });
}