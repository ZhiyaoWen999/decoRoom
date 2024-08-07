import FileUpload from '@/components/FileUpload';
import ThemeSelector from '@/components/ThemeSelector';
import GeneratedImage from '@/components/GeneratedImage';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Room Design Generator</h1>
      <FileUpload />
      <ThemeSelector onSelect={(theme: string) => {}} />
      <GeneratedImage />
    </div>
  );
}