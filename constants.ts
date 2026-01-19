import { AppProfile, PolicyType } from './types';

// =====================================================================
// GUIDE FOR THE USER:
// To add a new app, simply copy the structure below and add it to the 'APPS' array.
// =====================================================================

export const DEVELOPER_NAME = "Dream Code Quadrant";
export const DEVELOPER_COMPANY_EN = "Wuhan dream code quadrant Software Development Co., Ltd";
export const DEVELOPER_COMPANY_ZH = "武汉梦码象限软件开发有限公司";
export const DEVELOPER_EMAIL = "taokan@dreamcodeq.top"; // REPLACE WITH YOUR EMAIL

export const APPS: AppProfile[] = [
  {
    id: "award-account",
    name: "奖励账本",
    description: "用于任务记录、积分/奖励统计与展示的工具。",
    lastUpdated: "Jan 18, 2026",
    policies: {
      en: {
        [PolicyType.PRIVACY]: [
          {
            title: "Developer / Operator",
            content: DEVELOPER_COMPANY_EN
          },
          {
            title: "Contact Email",
            content: DEVELOPER_EMAIL
          },
          {
            title: "1. Introduction",
            content: `This Privacy Policy applies to the “Award Account” app (the “App”).
We respect your privacy and are committed to protecting it.

The App is primarily a local-first tool: your core records (tasks, points, reward settings, histories) are stored locally on your device.
However, the App includes advertising and analytics modules (currently uni-ad splash ads and uni statistics) which may process and transmit certain technical and usage information for ad delivery, measurement, anti-fraud, and app stability.

If you do not agree to this Privacy Policy, please do not use the App.`
          },
          {
            title: "2. Data You Enter (Local Data)",
            content: [
              "Content you create in the App (e.g., tasks, points, rewards, settings, histories) is stored locally on your device.",
              "We do not operate a cloud sync service for your core records in the current released version, and we do not upload your core records to our own servers for storage."
            ]
          },
          {
            title: "3. Third-Party SDKs and Frameworks",
            content: `The App is built on the uni-app / HTML5+ runtime provided by DCloud, and currently uses:
- uni statistics (analytics)
- uni-ad (advertising) — splash ads only in the current version

These SDKs/services may collect or process technical, usage, and advertising-related information.`
          },
          {
            title: "3.1 SDK Disclosure Table (Name / Data Collected / Purpose / Privacy Link)",
            content: `| SDK Name | Data Collected (Examples) | Purpose | Link |
|---|---|---|---|
| DCloud uni-app / HTML5+ Runtime | Device information (device model, OS version, language), runtime/app information (app version, SDK/runtime version), network information (network type), diagnostics (crash logs, error logs), startup/operation logs | Runtime support, stability, diagnostics, basic statistical analysis | https://dcloud.io/license/appprivacy.html |
| uni statistics (DCloud) | Device/app info (app version, runtime version), usage events (page views, basic feature usage, timestamps), diagnostics/performance data (crash logs, error metrics), network type | Analytics, performance monitoring, product improvement | https://dcloud.io/license/appprivacy.html |
| uni-ad (DCloud) – Splash Ads (Current) | Advertising identifiers (Android AD_ID/GAID and/or OAID/Android ID depending on device/OS), IP address / network info (network type), device info (model, OS version, language), splash ad interaction data (ad request, impression, click, timestamps), anti-fraud signals | Serve splash ads, measure impressions/clicks, attribution and billing, frequency control, fraud prevention, monetization | https://dcloud.io/license/appprivacy.html |
| Google AdMob (Future / Planned) | Advertising identifiers, IP address, device info, ad interaction data, diagnostics/performance data | Ad serving/measurement, attribution, fraud prevention | https://policies.google.com/privacy ; https://developers.google.com/admob/android/privacy/play-data-disclosure |
| Pangle / 穿山甲 (Future / Planned) | Advertising identifiers, device info, network/IP, ad interaction data (impressions/clicks), (optional) coarse location if enabled | Ad delivery/measurement, attribution, anti-fraud | https://www.pangleglobal.com/en/privacy/enduser-en |
| Tencent Youlianghui / 优量汇 (Future / Planned) | Advertising identifiers, device/app info, network/IP, ad interaction data | Ad delivery/measurement, attribution, anti-fraud | https://privacy.qq.com/ (Tencent Privacy Policy). Specific Youlianghui SDK privacy link will be added when enabled. |`
          },
          {
            title: "3.2 Future Integrations",
            content: `Currently, the App uses uni-ad for splash advertising only.
In future versions, we may integrate additional advertising networks and mediation partners (for example: Google AdMob, Pangle/穿山甲, Tencent Youlianghui/优量汇, etc.).
If we enable any new SDKs/partners, we will update this Privacy Policy and the SDK Disclosure Table above with the SDK name, data collected, purpose, and the official privacy policy link.`
          },
          {
            title: "4. How We Use Information",
            content: [
              "Provide and display splash ads, measure ad performance, and prevent fraud;",
              "Analyze aggregated usage to improve features and stability;",
              "Diagnose crashes and errors."
            ]
          },
          {
            title: "4.1 Local Core Records",
            content: "We do NOT use your locally stored core records (your task/reward content) for advertising targeting because they are stored locally and not uploaded to our own servers in the current released version."
          },
          {
            title: "5. Data Sharing",
            content: "We do not sell your personal information. We may share or allow processing of technical/usage/advertising data described above by third-party SDK providers to provide advertising, analytics, and runtime support as listed in the SDK Disclosure Table."
          },
          {
            title: "6. Permissions",
            content: `Depending on platform behavior and enabled modules, the App may request permissions such as:
- Network State / Wi‑Fi State: to detect connectivity for analytics/ad delivery.
- Advertising ID access (Android AD_ID): to support advertising measurement and attribution.

The App does not require access to your contacts, SMS, microphone, or camera for its core features.`
          },
          {
            title: "7. Data Storage and Retention",
            content: [
              "Core records are stored locally on your device until you delete them or uninstall the App.",
              "Analytics and advertising data may be retained by third-party providers according to their retention policies."
            ]
          },
          {
            title: "8. Your Choices",
            content: [
              "You may choose not to agree to this Privacy Policy; in that case, the App will exit and cannot be used.",
              "You may manage ad personalization, reset advertising identifiers, or limit ad tracking via your device system settings (if supported).",
              "You may uninstall the App at any time."
            ]
          },
          {
            title: "9. Changes to This Policy",
            content: "We may update this Privacy Policy from time to time. Any changes will be posted on this page and will take effect immediately upon posting (or as otherwise stated)."
          },
          {
            title: "10. Contact Us",
            content: `If you have any questions about this Privacy Policy, please contact:
${DEVELOPER_EMAIL}`
          }
        ],
        [PolicyType.TERMS]: [
          {
            title: "Version Info",
            content: `Service Agreement
Effective Date: 2026-01-18
Updated Date: 2026-01-18
App Name: Award Account
Developer/Operator: ${DEVELOPER_COMPANY_EN}
Contact: ${DEVELOPER_EMAIL}`
          },
          {
            title: "1. Agreement",
            content: "This agreement constitutes a legally binding contract between you and us regarding your use of Award Account. By clicking “Agree and Continue” on first launch or by otherwise using the app, you acknowledge that you have read and agreed to this agreement and the Privacy Policy."
          },
          {
            title: "2. Services",
            content: "The app provides task tracking, points/rewards, statistics display, and related features. We may adjust or upgrade services based on operational needs."
          },
          {
            title: "3. User Conduct",
            content: [
              "No violation of laws, regulations, or public order and good morals.",
              "No infringement of others' lawful rights.",
              "No interference with normal operation or malicious attacks."
            ]
          },
          {
            title: "4. Privacy & Data",
            content: "We value your personal information protection. Details are described in the Privacy Policy. Before you agree to the Privacy Policy, we will not collect or use your personal information in violation of applicable laws or store rules; if you disagree, you will not be able to enter the app and will exit. If third-party SDKs are involved, we will disclose their names, purposes, and possible collected information in the Privacy Policy."
          },
          {
            title: "5. Intellectual Property",
            content: "All app-related programs, interfaces, graphics, and text (excluding user-generated/uploaded content) belong to us or relevant rights holders. You may not copy, decompile, reverse engineer, or use them for commercial purposes without permission."
          },
          {
            title: "6. Disclaimer & Liability",
            content: "We are not liable, to the extent permitted by law, for interruptions, delays, or data loss caused by network, device, system versions, or force majeure. We strive to ensure stability and security but do not guarantee uninterrupted service."
          },
          {
            title: "7. Changes & Termination",
            content: "We may update this agreement due to business changes. Material changes will be notified via pop-up or page. If you disagree, you should stop using and uninstall; continued use means acceptance."
          },
          {
            title: "8. Governing Law & Disputes",
            content: "This agreement is governed by the laws of the People's Republic of China. Disputes should be resolved through negotiation; otherwise, submitted to the court with jurisdiction where the developer is located."
          }
        ]
      },
      zh: {
        [PolicyType.PRIVACY]: [
          {
            title: "开发者/运营者",
            content: DEVELOPER_COMPANY_ZH
          },
          {
            title: "联系邮箱",
            content: DEVELOPER_EMAIL
          },
          {
            title: "一、引言",
            content: `本隐私政策适用于“奖励账本”（以下简称“本应用”）。
我们尊重你的隐私并致力于保护你的个人信息安全。

本应用主要为本地优先工具：你的核心记录（任务、积分、奖励设置、历史记录）存储在你的设备本地。
但本应用包含广告与分析模块（当前为 uni-ad 开屏广告与 uni 统计），相关模块可能为广告投放、效果衡量、反作弊与应用稳定性而处理并传输部分技术与使用信息。

如果你不同意本隐私政策，请不要使用本应用。`
          },
          {
            title: "二、你在应用中输入的数据（本地数据）",
            content: [
              "你在本应用中创建的内容（如任务、积分、奖励、设置、历史记录）保存在你的设备本地。",
              "当前已发布版本不提供核心记录的云同步服务，我们不会将你的核心记录上传至我们的服务器存储。"
            ]
          },
          {
            title: "三、第三方 SDK 与框架",
            content: `本应用基于 DCloud 提供的 uni-app / HTML5+ 运行时构建，并且当前使用：
- uni 统计（分析）
- uni-ad（广告）——当前版本仅开屏广告

这些 SDK/服务可能收集或处理与技术、使用及广告相关的信息。`
          },
          {
            title: "3.1 SDK 披露表（名称 / 收集数据 / 用途 / 隐私链接）",
            content: `| SDK 名称 | 收集的数据（示例） | 用途 | 链接 |
|---|---|---|---|
| DCloud uni-app / HTML5+ Runtime | 设备信息（设备型号、系统版本、语言），运行时/应用信息（应用版本、SDK/运行时版本），网络信息（网络类型），诊断信息（崩溃日志、错误日志），启动/运行日志 | 运行时支持、稳定性、诊断、基础统计分析 | https://dcloud.io/license/appprivacy.html |
| uni 统计（DCloud） | 设备/应用信息（应用版本、运行时版本），使用事件（页面访问、基础功能使用、时间戳），诊断/性能数据（崩溃日志、错误指标），网络类型 | 数据分析、性能监控、产品改进 | https://dcloud.io/license/appprivacy.html |
| uni-ad（DCloud）— 开屏广告（当前） | 广告标识符（Android AD_ID/GAID 和/或 OAID/Android ID，取决于设备/系统），IP 地址/网络信息（网络类型），设备信息（型号、系统版本、语言），开屏广告交互数据（请求、展示、点击、时间戳），反作弊信号 | 展示开屏广告、衡量展示/点击、归因与计费、频控、反作弊、变现 | https://dcloud.io/license/appprivacy.html |
| Google AdMob（未来/计划） | 广告标识符、IP 地址、设备信息、广告交互数据、诊断/性能数据 | 广告投放/衡量、归因、反作弊 | https://policies.google.com/privacy ; https://developers.google.com/admob/android/privacy/play-data-disclosure |
| Pangle / 穿山甲（未来/计划） | 广告标识符、设备信息、网络/IP、广告交互数据（展示/点击），（可选）启用时的粗略位置 | 广告投放/衡量、归因、反作弊 | https://www.pangleglobal.com/en/privacy/enduser-en |
| Tencent Youlianghui / 优量汇（未来/计划） | 广告标识符、设备/应用信息、网络/IP、广告交互数据 | 广告投放/衡量、归因、反作弊 | https://privacy.qq.com/（腾讯隐私政策）。启用后将补充优量汇 SDK 的具体隐私链接。 |`
          },
          {
            title: "3.2 未来集成",
            content: `当前版本仅使用 uni-ad 的开屏广告。
未来版本中，我们可能接入更多广告网络与聚合合作方（例如：Google AdMob、Pangle/穿山甲、Tencent Youlianghui/优量汇 等）。
如启用新的 SDK/合作方，我们将更新本隐私政策及上述 SDK 披露表，补充 SDK 名称、收集数据、用途与官方隐私政策链接。`
          },
          {
            title: "四、我们如何使用信息",
            content: [
              "提供并展示开屏广告、衡量广告效果并防止作弊；",
              "分析汇总后的使用情况以改进功能与稳定性；",
              "诊断崩溃与错误。"
            ]
          },
          {
            title: "4.1 本地核心记录",
            content: "我们不会使用你本地存储的核心记录（你的任务/奖励内容）用于广告定向，因为这些数据存储在本地且在当前已发布版本中不会上传至我们的服务器。"
          },
          {
            title: "五、数据共享",
            content: "我们不会出售你的个人信息。为提供广告、分析与运行时支持，我们可能向第三方 SDK 提供方共享或允许其处理上述技术/使用/广告数据，具体见 SDK 披露表。"
          },
          {
            title: "六、权限",
            content: `根据平台行为与启用模块，本应用可能请求以下权限（示例）：
- 网络状态 / Wi‑Fi 状态：用于检测网络连接以支持分析/广告投放。
- 访问广告标识符（Android AD_ID）：用于广告衡量与归因。

本应用核心功能不需要访问你的通讯录、短信、麦克风或相机。`
          },
          {
            title: "七、数据存储与保留",
            content: [
              "核心记录保存在你的设备本地，直至你删除数据或卸载本应用。",
              "分析与广告数据可能由第三方提供方按照其保留策略进行存储与保留。"
            ]
          },
          {
            title: "八、你的选择",
            content: [
              "你可以选择不同意本隐私政策；此时应用将退出且无法使用。",
              "你可以在设备系统设置中管理个性化广告、重置广告标识符或限制广告追踪（如系统支持）。",
              "你可以随时卸载本应用。"
            ]
          },
          {
            title: "九、政策变更",
            content: "我们可能不时更新本隐私政策。变更将发布在本页面，并在发布后立即生效（或另行说明）。"
          },
          {
            title: "十、联系我们",
            content: `如对本隐私政策有任何疑问，请联系：
${DEVELOPER_EMAIL}`
          }
        ],
        [PolicyType.TERMS]: [
          {
            title: "版本信息",
            content: `《服务协议》
生效日期：2026-01-18
更新日期：2026-01-18
应用名称：奖励账本
开发者/运营者：${DEVELOPER_COMPANY_ZH}
联系方式：${DEVELOPER_EMAIL}`
          },
          {
            title: "一、协议说明",
            content: "本协议是你与我们之间就你使用【奖励账本】提供的产品与服务所订立的协议，具有法律效力。你在首次启动时点击“同意并继续”或以其他方式实际使用本应用，即视为你已阅读并同意本协议及《隐私政策》。"
          },
          {
            title: "二、服务内容",
            content: "本应用为用户提供任务记录、积分/奖励、统计展示等功能。我们可能基于产品运营需要对服务内容进行调整或升级。"
          },
          {
            title: "三、用户行为规范",
            content: [
              "不得违反法律法规或公序良俗。",
              "不得侵害他人合法权益。",
              "不得干扰或破坏应用正常运行、进行恶意攻击等。"
            ]
          },
          {
            title: "四、隐私与数据",
            content: "我们重视你的个人信息保护，具体规则见《隐私政策》。在你同意《隐私政策》前，我们不会以违反适用法律法规或应用商店规则的方式收集或使用你的个人信息；不同意则你将无法进入应用并会退出。如功能涉及第三方 SDK，我们会在《隐私政策》中披露第三方名称、用途及其可能收集的信息。"
          },
          {
            title: "五、知识产权",
            content: "本应用相关的程序、界面、图形、文字等内容（除用户自行生成/上传内容外）均归我们或相关权利人所有。未经许可，你不得复制、反编译、逆向工程或用于商业用途。"
          },
          {
            title: "六、免责声明与责任限制",
            content: "因网络、设备、系统版本、不可抗力等原因导致服务中断、延迟或数据丢失，我们在法律允许范围内免于承担责任。我们会尽力保障服务稳定与数据安全，但不对服务绝对不中断作保证。"
          },
          {
            title: "七、协议变更与终止",
            content: "我们可能根据业务变化更新本协议。重大变更会以弹窗/页面方式提示。若你不同意更新内容，应立即停止使用并卸载应用；你继续使用视为接受更新。"
          },
          {
            title: "八、法律适用与争议解决",
            content: "本协议适用中华人民共和国法律。如发生争议，双方应先协商解决；协商不成，提交开发者所在地有管辖权的人民法院处理。"
          }
        ]
      }
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