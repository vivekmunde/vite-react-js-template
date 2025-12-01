import { DataTestId } from '@/components/ui/data-test-id';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/hooks/use-language';
import type { TLanguage } from '@/types/language';
import React from 'react';

const languageList: { key: TLanguage; label: string }[] = [
  { key: 'en', label: 'English' },
  { key: 'nl', label: 'Nederlands' },
];

const Language: React.FC = () => {
  const [language, setLanguage] = useLanguage();

  const handleChange = (value: TLanguage) => {
    setLanguage(value);
  };

  return (
    <DataTestId value="language">
      <Select value={language} onValueChange={handleChange}>
        <SelectTrigger className="max-w-fit bg-background dark:bg-muted/60">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {languageList.map(language => (
            <SelectItem
              key={language.key}
              value={language.key}
              onClick={() => handleChange(language.key)}
            >
              {language.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </DataTestId>
  );
};

export { Language };
