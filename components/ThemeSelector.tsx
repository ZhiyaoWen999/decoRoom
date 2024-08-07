"use client";
interface ThemeSelectorProps {
    onSelect: (theme: string) => void;
  }
  
  export default function ThemeSelector({ onSelect }: ThemeSelectorProps) {
    const themes = ['Modern', 'Classic', 'Minimalist', 'Industrial'];
  
    return (
      <div className="flex flex-col items-center">
        <select onChange={(e) => onSelect(e.target.value)} className="mt-2 p-2 border rounded">
          <option value="">Select a theme</option>
          {themes.map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>
      </div>
    );
  }