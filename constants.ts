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
    lastUpdated: "Jan 30, 2026",
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
            title: "Effective Date",
            content: "January 30, 2026"
          },
          {
            title: "1. Introduction",
            content: `"Award Account" (hereinafter referred to as "the App") is developed and operated by ${DEVELOPER_COMPANY_EN}. We understand the importance of your personal information and will do our best to protect your personal information security. Please read and understand this Privacy Policy carefully before using this App.`
          },
          {
            title: "2. Information We Collect",
            content: `To ensure the normal operation of the App and advertising services, we and integrated third-party SDKs may collect the following information:`
          },
          {
            title: "2.1 Device Information",
            content: `| Information Type | Specific Content | Collection Purpose |
|---|---|---|
| Basic Device Info | Device model, brand, screen resolution | Adapt display for different devices |
| System Info | OS version, system language | App compatibility and localization |
| App Info | App version, app launch time | Statistical analysis and troubleshooting |
| Crash Logs | Error information when app crashes | Locate and fix issues |`
          },
          {
            title: "2.2 Device Identifiers",
            content: `| Identifier Type | Description | Collection Purpose |
|---|---|---|
| OAID | Anonymous device identifier | Ad display and effectiveness statistics |
| Android ID | System-assigned device identifier | Ad attribution and anti-fraud |
| Advertising ID (AD_ID/GAID) | Google advertising identifier | Ad services (overseas version only) |
| IDFA | iOS advertising identifier | Ad services (requires user authorization) |`
          },
          {
            title: "2.3 Network Information",
            content: `Based on regional regulations and app distribution channels, we may collect the following network information:

| Information Type | China Mainland Version | Overseas Version | Purpose |
|---|---|---|---|
| Network Connection Status | ✅ Collected | ✅ Collected | Optimize network requests |
| Network Type | ✅ Collected | ✅ Collected | Adapt to different network environments |
| IP Address | ❌ Not collected | ✅ Collected | Ad service regional adaptation |

**Note**: Versions downloaded from China mainland app stores (Xiaomi, vivo, OPPO, Huawei, etc.) will NOT collect your IP address. Versions downloaded from overseas channels (Google Play, etc.) may collect IP address for ad regional adaptation.`
          },
          {
            title: "2.4 Storage Permission",
            content: [
              "We use storage permission for:",
              "• Cache ad materials to reduce repeated downloads and save your data",
              "• Save app local data"
            ]
          },
          {
            title: "3. Information We Do NOT Collect",
            content: `Regardless of which version you use, we will NOT collect the following sensitive information:

| Information Type | Status |
|---|---|
| ❌ Installed app list | Not collected |
| ❌ Running app list | Not collected |
| ❌ Precise/Coarse location | Not collected |
| ❌ IMEI/MEID/IMSI | Not collected |
| ❌ Phone number | Not collected |
| ❌ MAC address | Not collected |
| ❌ Contacts | Not collected |
| ❌ SMS/Call records | Not collected |

**Additional commitment for China Mainland version**: IP address is NOT collected.`
          },
          {
            title: "4. Third-Party SDK Description",
            content: `This App integrates the following third-party SDKs:`
          },
          {
            title: "4.1 DCloud uni-app Engine",
            content: `**Provider:** Digital Paradise (Beijing) Network Technology Co., Ltd.
**Purpose:** App runtime framework
**Privacy Policy:** https://ask.dcloud.net.cn/protocol.html`
          },
          {
            title: "4.2 uni Statistics",
            content: `**Provider:** Digital Paradise (Beijing) Network Technology Co., Ltd.
**Purpose:** App statistical analysis, crash monitoring
**Information Collected:** Device information, app launch information, crash logs
**Privacy Policy:** https://ask.dcloud.net.cn/protocol.html`
          },
          {
            title: "4.3 uni-ad Advertising SDK",
            content: `**Provider:** Digital Paradise (Beijing) Network Technology Co., Ltd.
**Purpose:** Advertising display service
**Information Collected:** Device identifiers (OAID, Android ID), network information, IP address
**Privacy Policy:** https://uniad.dcloud.net.cn/privacy`
          },
          {
            title: "4.3.1 Currently Enabled Ad Networks (Domestic)",
            content: `**Tencent Youlianghui (优量汇)**
Provider: Shenzhen Tencent Computer Systems Co., Ltd.
Privacy Policy: https://e.qq.com/dev/help_detail.html?cid=2005&pid=5983

**Fanlian (泛连)**
Provider: Fanlian Network Technology Co., Ltd.
Privacy Policy: Please refer to the provider's official privacy policy

**Octopus Mobile Advertising (章鱼移动广告)**
Provider: Octopus Mobile Advertising Technology Co., Ltd.
Privacy Policy: Please refer to the provider's official privacy policy

**Huaxia Leyou (华夏乐游)**
Provider: Huaxia Leyou Network Technology Co., Ltd.
Privacy Policy: Please refer to the provider's official privacy policy`
          },
          {
            title: "4.3.2 Planned Ad Networks (Domestic)",
            content: `The following ad networks are planned for future integration:
• Huawei Ads (华为广告联盟)
• Pangolin GroMore (穿山甲GroMore)
• Sigmob Ad Network
• Kuaishou Ads (快手广告联盟)
• Baidu Baiqingteng Ads (百度百青藤广告联盟)
• Juliyumeng (聚力阅盟)
• AdScope Beizi Ads (AdScope倍孜广告)`
          },
          {
            title: "4.3.3 Planned Ad Networks (International)",
            content: `The following international ad networks are planned for future integration:
• Pangle (Overseas Pangolin)
• inmobi
• Google AdMob
• ironSource
• Unity Ads
• Mintegral
• Liftoff
• AppLovin`
          },
          {
            title: "5. Purpose of Information Use",
            content: [
              "The information we collect is only used for the following purposes:",
              "• **Ensure normal app operation:** Device adaptation, performance optimization",
              "• **Advertising services:** Display ads, measure ad effectiveness, prevent ad fraud",
              "• **Statistical analysis:** Understand app usage, optimize product experience",
              "• **Troubleshooting:** Locate and fix issues through crash logs"
            ]
          },
          {
            title: "6. Information Storage and Security",
            content: [
              "**Storage Location:** Your personal data is primarily stored locally on your device",
              "**Retention Period:** Data is retained only for as long as necessary to fulfill the collection purposes",
              "**Security Measures:** We take reasonable technical and administrative measures to protect your information security"
            ]
          },
          {
            title: "7. Your Rights",
            content: [
              "You can:",
              "• **Refuse authorization:** You can choose to disagree with the Privacy Policy on first launch, and the app will exit",
              "• **Manage permissions:** Turn off related permissions at any time in system settings",
              "• **Delete data:** Uninstalling the app will delete all locally stored data"
            ]
          },
          {
            title: "8. Protection of Minors",
            content: "This App is suitable for users of all ages. We do not actively collect personal information from minors."
          },
          {
            title: "9. Privacy Policy Updates",
            content: "We may revise this policy from time to time. Updated policies will be prompted within the app. Please review regularly."
          },
          {
            title: "10. Contact Us",
            content: `If you have any questions about this Privacy Policy, please contact us through:
**Email:** ${DEVELOPER_EMAIL}
**In-app Feedback:** Settings → Feedback`
          },
          {
            title: "Appendix: Permission List",
            content: `| Android Permission | Purpose |
|---|---|
| INTERNET | Access internet, load ads |
| ACCESS_NETWORK_STATE | Detect network connection status |
| ACCESS_WIFI_STATE | Detect WiFi connection status |
| READ_EXTERNAL_STORAGE | Read ad cache |
| WRITE_EXTERNAL_STORAGE | Write ad cache |
| VIBRATE | Interaction feedback vibration |
| AD_ID | Google advertising identifier |`
          }
        ],
        [PolicyType.TERMS]: [
          {
            title: "Version Info",
            content: `Service Agreement
Effective Date: 2026-01-30
Updated Date: 2026-01-30
App Name: Award Account
Developer/Operator: ${DEVELOPER_COMPANY_EN}
Contact: ${DEVELOPER_EMAIL}`
          },
          {
            title: "1. Agreement",
            content: "This agreement constitutes a legally binding contract between you and us regarding your use of Award Account. By clicking \"Agree and Continue\" on first launch or by otherwise using the app, you acknowledge that you have read and agreed to this agreement and the Privacy Policy."
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
            title: "生效日期",
            content: "2026年1月30日"
          },
          {
            title: "一、引言",
            content: `「奖励账本」（以下简称"本应用"）由${DEVELOPER_COMPANY_ZH}开发和运营。我们深知个人信息对您的重要性，并会尽全力保护您的个人信息安全。请您在使用本应用前，仔细阅读并了解本隐私政策。`
          },
          {
            title: "二、我们收集的信息",
            content: `为保障应用正常运行及广告服务，我们及接入的第三方SDK可能收集以下信息：`
          },
          {
            title: "2.1 设备信息",
            content: `| 信息类型 | 具体内容 | 收集目的 |
|---|---|---|
| 设备基本信息 | 设备型号、品牌、屏幕分辨率 | 适配不同设备的显示效果 |
| 系统信息 | 操作系统版本、系统语言 | 应用兼容性和本地化 |
| 应用信息 | 应用版本、应用启动时间 | 统计分析和问题排查 |
| 崩溃日志 | 应用崩溃时的错误信息 | 定位和修复问题 |`
          },
          {
            title: "2.2 设备标识符",
            content: `| 标识符类型 | 说明 | 收集目的 |
|---|---|---|
| OAID | 匿名设备标识符 | 广告展示和效果统计 |
| Android ID | 系统分配的设备标识 | 广告归因和防作弊 |
| 广告标识符 (AD_ID/GAID) | Google 广告标识符 | 广告服务（仅限海外版本） |
| IDFA | iOS 广告标识符 | 广告服务（需用户授权） |`
          },
          {
            title: "2.3 网络信息",
            content: `根据您所在地区的法规要求和应用分发渠道，我们可能收集以下网络信息：

| 信息类型 | 中国大陆版本 | 海外版本 | 用途 |
|---|---|---|---|
| 网络连接状态 | ✅ 收集 | ✅ 收集 | 优化网络请求 |
| 网络类型 | ✅ 收集 | ✅ 收集 | 适配不同网络环境 |
| IP地址 | ❌ 不收集 | ✅ 收集 | 广告服务地域适配 |

**说明**：通过小米、vivo、OPPO、华为等中国大陆应用商店下载的版本，我们不会收集您的 IP 地址。通过 Google Play 等海外渠道下载的版本，可能收集 IP 地址用于广告地域适配。`
          },
          {
            title: "2.4 存储权限",
            content: [
              "我们使用存储权限用于：",
              "• 缓存广告素材，减少重复下载，节省您的流量",
              "• 保存应用本地数据"
            ]
          },
          {
            title: "三、我们不会收集的信息",
            content: `无论您使用哪个版本，我们均不会收集以下敏感信息：

| 信息类型 | 状态 |
|---|---|
| ❌ 已安装应用列表 | 不收集 |
| ❌ 运行中应用列表 | 不收集 |
| ❌ 精确/粗略地理位置 | 不收集 |
| ❌ IMEI/MEID/IMSI | 不收集 |
| ❌ 手机号码 | 不收集 |
| ❌ MAC地址 | 不收集 |
| ❌ 通讯录/联系人 | 不收集 |
| ❌ 短信/通话记录 | 不收集 |

**中国大陆版本额外承诺**：不收集 IP 地址。`
          },
          {
            title: "四、第三方SDK说明",
            content: `本应用接入以下第三方SDK：`
          },
          {
            title: "4.1 DCloud uni-app 引擎",
            content: `**提供方：** 数字天堂（北京）网络技术有限公司
**用途：** 应用运行框架
**隐私政策：** https://ask.dcloud.net.cn/protocol.html`
          },
          {
            title: "4.2 uni统计",
            content: `**提供方：** 数字天堂（北京）网络技术有限公司
**用途：** 应用统计分析、崩溃监控
**收集信息：** 设备信息、应用启动信息、崩溃日志
**隐私政策：** https://ask.dcloud.net.cn/protocol.html`
          },
          {
            title: "4.3 uni-ad 广告SDK",
            content: `**提供方：** 数字天堂（北京）网络技术有限公司
**用途：** 广告展示服务
**收集信息：** 设备标识符（OAID、Android ID）、网络信息、IP地址
**隐私政策：** https://uniad.dcloud.net.cn/privacy`
          },
          {
            title: "4.3.1 已开通广告商（国内）",
            content: `**腾讯优量汇广告SDK**
提供方：深圳市腾讯计算机系统有限公司
隐私政策：https://e.qq.com/dev/help_detail.html?cid=2005&pid=5983

**泛连广告SDK**
提供方：泛连网络技术有限公司
隐私政策：请参阅提供方官方隐私政策

**Octopus章鱼移动广告SDK**
提供方：章鱼移动广告技术有限公司
隐私政策：请参阅提供方官方隐私政策

**华夏乐游广告SDK**
提供方：华夏乐游网络技术有限公司
隐私政策：请参阅提供方官方隐私政策`
          },
          {
            title: "4.3.2 计划开通广告商（国内）",
            content: `以下广告商计划在未来版本中接入：
• 华为广告联盟
• 穿山甲GroMore
• Sigmob广告联盟
• 快手广告联盟
• 百度百青藤广告联盟
• 聚力阅盟
• AdScope倍孜广告`
          },
          {
            title: "4.3.3 计划开通广告商（国外）",
            content: `以下国外广告商计划在未来版本中接入：
• Pangle（海外穿山甲）
• inmobi
• Google AdMob（谷歌广告）
• ironSource
• Unity Ads
• Mintegral
• Liftoff
• AppLovin`
          },
          {
            title: "五、信息使用目的",
            content: [
              "我们收集的信息仅用于以下目的：",
              "• **保障应用正常运行：** 适配设备、优化性能",
              "• **广告服务：** 展示广告、统计广告效果、防止广告作弊",
              "• **统计分析：** 了解应用使用情况、优化产品体验",
              "• **问题排查：** 通过崩溃日志定位和修复问题"
            ]
          },
          {
            title: "六、信息存储与安全",
            content: [
              "**存储位置：** 您的个人数据主要存储在您的设备本地",
              "**存储期限：** 仅在实现收集目的所必需的期限内保留",
              "**安全措施：** 我们采取合理的技术和管理措施保护您的信息安全"
            ]
          },
          {
            title: "七、您的权利",
            content: [
              "您可以：",
              "• **拒绝授权：** 首次启动时可选择不同意隐私政策，应用将退出",
              "• **管理权限：** 在系统设置中随时关闭相关权限",
              "• **删除数据：** 卸载应用将删除本地存储的所有数据"
            ]
          },
          {
            title: "八、未成年人保护",
            content: "本应用适合所有年龄段用户使用。我们不会主动收集未成年人的个人信息。"
          },
          {
            title: "九、隐私政策更新",
            content: "我们可能适时修订本政策。更新后的政策将在应用内提示，请您定期查阅。"
          },
          {
            title: "十、联系我们",
            content: `如您对本隐私政策有任何疑问，请通过以下方式联系我们：
**邮箱：** ${DEVELOPER_EMAIL}
**应用内反馈：** 设置 → 反馈`
          },
          {
            title: "附录：权限清单",
            content: `| Android 权限 | 用途说明 |
|---|---|
| INTERNET | 访问互联网，加载广告 |
| ACCESS_NETWORK_STATE | 检测网络连接状态 |
| ACCESS_WIFI_STATE | 检测WiFi连接状态 |
| READ_EXTERNAL_STORAGE | 读取广告缓存 |
| WRITE_EXTERNAL_STORAGE | 写入广告缓存 |
| VIBRATE | 交互反馈振动 |
| AD_ID | Google广告标识符 |`
          }
        ],
        [PolicyType.TERMS]: [
          {
            title: "版本信息",
            content: `《服务协议》
生效日期：2026-01-30
更新日期：2026-01-30
应用名称：奖励账本
开发者/运营者：${DEVELOPER_COMPANY_ZH}
联系方式：${DEVELOPER_EMAIL}`
          },
          {
            title: "一、协议说明",
            content: "本协议是你与我们之间就你使用【奖励账本】提供的产品与服务所订立的协议，具有法律效力。你在首次启动时点击'同意并继续'或以其他方式实际使用本应用，即视为你已阅读并同意本协议及《隐私政策》。"
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
