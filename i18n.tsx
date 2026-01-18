import React, { createContext, useContext, useMemo, useState } from 'react';

export type Lang = 'en' | 'zh';

type TranslationDict = Record<string, string>;
type Translations = Record<Lang, TranslationDict>;

const translations: Translations = {
  en: {
    hubTitle: 'Privacy Hub',
    home: 'Home',
    applications: 'Applications',
    heroTitle: 'Transparency & Trust',
    heroSubtitle:
      'Welcome to my developer hub. Here you can find the privacy policies and terms for all my applications. I believe in privacy-by-design and minimal data collection.',
    active: 'Active',
    viewPrivacy: 'View Privacy Policy',
    viewService: 'View Service Agreement',
    lastUpdated: 'Last Updated',
    forApp: 'for',
    noPolicy: 'No {type} available for this application yet.',
    hostedDisclaimer:
      'This document is hosted by the developer to provide transparency regarding data usage.',
    toggleZh: '中',
    toggleEn: 'EN',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Service Agreement',
  },
  zh: {
    hubTitle: '隐私中心',
    home: '首页',
    applications: '应用列表',
    heroTitle: '透明与信任',
    heroSubtitle:
      '欢迎来到我的开发者中心，这里可以查看所有应用的隐私政策与服务协议。我们坚持隐私优先与最小化数据收集。',
    active: '已启用',
    viewPrivacy: '查看隐私政策',
    viewService: '查看服务协议',
    lastUpdated: '最近更新',
    forApp: '适用于',
    noPolicy: '当前应用暂无 {type} 内容。',
    hostedDisclaimer: '本文件由开发者托管，用于透明展示数据使用规则。',
    toggleZh: '中',
    toggleEn: 'EN',
    privacyPolicy: '隐私政策',
    termsOfService: '服务协议',
  },
};

const formatText = (text: string, vars?: Record<string, string>) => {
  if (!vars) return text;
  return Object.entries(vars).reduce(
    (acc, [key, value]) => acc.replace(`{${key}}`, value),
    text
  );
};

export const translate = (lang: Lang, key: string, vars?: Record<string, string>) => {
  const value = translations[lang]?.[key] ?? translations.en[key] ?? key;
  return formatText(value, vars);
};

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string, vars?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('zh');
  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: (key: string, vars?: Record<string, string>) => translate(lang, key, vars),
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
