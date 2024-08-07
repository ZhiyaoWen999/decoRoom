"use client";
import { useState } from 'react';
import FileUpload from './FileUpload';
import ThemeSelector from './ThemeSelector';
import GeneratedImage from './GeneratedImage';

export default function RoomDesignGenerator() {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleThemeSelect = async (theme: string) => {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ theme }),
    });
    const data = await response.json();
    setGeneratedImage(data.image);
  };

  return (
    <div>
      <FileUpload />
      <ThemeSelector onSelect={handleThemeSelect} />
      {generatedImage && <GeneratedImage src={generatedImage} />}
    </div>
  );
}