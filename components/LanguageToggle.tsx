import React from 'react';
import { Lang, useLanguage } from '../i18n';

type Size = 'sm' | 'md';

const sizeStyles: Record<Size, string> = {
  sm: 'text-xs',
  md: 'text-sm',
};

interface LanguageToggleProps {
  className?: string;
  size?: Size;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '', size = 'sm' }) => {
  const { lang, setLang, t } = useLanguage();

  const base = `flex border border-slate-200 rounded-lg overflow-hidden font-semibold text-slate-600 ${sizeStyles[size]} ${className}`;
  const btn = (active: boolean) =>
    `px-2.5 py-1 transition-colors ${active ? 'bg-slate-100 text-slate-900' : 'hover:bg-slate-50'}`;

  const set = (next: Lang) => () => setLang(next);

  return (
    <div className={base}>
      <button onClick={set('zh')} className={btn(lang === 'zh')}>
        {t('toggleZh')}
      </button>
      <div className="w-px bg-slate-200" />
      <button onClick={set('en')} className={btn(lang === 'en')}>
        {t('toggleEn')}
      </button>
    </div>
  );
};

export default LanguageToggle;
