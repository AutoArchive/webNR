---
title: WebNR：给 Legado 用户的一个独立网页端替代选择
date: 2026-08-09
slug: webnr-legado-web-alternative
description: 介绍 WebNR 为什么可以作为 Legado 用户的独立网页端替代选择、当前已经能做什么、还缺什么，以及浏览器端与 Android 端在书源和阅读体验上的差异。
categories:
  - Reader guides
  - Legado
  - WebNR
---

# WebNR：给 Legado 用户的一个独立网页端替代选择

**直接答案：** 如果你喜欢 Legado 的“自己决定内容来源、自己管理书架、阅读器只负责把内容整理成可读体验”这一思路，但希望直接在电脑、平板或手机浏览器里打开，不依赖 Android App 常驻，WebNR 可以作为一个**独立的网页端替代选择**。它不是 Legado 官方网页端，也不与 Legado 项目存在隶属关系；WebNR 采用自己的浏览器架构，并逐步用独立测试样本兼容常见的 Legado 数据与规则行为。

本文核验日期为 **2026 年 8 月 9 日**。当前 WebNR 已经可以在浏览器中导入本地 TXT、导入允许跨域访问的文本 URL、安装为 PWA、保存本地书架与阅读进度、使用翻页或滚动阅读、书签、排版和文字转语音，并连接 WebNR 自有书源目录。任意 Legado 书源 JSON 目前还不能直接作为完整的 drop-in runtime 执行，因此“网页端替代”描述的是一组正在扩大的真实使用场景，而不是对全部 Legado 功能的一比一复刻。

[直接打开 WebNR 阅读器](https://app.webnovel.win/){ .md-button .md-button--primary }

## 为什么会需要一个真正独立的网页端

Legado 的核心使用方式长期围绕 Android 客户端展开。官方入门文档仍然从 Android 安装、本地文件访问和书源导入开始；书源可以从本地文件或网络地址导入，规则负责把第三方页面中的搜索、书籍信息、目录和正文转换成阅读器可以展示的内容。[Legado 入门文档](https://gedoor.github.io/docs/GettingStarted) 与 [书源导入文档](https://gedoor.github.io/docs/get-started-quickly/add-sources) 都体现了这套模型。

Legado 也存在配套的 Web 端书架项目，但它的公开说明要求手机和电脑位于同一局域网，并由手机端开启 Web 服务；网页本身更像 Android 阅读器的远程界面。[`gedoor/legado_web_bookshelf`](https://github.com/gedoor/legado_web_bookshelf) 的 README 明确写出了这一依赖关系。

WebNR 选择的是另一条路线：**浏览器本身就是阅读器运行时。** 读者打开 `app.webnovel.win` 后，书籍正文、书架与阅读进度直接保存在当前浏览器配置中。日常阅读不要求另一台 Android 设备提供后台服务，也没有“手机端开着，电脑端才能读”的拓扑。

这也是“网页端替代”这句话真正想表达的东西：把 Legado 用户熟悉的“本地书架 + 可配置来源 + 独立阅读器”体验迁移到一个浏览器原生环境，而不是给 Android App 做一个遥控面板。

## 今天打开 WebNR，可以完成哪些 Legado 式任务

### 1. 本地文件直接进入书架

WebNR 当前正式支持 TXT。本地文件在浏览器内读取、解码并写入 IndexedDB；UTF-8 之外，现有导入路径也会处理 GB18030、Big5 等常见旧编码。文件导入完成后直接进入阅读器，不需要上传到 WebNR 内容服务器。

对于已经把小说整理成 TXT 的 Legado 用户，这条路径最简单：选择文件，开始阅读，之后重新打开浏览器仍能在本地书架看到它。

### 2. 从 URL 导入文本

如果一个 HTTP/HTTPS 地址直接提供文本，并且服务器允许浏览器跨域访问，WebNR 可以从 URL 导入。浏览器 CORS 是这里最重要的边界：Android 原生应用可以主动请求很多网站，网页则必须遵守服务器返回的跨域权限。

因此同一个文本地址在 Android 客户端里可以访问，在网页里仍可能被浏览器拒绝。WebNR 把这种情况视为明确的运行环境差异，而不是通过公共代理替用户绕开目标网站的访问策略。

### 3. 连接 WebNR 书源目录

WebNR 已经有自己的 source/repository 目录格式，并已接入项目自建示例、青空文库 starter、Standard Ebooks starter 等经过项目审核的来源。它们可以用于发现作品、查看目录信息并进入后续导入流程。

这一层与 Legado “书源”概念的目的相近：阅读器与内容来源分离。区别在于 WebNR 当前运行的是自己的目录格式，而 Legado 使用更丰富的规则体系描述搜索、详情、目录和正文抓取。

### 4. PWA、书架和阅读进度

WebNR 可以安装为 PWA。应用外壳支持离线再次打开，书籍正文和进度保存在浏览器本地。阅读界面目前包含滚动和分页模式、字号等排版设置、深色模式、书签和文字转语音。

这部分是 WebNR 最适合独立网页运行的区域：浏览器、PWA、IndexedDB 和 Service Worker 共同承担传统桌面/移动阅读器的一部分职责。

## 它和 Legado 现在最大的差距在哪里

最大的差距不是“网页有没有书架”，而是**规则运行时**。

Legado 的价值很大一部分来自高度灵活的自定义书源：规则可以描述搜索、书籍详情、目录、正文、分页、替换净化、headers、charset、变量、Cookie，以及更复杂的脚本或 WebView 行为。官方书源文档把书源理解为一套从第三方网络内容中提取并整理阅读内容的规则。[Legado 书源导入说明](https://gedoor.github.io/docs/get-started-quickly/add-sources) 可以作为最基础的入口。

WebNR 今天还没有把任意 Legado JSON 直接交给浏览器执行。这里必须分阶段做，因为网页环境同时存在三类约束：

- 浏览器 CORS 与跨域安全模型；
- Cookie、登录态、动态脚本和 WebView 能力差异；
- 任意第三方规则执行带来的权限与安全风险。

因此 WebNR 的兼容路线采用 capability level 和 versioned fixtures，而不是一句“支持 Legado”覆盖所有情况。

当前规划顺序是：

1. **JSON 导入与检查。** 识别字段、保留未知字段，告诉读者哪些可以解释、哪些会忽略、哪些需要更高能力。
2. **常见声明式规则。** 覆盖 search、book info、TOC、content、pagination，以及 CSS、XPath、JSONPath、正则、headers、charset 和 replacement。
3. **受控状态。** 支持明确域名与权限范围内的变量、Cookie 和有限状态。
4. **受限脚本。** 必要 JavaScript 放入有限时间、内存和能力的隔离环境。
5. **Bridge/WebView。** 把普通浏览器无法安全完成的动态页面、复杂登录和 WebView 行为交给可选本地 Bridge，而不是建设一个中心化公共代理。

这个顺序的目标是让现有 Legado 定义尽量少改甚至不改就能进入 WebNR，同时保持浏览器端的权限边界可解释、可测试。

## 为什么不直接复制 Legado 的 Web 端

现有 Legado Web 书架与 WebNR 解决的是不同问题。前者公开说明自己是“阅读3.0”的配套 Web 端，需要连接手机端服务；WebNR 则希望网站本身可以独立运行。

独立运行意味着数据模型、存储、跨域请求、脚本能力、PWA、部署、安全策略和测试方式都需要重新设计。WebNR 因此采用 clean-room 兼容：依据公开文档、公开格式以及项目自建 fixtures 实现行为，不复制 Legado 客户端代码来建立一个换壳版本。

这也让两个项目可以保持清晰关系：Legado 是 Legado，WebNR 是 WebNR；两者在“自定义来源 + 阅读器”的用户需求上有交集，WebNR 争取让迁移成本越来越低。

## 2026 年还多了一层现实背景

截至本文核验日期，`gedoor/legado` 的 GitHub 主仓库公开页面只保留了一份公告，项目内容已经移除，公告同时强调停止侵权相关行为。[当前官方 GitHub 仓库](https://github.com/gedoor/legado) 可以直接看到这一状态。

这让“兼容 Legado”的边界更需要写清楚。WebNR 不恢复已经删除的代码或内容，也不把来源规则的公开可下载等同于目标站点内容获得授权。WebNR 的官方来源目录优先接入公版、自有、明确授权或具有清晰开放访问条件的内容；第三方 Legado 定义可以用于兼容研究和隔离测试，但进入推荐目录需要另外完成目标站条款、robots、访问要求和健康审计。

因此“Legado 网页端替代”描述的是用户体验方向和兼容目标，不是对原项目内容的镜像或延续。

## 哪些人现在就适合用 WebNR

WebNR 当前最适合下面几类 Legado 用户：

- 主要阅读自己已有的 TXT，希望电脑、平板和手机浏览器都能直接打开；
- 希望安装一个 PWA，而不是额外安装桌面程序；
- 想把浏览器作为独立阅读终端，不希望电脑阅读依赖手机端 Web 服务；
- 使用公版、作者授权或自己维护的文本目录；
- 愿意使用 WebNR 当前已经审核通过的来源，同时等待更完整的 Legado JSON 兼容；
- 希望书籍正文和阅读进度默认留在浏览器本地。

如果你的日常阅读高度依赖复杂 Legado 规则、登录 Cookie、动态 WebView 或任意 JavaScript，Android Legado 目前仍覆盖更多场景。WebNR 的目标不是用文案掩盖这段差距，而是逐项把可测试的能力迁移到网页环境。

## 迁移时可以怎么开始

最省事的顺序是：

1. 打开 [WebNR 阅读器](https://app.webnovel.win/)，先导入一份本地 TXT，确认阅读器和浏览器存储正常。
2. 查看 [Legado 书源查找与验源指南](./2026-08-06-legado-source-guide.md)，理解 WebNR 当前的书源目录、安全和授权边界。
3. 试用现有 WebNR sources，确认“发现—导入—阅读”的完整路径。
4. 对你依赖的 Legado JSON 记录具体字段和失败阶段，作为 compatibility fixture 或 issue 提交，而不是只写“这个书源不兼容”。

后续兼容报告会按版本列出支持字段、规则能力、Bridge 要求和 fixture 测试结果。这样一个书源能否迁移，会逐渐变成可以自动验证的问题。

## 浏览器体验必须由真实浏览器测试兜底

WebNR 把“网页端替代”写进公开介绍后，用户体验要求也随之提高。仅仅 `next build` 成功无法证明读者真的能够打开应用、点进导入、选择 TXT、看到正文、返回书架并在刷新后继续看到自己的书。

从这次更新开始，项目把真实 Chromium E2E 加入 Quality CI。测试从生产静态构建启动本地 HTTP server，然后模拟桌面和移动浏览器完成：

- 首次打开与 Legado 辅助定位可见；
- PWA manifest 与 Service Worker 注册；
- 本地 TXT 文件选择、导入和正文渲染；
- 返回书架、刷新页面后 IndexedDB 书架仍然存在；
- 用键盘 Enter 再次打开书籍；
- CORS 允许时的 URL 文本导入；
- 非 TXT 文件与非法 URL 的可恢复错误提示。

这些测试成为后续每个 PR 的持续门禁。换句话说，“作为网页端替代选择”不只是一句介绍，它会对应一条持续运行的浏览器用户旅程。

## WebNR 希望最终做到什么

长期目标可以概括为一句话：**让 Legado 用户熟悉的自定义来源阅读方式，在浏览器里拥有一个真正独立、可安装、可测试的实现。**

WebNR 会继续保持自己的产品边界：网页优先、本地数据、明确权限、来源与内容授权分离、兼容结论由 fixtures 证明。随着 Legado adapter、规则运行时、Bridge 和更多来源接入，网页端能覆盖的阅读场景会逐步扩大。

现阶段最准确的描述因此是：WebNR 已经是一个可以独立使用的浏览器阅读器，也可以作为 **Legado 用户的网页端替代选择**；它正在从 TXT、目录和基础阅读体验出发，逐步扩展到更完整的 Legado-compatible 工作流。

## 参考资料

- [Legado 官方入门文档](https://gedoor.github.io/docs/GettingStarted)
- [Legado 官方书源导入说明](https://gedoor.github.io/docs/get-started-quickly/add-sources)
- [`gedoor/legado_web_bookshelf`：阅读3.0 配套 Web 端](https://github.com/gedoor/legado_web_bookshelf)
- [`gedoor/legado` 当前官方 GitHub 仓库与公告](https://github.com/gedoor/legado)
- [WebNR GitHub 仓库](https://github.com/AutoArchive/webNR)
- [WebNR TXT 导入排障](https://www.webnovel.win/troubleshooting/txt-import/)
