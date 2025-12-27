import { AppProfile, PolicyType } from './types';

// =====================================================================
// GUIDE FOR THE USER:
// To add a new app, simply copy the structure below and add it to the 'APPS' array.
// =====================================================================

export const DEVELOPER_NAME = "Dream Code Quadrant";
export const DEVELOPER_EMAIL = "taokan@dreamcodeq.top"; // REPLACE WITH YOUR EMAIL

export const APPS: AppProfile[] = [
  {
    id: "award-account",
    name: "Award Account", // REPLACE WITH YOUR ACTUAL APP NAME
    description: "A secure, offline-first utility application, for level up your habits.",
    lastUpdated: "Dec 27, 2025",
    policies: {
      [PolicyType.PRIVACY]: [
        {
          title: "1. Introduction",
          content: `This Privacy Policy applies to the "Award Account" app (hereinafter referred to as "the App"). We respect your privacy and are committed to protecting it. This App is designed to be a local-only tool, meaning the core business logic operates offline and your personal input data remains on your device.`
        },
        {
          title: "2. Data We Collect",
          content: "As the developer of this App, I do not collect, store, or transfer any of your personal data to my own servers. All data you input into the App (such as notes, records, or settings) is stored locally on your device's internal storage."
        },
        {
          title: "3. Third-Party Libraries and Frameworks (Uni-app)",
          content: `While our business logic does not upload data, this App is built using the uni-app framework provided by DCloud. The framework itself may collect certain non-personally identifiable technical information to ensure app stability and provide statistical analysis.

According to DCloud's privacy guidelines, the framework may collect:
- Device Information: Including device model, operating system version, and Android ID (to identify unique devices for statistical purposes).
- Log Information: Crash logs and diagnostics if the app malfunctions.

This data is processed by DCloud and is governed by their privacy policy. We have configured the App to minimize this collection where possible.`
        },
        {
          title: "4. Permissions",
          content: [
            "Storage/Media: Required to save your data files locally on your device.",
            "Internet Access: Required by the framework for statistical modules and to check for app updates, even if user data is not uploaded."
          ]
        },
        {
          title: "5. Data Safety",
          content: "Because your data is stored locally, you are responsible for backing up your device. Deleting the App may result in the permanent loss of data stored within the App's local directories."
        },
        {
          title: "6. Changes to This Policy",
          content: "We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. These changes are effective immediately after they are posted on this page."
        },
        {
          title: "7. Contact Us",
          content: `If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at ${DEVELOPER_EMAIL}.`
        }
      ]
    }
  },
  // FUTURE APP EXAMPLE
  /*
  {
    id: "next-app",
    name: "Next Awesome App",
    description: "Coming soon...",
    lastUpdated: "2024-01-01",
    policies: { ... }
  }
  */
];