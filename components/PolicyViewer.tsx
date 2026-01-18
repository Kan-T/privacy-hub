import React, { useMemo } from 'react';
import { AppProfile, PolicySection, PolicyType } from '../types';
import { useLanguage } from '../i18n';

interface PolicyViewerProps {
  app: AppProfile;
  type: PolicyType;
}

const PolicyViewer: React.FC<PolicyViewerProps> = ({ app, type }) => {
  const { lang, t } = useLanguage();
  const typeLabel = useMemo(() => {
    if (type === PolicyType.PRIVACY) return t('privacyPolicy');
    if (type === PolicyType.TERMS) return t('termsOfService');
    return type;
  }, [t, type]);
  const sections = app.policies[lang]?.[type];

  if (!sections) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-slate-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
        <p>{t('noPolicy', { type: typeLabel })}</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-slate-50 px-8 py-10 border-b border-slate-100">
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            {app.name.charAt(0)}
          </div>
          <div>
             <h1 className="text-2xl font-bold text-slate-900">{typeLabel}</h1>
             <p className="text-slate-500 text-sm">{t('forApp')} {app.name}</p>
          </div>
        </div>
        <p className="text-xs text-slate-400 uppercase tracking-wide">{t('lastUpdated')}: {app.lastUpdated}</p>
      </div>

      {/* Content */}
      <div className="px-8 py-10 space-y-8">
        {sections.map((section: PolicySection, idx: number) => (
          <section key={idx}>
            <h2 className="text-lg font-bold text-slate-800 mb-3 font-serif">
              {section.title}
            </h2>
            {Array.isArray(section.content) ? (
              <ul className="list-disc pl-5 space-y-2 text-slate-600 leading-relaxed">
                {section.content.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">
                {section.content}
              </p>
            )}
          </section>
        ))}
      </div>
      
      {/* Footer Disclaimer */}
      <div className="bg-slate-50 px-8 py-6 border-t border-slate-100 text-center">
        <p className="text-xs text-slate-400">
          {t('hostedDisclaimer')}
        </p>
      </div>
    </div>
  );
};

export default PolicyViewer;