import React, { useMemo } from 'react';
import { AppProfile, PolicySection, PolicyType } from '../types';
import { useLanguage } from '../i18n';

type ParsedTable = {
  headers: string[];
  rows: string[][];
};

const parseMarkdownTable = (raw: string): ParsedTable | null => {
  const lines = raw
    .split('\n')
    .map(l => l.trim())
    .filter(Boolean);

  const firstPipe = lines.findIndex(l => l.startsWith('|'));
  if (firstPipe === -1) return null;

  const tableLines: string[] = [];
  for (let i = firstPipe; i < lines.length; i++) {
    const line = lines[i];
    if (!line.startsWith('|')) break;
    tableLines.push(line);
  }

  if (tableLines.length < 3) return null;
  const headerLine = tableLines[0];
  const separatorLine = tableLines[1];
  if (!/\|?\s*:?-{3,}:?\s*\|/.test(separatorLine)) return null;

  const splitRow = (line: string) =>
    line
      .replace(/^\|/, '')
      .replace(/\|$/, '')
      .split('|')
      .map(c => c.trim());

  const headers = splitRow(headerLine);
  const rows = tableLines.slice(2).map(splitRow);
  return { headers, rows };
};

const LinkIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className={`w-4 h-4 ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.19 8.688a4.5 4.5 0 010 6.364l-1.414 1.414a4.5 4.5 0 01-6.364-6.364l1.06-1.06"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.81 15.312a4.5 4.5 0 010-6.364l1.414-1.414a4.5 4.5 0 016.364 6.364l-1.06 1.06"
    />
  </svg>
);

const extractUrls = (text: string) => {
  const urls = text.match(/https?:\/\/\S+/g) ?? [];
  // Clean trailing punctuation
  return urls.map(u => u.replace(/[),.;]+$/g, ''));
};

const renderCell = (text: string) => {
  // Render URLs as clickable links; also supports multiple links separated by ';'
  const parts = text.split(/\s*;\s*/g);
  return (
    <span className="break-words">
      {parts.map((part, idx) => {
        const urls = extractUrls(part);
        if (urls.length > 0 && urls[0] === part) {
          return (
            <React.Fragment key={idx}>
              <a
                href={part}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-700 underline underline-offset-2"
              >
                {part}
              </a>
              {idx < parts.length - 1 ? <span> ; </span> : null}
            </React.Fragment>
          );
        }

        return (
          <React.Fragment key={idx}>
            <span>{part}</span>
            {idx < parts.length - 1 ? <span> ; </span> : null}
          </React.Fragment>
        );
      })}
    </span>
  );
};

const TableRenderer: React.FC<{ content: string }> = ({ content }) => {
  const parsed = parseMarkdownTable(content);
  if (!parsed) {
    return <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">{content}</p>;
  }

  const linkColIdx = parsed.headers.findIndex(h =>
    /^(link|链接)$|privacy\s*policy\s*link|official\s*privacy\s*policy\s*link|隐私政策链接|官方隐私政策链接/i.test(h.trim())
  );

  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200">
      <table className="w-full table-fixed text-sm text-slate-700">
        <colgroup>
          {parsed.headers.map((_, idx) => (
            <col key={idx} style={idx === linkColIdx ? { width: '3.5rem' } : undefined} />
          ))}
        </colgroup>
        <thead className="bg-slate-50">
          <tr>
            {parsed.headers.map((h, idx) => (
              <th
                key={idx}
                scope="col"
                className={`font-semibold text-slate-700 px-3 py-2 border-b border-slate-200 ${
                  idx === linkColIdx ? 'text-center whitespace-nowrap' : 'text-left'
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {parsed.rows.map((row, rIdx) => (
            <tr key={rIdx} className="even:bg-slate-50/40">
              {row.map((cell, cIdx) => (
                <td
                  key={cIdx}
                  className={`align-top px-3 py-2 border-b border-slate-100 ${
                    cIdx === linkColIdx ? 'text-center' : ''
                  }`}
                >
                  {cIdx === linkColIdx ? (
                    (() => {
                      const urls = extractUrls(cell);
                      const href = urls[0];
                      if (!href) return <span className="text-slate-400">-</span>;
                      return (
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Open official privacy policy link"
                          className="inline-flex items-center justify-center text-slate-500 hover:text-blue-600"
                        >
                          <LinkIcon />
                        </a>
                      );
                    })()
                  ) : (
                    renderCell(cell)
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

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
              <TableRenderer content={section.content} />
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