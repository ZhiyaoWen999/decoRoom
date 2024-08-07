"use client";
import { useRef } from 'react';

export default function GeneratedImage() {
  const generatedImageRef = useRef<HTMLImageElement | null>(null);

  const handleGenerate = async () => {
    // Assume image and theme are available
    const image = ''; // Replace with actual image data
    const theme = ''; // Replace with actual theme

    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image, theme }),
    });

    const data = await response.json();
    if (generatedImageRef.current) {
      generatedImageRef.current.src = data.image;
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <button onClick={handleGenerate} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
        Generate
      </button>

    </div>
  );
}