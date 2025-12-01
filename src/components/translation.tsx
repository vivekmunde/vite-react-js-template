import type { TOptionsBase } from 'i18next';
import { Translation as I18nTranslation } from 'react-i18next';

const getI18nKeys = (value: string) => {
  const ns = value.split('/')?.[0];
  const key = value?.split('/')?.[1] ?? value;
  return [ns, key];
};

const Translation: React.FC<{
  value: string;
  options?: TOptionsBase &
    Record<string, string | number | boolean | undefined>;
}> = ({ value, options }) => {
  const [ns, key] = getI18nKeys(value);
  return (
    <I18nTranslation ns={ns}>
      {t => <span>{t(key, options)}</span>}
    </I18nTranslation>
  );
};

export { Translation };
