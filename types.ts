export enum PolicyType {
  PRIVACY = 'Privacy Policy',
  TERMS = 'Terms of Service',
  SUPPORT = 'Support',
}

export interface PolicySection {
  title: string;
  content: string | string[]; // Can be a paragraph or a list of items
}

export type LanguagePolicies = {
  [key in PolicyType]?: PolicySection[];
};

export interface AppProfile {
  id: string;
  name: string;
  iconUrl?: string; // Optional icon
  description: string;
  lastUpdated: string;
  policies: {
    en: LanguagePolicies;
    zh: LanguagePolicies;
  };
}