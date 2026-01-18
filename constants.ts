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
    name: "奖励账本",
    description: "用于任务记录、积分/奖励统计与展示的工具，支持游客模式与账号登录。",
    lastUpdated: "Jan 18, 2026",
    policies: {
      en: {
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
        ],
        [PolicyType.TERMS]: [
          {
            title: "Version Info",
            content: `Service Agreement
Effective Date: 2026-01-18
Updated Date: 2026-01-18
App Name: Award Account
Developer/Operator: ${DEVELOPER_NAME}
Contact: ${DEVELOPER_EMAIL}`
          },
          {
            title: "1. Agreement",
            content: "This agreement constitutes a legally binding contract between you and us regarding your use of Award Account. By clicking “Agree and Continue” on first launch or by otherwise using the app, you acknowledge that you have read and agreed to this agreement and the Privacy Policy."
          },
          {
            title: "2. Services",
            content: "The app provides task tracking, points/rewards, statistics display, account login/guest mode, and related features. We may adjust or upgrade services based on operational needs."
          },
          {
            title: "3. Accounts & Rules",
            content: [
              "You may use guest mode or register/login if applicable.",
              "You must ensure submitted information is true, lawful, and valid; you bear the consequences of false information.",
              "You are responsible for safeguarding your account and password (if applicable)."
            ]
          },
          {
            title: "4. User Conduct",
            content: [
              "No violation of laws, regulations, or public order and good morals.",
              "No infringement of others' lawful rights.",
              "No interference with normal operation or malicious attacks."
            ]
          },
          {
            title: "5. Privacy & Data",
            content: "We value your personal information protection. Details are described in the Privacy Policy. Before you agree to the Privacy Policy, we will not collect or use your personal information in violation of applicable laws or store rules; if you disagree, you will not be able to enter the app and will exit. If third-party SDKs are involved, we will disclose their names, purposes, and possible collected information in the Privacy Policy."
          },
          {
            title: "6. Intellectual Property",
            content: "All app-related programs, interfaces, graphics, and text (excluding user-generated/uploaded content) belong to us or relevant rights holders. You may not copy, decompile, reverse engineer, or use them for commercial purposes without permission."
          },
          {
            title: "7. Disclaimer & Liability",
            content: "We are not liable, to the extent permitted by law, for interruptions, delays, or data loss caused by network, device, system versions, or force majeure. We strive to ensure stability and security but do not guarantee uninterrupted service."
          },
          {
            title: "8. Changes & Termination",
            content: "We may update this agreement due to business changes. Material changes will be notified via pop-up or page. If you disagree, you should stop using and uninstall; continued use means acceptance."
          },
          {
            title: "9. Governing Law & Disputes",
            content: "This agreement is governed by the laws of the People's Republic of China. Disputes should be resolved through negotiation; otherwise, submitted to the court with jurisdiction where the developer is located."
          }
        ]
      },
      zh: {
        [PolicyType.PRIVACY]: [
          {
            title: "一、引言",
            content: "本隐私政策适用于“奖励账本”（以下简称“本应用”）。我们尊重并承诺保护你的隐私。本应用为本地优先工具，核心业务逻辑离线运行，你的个人输入数据保存在设备本地。"
          },
          {
            title: "二、我们收集的数据",
            content: "作为本应用开发者，我们不会收集、存储或传输你的个人数据至我们的服务器。你在应用内输入的数据（如记录、设置等）仅保存在设备本地存储中。"
          },
          {
            title: "三、第三方库与框架（Uni-app）",
            content: `虽然业务逻辑不上传数据，本应用基于 DCloud 的 uni-app 框架构建。该框架可能为了稳定性与统计分析收集部分非个人识别技术信息。

依据 DCloud 隐私说明，可能收集：
- 设备信息：设备型号、系统版本、Android ID（用于统计设备唯一性）
- 日志信息：应用崩溃与诊断日志

此类数据由 DCloud 处理并受其隐私政策约束，我们已尽可能减少该收集。`
          },
          {
            title: "四、权限",
            content: [
              "存储/媒体：用于将数据文件保存在设备本地。",
              "网络访问：框架统计模块与检查更新可能使用网络，即便用户数据不上传。"
            ]
          },
          {
            title: "五、数据安全",
            content: "由于数据保存在本地，你需自行备份设备。卸载应用可能导致应用目录内数据永久丢失。"
          },
          {
            title: "六、政策变更",
            content: "我们可能不时更新隐私政策。建议你定期查看更新，变更发布后即刻生效。"
          },
          {
            title: "七、联系我们",
            content: `如对隐私政策有任何问题或建议，请通过 ${DEVELOPER_EMAIL} 联系我们。`
          }
        ],
        [PolicyType.TERMS]: [
          {
            title: "版本信息",
            content: `《服务协议》
生效日期：2026-01-18
更新日期：2026-01-18
应用名称：奖励账本
开发者/运营者：${DEVELOPER_NAME}
联系方式：${DEVELOPER_EMAIL}`
          },
          {
            title: "一、协议说明",
            content: "本协议是你与我们之间就你使用【奖励账本】提供的产品与服务所订立的协议，具有法律效力。你在首次启动时点击“同意并继续”或以其他方式实际使用本应用，即视为你已阅读并同意本协议及《隐私政策》。"
          },
          {
            title: "二、服务内容",
            content: "本应用为用户提供任务记录、积分/奖励、统计展示、账号登录/游客模式等功能。我们可能基于产品运营需要对服务内容进行调整或升级。"
          },
          {
            title: "三、账号与使用规则",
            content: [
              "你可以使用游客模式进入，也可以注册/登录账号（如适用）。",
              "你应保证提交信息真实、合法、有效；因信息不真实导致的后果由你承担。",
              "你应妥善保管账号及密码（如适用），因你自身原因导致的账号损失由你承担。"
            ]
          },
          {
            title: "四、用户行为规范",
            content: [
              "不得违反法律法规或公序良俗。",
              "不得侵害他人合法权益。",
              "不得干扰或破坏应用正常运行、进行恶意攻击等。"
            ]
          },
          {
            title: "五、隐私与数据",
            content: "我们重视你的个人信息保护，具体规则见《隐私政策》。在你同意《隐私政策》前，我们不会以违反适用法律法规或应用商店规则的方式收集或使用你的个人信息；不同意则你将无法进入应用并会退出。如功能涉及第三方 SDK，我们会在《隐私政策》中披露第三方名称、用途及其可能收集的信息。"
          },
          {
            title: "六、知识产权",
            content: "本应用相关的程序、界面、图形、文字等内容（除用户自行生成/上传内容外）均归我们或相关权利人所有。未经许可，你不得复制、反编译、逆向工程或用于商业用途。"
          },
          {
            title: "七、免责声明与责任限制",
            content: "因网络、设备、系统版本、不可抗力等原因导致服务中断、延迟或数据丢失，我们在法律允许范围内免于承担责任。我们会尽力保障服务稳定与数据安全，但不对服务绝对不中断作保证。"
          },
          {
            title: "八、协议变更与终止",
            content: "我们可能根据业务变化更新本协议。重大变更会以弹窗/页面方式提示。若你不同意更新内容，应立即停止使用并卸载应用；你继续使用视为接受更新。"
          },
          {
            title: "九、法律适用与争议解决",
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