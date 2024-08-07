"use client";
import { useRef } from 'react';

export default function FileUpload() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (fileInputRef.current && fileInputRef.current.files) {
      const file = fileInputRef.current.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          // Handle the file data
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input type="file" ref={fileInputRef} onChange={handleFileChange} />
    </div>
  );
}