---
title: 2026 阅读 App 怎么选？WebNR、Legado、Thorium、KOReader、FBReader 与 calibre 实用对比
date: 2026-08-14
slug: reading-app-comparison
description: 从本地 TXT、EPUB/PDF、电子墨水屏、OPDS 公共目录、Legado 书源与浏览器阅读六种真实场景，对比 WebNR、Legado、Thorium Reader、KOReader、FBReader 和 calibre。
categories:
  - Reader guides
  - Reading apps
  - Compatibility
---

# 2026 阅读 App 怎么选？WebNR、Legado、Thorium、KOReader、FBReader 与 calibre 实用对比

**先给结论：没有一个阅读器在所有场景都最好。** 选阅读 App 最省时间的方法，不是先比较主题数量和翻页动画，而是先回答一个问题：**你的书现在在哪里，接下来希望它怎么进入阅读器？**

如果书主要是本地 TXT，又希望手机、平板和电脑都能直接用浏览器打开，WebNR 是最短路径；如果你在 Android 上依赖自定义书源与网络小说规则，Legado 仍然是更成熟的规则型工具；如果书库以 EPUB、公共图书馆和 OPDS 为中心，Thorium Reader 更像标准化电子书阅读器；如果主力设备是 Kindle、Kobo、PocketBook、reMarkable 等电子墨水屏，KOReader 的设备和格式覆盖更有优势；如果你想要一个跨平台本地文件阅读器，同时连接 OPDS，FBReader 更直接；如果你真正要管理、转换、整理并向其他设备提供一整套个人书库，calibre 更接近“书库基础设施”而不是单纯阅读 App。

本文核验日期为 **2026 年 8 月 14 日**。比较只使用各项目当前公开文档、官方仓库与 WebNR 自己可重复验证的生产能力，不把第三方书源包、盗版聚合站或“某个链接碰巧还能打开”当作产品能力。

## 一张表先决定方向

| 选择 | 最适合的场景 | 本地文件 | 公共目录 / OPDS | 网络小说规则 | 跨设备方式 | 最需要注意的边界 |
| --- | --- | --- | --- | --- | --- | --- |
| **WebNR** | 浏览器 / PWA、本地 TXT、轻量书架 | 当前正式支持 TXT | WebNR 自有审核来源目录；不是通用 OPDS 客户端 | 正在做 clean-room Legado 兼容，尚非完整 runtime | 同一浏览器配置中的本地书架；不同设备不等于自动同步 | EPUB/PDF/MOBI 尚未支持，完整备份恢复也还未完成 |
| **Legado** | Android、自定义书源、网络小说 | 官方文档示例包含 TXT、EPUB | 重点不是 OPDS，而是自定义书源 | **强项**：本地/网络导入书源并按规则检索内容 | Android 本机工作流为核心 | 书源是否合法可用取决于具体来源；不要把“能导入规则”理解成获得内容授权 |
| **Thorium Reader** | 桌面 EPUB、图书馆、无障碍阅读 | EPUB、DAISY、PDF、Audiobooks、Divina 等 | **支持 OPDS 1/2**，也支持 LCP 场景 | 不以网页抓取规则为目标 | Windows/macOS/Linux 本地书库 | 更适合标准电子出版物，不是网络小说抓取器 |
| **KOReader** | 电子墨水屏、多格式本地阅读 | EPUB、PDF、DjVu、FB2、Mobi、DOC、RTF、HTML、TXT、CBZ 等 | 可添加 OPDS 目录 | 不以 Legado 规则为目标 | 多种 e-ink 设备、Android、Linux；有 KOReader 进度同步能力 | 桌面体验不是它的第一设计目标，优势主要在 e-ink 与本地文件 |
| **FBReader** | 跨平台本地电子书 + OPDS | EPUB、FB2、MOBI、HTML、RTF、TXT 等，具体格式随平台略有差异 | Android/Windows/macOS/Linux 支持 OPDS；官方称 iOS 目前尚未支持 | 不以网页抓取规则为目标 | iOS/Android/Windows/macOS/Linux/ChromeOS 等 | 平台功能并不完全一致；部分能力和版本需要逐平台确认 |
| **calibre** | 管理、转换、整理、浏览器分发个人书库 | 输入/输出格式覆盖很广 | 核心优势是自己的书库与 Content server，而不是把它当网络小说源引擎 | 不以 Legado 规则为目标 | 桌面管理 + Content server 浏览器访问 | 功能最全面，也最“重”；需要一台运行 calibre 的主机才能发挥服务器价值 |

这张表最重要的一列其实是“最需要注意的边界”。阅读器选择经常出错，是因为把**文件阅读、书库管理、目录发现、内容抓取、设备同步**五件不同的事混成了“能不能看书”。

## 1. WebNR：本地 TXT + 浏览器，是它今天最清晰的优势

WebNR 当前真正稳定的入口很简单：打开 [WebNR 阅读器](https://app.webnovel.win/)，导入本地 `.txt`，或者导入一个允许浏览器跨域读取的 HTTP/HTTPS 文本 URL。书籍与阅读进度保存在当前浏览器配置的 IndexedDB 中，应用可以安装成 PWA，支持滚动/分页、书签、排版、深色模式与 TTS。

这让它特别适合一种经常被大型电子书软件忽略的场景：**你已经有自己的 TXT，只想立刻开始读，并且不想为了打开一个文本文件先维护桌面书库服务器。** 在公共电脑之外的个人浏览器里，它的使用成本接近“打开网页—选文件—读”。

但 WebNR 现在的格式边界也必须写得很明确。项目的 [TXT 导入排障文档](../../troubleshooting/txt-import.md) 明确记录：**EPUB、PDF、MOBI 等容器格式目前尚未支持。** 把 `book.epub` 改名成 `book.txt` 不会变成文本文件。项目也尚未把完整备份/恢复做成成熟能力，因此重要书籍仍应保留原始文件，不能把浏览器本地存储当作唯一副本。

WebNR 的另一个方向是来源发现。它已经维护多组经过审核的 discovery source，包括 Project Gutenberg、Global Grey、The Online Books Page 等；这些目录的目标是把读者带到稳定、权利边界清晰的来源页，而不是建立一个公共代理替读者绕过 CORS、登录、付费、robots 或 DRM。

如果你来自 Legado，建议同时看 [WebNR 给 Legado 用户的网页端替代说明](./2026-08-09-webnr-legado-web-alternative.md)。WebNR 正在用公开文档和版本化 fixtures 逐步兼容 Legado 数据与规则，但今天还不能把任意 Legado JSON 当成完整 drop-in runtime 执行。

**适合选 WebNR：** 已有 TXT；重视浏览器/PWA；不想安装桌面程序；愿意让书架默认留在浏览器本地；希望使用经过项目审核的来源目录。

**不适合把 WebNR 当首选：** EPUB/PDF 是主力格式；需要跨设备云同步；需要完整 Legado JavaScript/WebView 规则；需要大规模个人书库转换与元数据整理。

## 2. Legado：Android 上的自定义书源与规则，仍然是另一类产品

Legado（开源阅读）的官方入门文档把使用路径分成两大类：**从本地添加小说**和**导入书源**。文档示例的 `Read` 文件夹同时出现 TXT、EPUB 和书源 JSON；书源既可以从本地文件导入，也可以从网络地址导入。官方说明把书源定义为一套从网络内容中提取搜索、章节和正文并呈现给阅读器的规则。

这说明 Legado 与 Thorium、FBReader 的核心差别并不只是“Android vs 桌面”。它首先是一个**可编程来源阅读器**。对网络连载小说读者来说，书从哪里来、页面怎样解析、目录怎样分页，往往比 EPUB 排版规范本身更重要。

截至本次核验，活跃的 [`LegadoTeam/legado`](https://github.com/LegadoTeam/legado) 仓库仍将项目描述为免费的 Android 开源小说阅读器；旧的 `gedoor.github.io` 官方文档仍可用于理解本地导入和书源数据模型。由于项目历史仓库和分发路径近年发生过变化，本文只讨论这些公开能力，不推荐任何第三方书源集合。

这里有一个必须单独强调的边界：**“阅读器支持导入书源”不等于“某个书源中的目标内容可以合法抓取、缓存或再分发”。** 书源规则只是技术描述；目标站点的版权、授权、robots、登录、付费和访问政策仍然独立存在。WebNR 做 Legado 兼容时也因此把规则兼容与官方来源目录审核分开处理。

**适合选 Legado：** Android 是主设备；日常阅读依赖自定义规则；希望自己管理来源；本地 TXT/EPUB 与网络小说都在同一套工作流里。

**不适合把 Legado 当首选：** 主要设备是桌面或 iOS；只需要标准 EPUB/PDF；希望开箱即用地连接公共图书馆 OPDS；不想理解或维护来源规则。

参考：[Legado 入门](https://gedoor.github.io/docs/GettingStarted)、[导入书源](https://gedoor.github.io/docs/get-started-quickly/add-sources)。

## 3. Thorium Reader：桌面 EPUB、OPDS、公共图书馆和无障碍阅读的稳妥选择

如果你的“书”本来就是标准电子出版物，Thorium Reader 的问题定义更贴近需求。EDRLab 当前的 Thorium 3 文档列出 EPUB 2/3、DAISY、PDF、打包 Audiobook 和 Divina 等格式；Thorium 还支持 Readium LCP，并把无障碍阅读作为核心能力之一。

更关键的是公共目录。Thorium 的官方文档明确支持 **OPDS 1 与 OPDS 2**：在 `Catalogs` 中添加 OPDS feed 后，可以浏览图书馆或书店目录；当 feed 提供相应能力时，还可以完成认证、借阅/购买后的下载。EDRLab 同时明确提醒，OPDS feed 中内容与信息由 feed 发布者负责。

截至 2026 年 8 月 14 日，Thorium 官网提供 **Thorium 3.4.0**，覆盖 Windows、macOS 与 Linux。它不是 Web 应用，但对于“我有一堆 EPUB”“学校/图书馆给我一个 OPDS”“我需要屏幕阅读器与更强无障碍支持”这类需求，它比把这些能力硬塞进网络小说阅读器更自然。

Thorium 的 library 也支持把出版物导入自己的应用存储，并提供保存书籍文件副本的操作。因此它更像一个标准电子出版物阅读终端，而不是网页抓取器或个人格式转换流水线。

**适合选 Thorium：** 桌面 EPUB/PDF；公共图书馆；OPDS；LCP；无障碍与键盘阅读；希望阅读器遵循开放出版标准。

**不适合把 Thorium 当首选：** Android 网络小说规则；电子墨水设备深度优化；需要批量转换/清洗个人书库。

参考：[Thorium 3](https://thorium.edrlab.org/en/th3/)、[支持格式](https://thorium.edrlab.org/en/th3/400_resources/406_formats/)、[OPDS 目录说明](https://thorium.edrlab.org/en/docs/220_organizing/222_catalogs/)。

## 4. KOReader：如果你真正关心的是 Kindle、Kobo、PocketBook 和 reMarkable

KOReader 的 README 对自己的定位非常直接：**primarily aimed at e-ink readers**。它运行在 Cervantes、Kindle、Kobo、PocketBook、reMarkable、Android 和 Linux 上；支持 PDF、DjVu、CBT/CBZ 等固定版面格式，也支持 EPUB、FB2、Mobi、DOC、RTF、HTML、CHM、TXT 等可重排格式。

这意味着它与 WebNR 的竞争并不发生在“谁的网页更方便”，而发生在另一个坐标轴：**谁能把本地文件在电子墨水屏上读得更舒服。** KOReader 对 PDF 重排、字体排版和 e-ink 设备的长期优化，是浏览器 PWA 很难用一套通用 UI 复制的。

当前 KOReader 用户指南也包含 **OPDS catalog**，项目文档明确提到可以添加自己的在线 OPDS 目录；同时支持在 KOReader 设备之间同步阅读进度。因此，如果你一边从公共目录取书，一边在多台兼容 e-ink 设备上阅读，KOReader 是很值得优先试的工具。

它的文件工作流还有一个天然优点：书本来就作为文件存在于设备文件系统中，不需要为了“导出原书”先从浏览器私有数据库恢复。代价则是设备安装、目录管理和不同厂商 e-ink 环境本身更复杂。

**适合选 KOReader：** Kindle/Kobo/PocketBook/reMarkable；PDF/DjVu；大量本地电子书；想要 OPDS 与 e-ink 深度优化。

**不适合把 KOReader 当首选：** 只想点击一个网址立刻读 TXT；需要 Legado 规则；希望用桌面 GUI 管理和转换数万本书。

参考：[KOReader 官网](https://koreader.rocks/)、[当前 README](https://github.com/koreader/koreader)、[用户指南](https://koreader.rocks/user_guide/zh_Hans.html)。

## 5. FBReader：跨平台本地阅读 + OPDS，比“全能书库管理”更轻

FBReader 的优势是传统而清楚的：在多个桌面与移动平台上打开常见电子书格式。官方当前页面列出 iOS、Android、Windows、macOS、Linux 和 ChromeOS；格式包括 EPUB、FB2、MOBI、HTML、RTF、纯文本等，但不同平台并非完全一致，因此下载前最好查看对应平台的格式表。

它在“公共目录”这一项也比很多普通阅读器明确：官方 **Where to get books** 页面写明 Android、Windows、macOS 和 Linux 支持 OPDS 在线目录与商店；**iOS 当前不支持 OPDS，官方称未来版本计划加入。** 这类平台差异非常值得在选择前看清楚，因为一句“FBReader 支持 OPDS”如果不附平台条件就会误导 iPhone/iPad 用户。

和 calibre 相比，FBReader 更偏“把书拿来读”，而不是“把几万本书做格式转换、元数据清洗、服务器分发”。和 Thorium 相比，它的平台范围更广，但 Thorium 在桌面开放出版标准、LCP 与无障碍定位上更集中。

**适合选 FBReader：** 想在多个主流平台使用相似阅读器；本地 EPUB/FB2/MOBI/TXT 为主；Android/桌面需要 OPDS。

**不适合把 FBReader 当首选：** iOS 必须使用 OPDS；需要 e-ink 厂商设备深度适配；依赖网络小说抓取规则；需要大型书库转换流水线。

参考：[FBReader 官网](https://fbreader.org/en)、[格式支持](https://fbreader.org/en/book-formats)、[OPDS / 获取图书](https://fbreader.org/book-sources)。

## 6. calibre：当“阅读 App”已经变成“我的个人数字图书馆”

calibre 经常被放进“阅读器排行榜”，但这会低估它真正擅长的事情。当前 **calibre 9.11.0** 文档把它定义成一整套电子书管理环境：书库、元数据、转换、编辑、查看、设备传输与 Content server 都在同一个系统里。

它支持非常广的输入和输出格式。官方 FAQ 当前列出的输入格式包括 EPUB、AZW/AZW3、CBZ/CBR、DOCX、FB2、HTML、MOBI、PDF、RTF、TXT 等，输出也覆盖 EPUB、AZW3、DOCX、FB2、KEPUB、PDF、TXT 等。这里的价值不只是“能打开”，而是**可以把个人书库变成可整理、可转换的资产**。

calibre 的 Content server 又把它带回浏览器：在运行 calibre 的电脑上启动服务器后，手机、平板或另一台电脑可以通过浏览器浏览书库并直接阅读；当前文档还说明浏览器阅读器可以缓存书籍以便离线，并在同一服务器用户场景下记录/同步阅读位置。

因此，calibre 很适合充当 WebNR、KOReader、FBReader 等前面的“仓库与加工层”。例如你可以用 calibre 管理原始 EPUB 和元数据，再把适合目标设备的文件发送给 e-ink 阅读器；这与 WebNR“本地 TXT 立即进浏览器书架”的轻量路线并不冲突。

**适合选 calibre：** 书很多；需要批量元数据、转换和整理；想自己运行个人内容服务器；愿意维护一台桌面主机作为书库中心。

**不适合把 calibre 当首选：** 只想在手机上读一本 TXT；不希望运行桌面程序；核心需求是 Legado 自定义抓取规则。

参考：[calibre 9.11.0 用户手册](https://manual.calibre-ebook.com/)、[E-book viewer](https://manual.calibre-ebook.com/viewer.html)、[Content server](https://manual.calibre-ebook.com/server.html)、[格式 FAQ](https://manual.calibre-ebook.com/faq.html)。

## 导入、导出与公共目录：别只看“支持格式”三个字

实际迁移时，最容易踩坑的是“支持 EPUB”“支持 OPDS”这类标签过于粗糙。更有用的是把能力拆成四层。

### 第一层：你的原始文件能不能直接进去

- WebNR：当前正式路径是本地 TXT 和允许 CORS 的远程文本。
- Legado：官方入门覆盖本地 TXT/EPUB，并支持书源 JSON。
- Thorium：面向 EPUB/DAISY/PDF/标准 Audiobook/Divina 等出版物。
- KOReader：本地格式覆盖非常广，尤其适合 e-ink 常见 EPUB/PDF/DjVu。
- FBReader：主流文本型电子书格式覆盖广，但应按平台查表。
- calibre：格式覆盖和转换能力最强，但需要桌面书库工作流。

### 第二层：书是继续作为普通文件存在，还是进入应用私有书库

这是备份策略的分水岭。KOReader/传统文件阅读器的原书往往仍是文件系统中的文件；Thorium 会把导入出版物纳入自己的 library，并提供保存副本操作；WebNR 把导入文本写入浏览器 IndexedDB，因此在完整备份恢复功能上线前，原始 TXT 必须另外保存。calibre 则本身就是书库管理器，应该把它的书库备份视为正式数据管理问题。

### 第三层：你需要的是“目录”还是“抓取规则”

OPDS 是一个目录与获取标准；Legado 书源则可以描述网页搜索、详情、目录和正文提取。两者解决的问题不同。

- Thorium、KOReader、FBReader 更自然地连接 OPDS。
- Legado 的核心是自定义来源规则。
- WebNR 当前维护自己的审核型 discovery sources，并在独立推进 Legado clean-room 兼容；它现在不是通用 OPDS 客户端。
- calibre 的优势主要是组织和提供你自己的书库，不能用来替代一个经过授权审计的网络内容来源。

### 第四层：所谓“同步”到底同步什么

“支持同步”可能只同步阅读进度，也可能同步书籍文件、标注或整个书库。不要把它们当成同一个能力。WebNR 当前的本地浏览器书架不是跨设备云书库；KOReader 文档提供自己的进度同步；calibre Content server 可以让多个浏览器访问同一主机书库；其他阅读器则各有自己的账号或平台方案。真正迁移大量书之前，应该用一本测试书验证**原文件、书签、标注、阅读位置**四项分别能否迁移。

## 如果你只想要一个选择流程

可以按下面的顺序判断：

1. **主要内容是自己已有的 TXT，而且想直接用浏览器？** 先试 WebNR。
2. **主要内容依赖 Android 上的自定义网络小说规则？** 选 Legado；只使用你有权访问的来源。
3. **主要是桌面 EPUB、公共图书馆、OPDS 或无障碍阅读？** 先试 Thorium。
4. **主力设备是 Kindle/Kobo/PocketBook/reMarkable，或 PDF 很多？** 先试 KOReader。
5. **希望 iOS/Android/桌面都有传统电子书阅读器，并在 Android/桌面用 OPDS？** 看 FBReader，同时记住 iOS 的 OPDS 差异。
6. **书库已经大到需要清洗元数据、批量转换、家庭网络分发？** 用 calibre 做中心，再决定终端阅读器。

如果你的答案同时命中两三项，也完全正常。现实中更稳定的组合往往不是“一个 App 包办所有事情”，而是**calibre 管书库 + KOReader/FBReader/Thorium 读标准电子书 + WebNR 处理浏览器 TXT + Legado 处理经过授权的规则型网络来源**。

## WebNR 接下来最值得补的不是“更多排行榜功能”

这次对比也反过来给 WebNR 一个很明确的产品优先级。与成熟桌面/e-ink 阅读器正面比拼 EPUB、PDF 和格式数量并没有意义；WebNR 更应该把自己的浏览器优势做深，同时降低从其他生态迁移过来的成本。

当前最值得持续推进的四件事是：

- **真实 EPUB 支持**，而不是把容器改名成 TXT；
- **可验证的备份与恢复**，让浏览器书架可以安全迁移；
- **Legado clean-room compatibility fixtures**，把“哪些规则能跑”变成 CI 可以回答的问题；
- **更多经过授权与机器访问审计的公共来源目录**，把发现能力建立在来源质量而不是抓取数量上。

WebNR 已经把真实 Chromium 桌面/移动阅读旅程、来源输出验证和生产构建身份纳入 CI。后续每一种新导入能力也应该继续遵守同一个原则：先有可重复测试，再把“支持”写进公开页面。

如果你还没决定，可以先从最小实验开始：拿同一本你有权使用的 TXT 或 EPUB，在两个候选阅读器里各读十分钟。真正影响长期体验的，往往不是功能列表最长的那一项，而是**你的书能否稳定进去、是否容易备份、换设备时能否出来、公共目录是否可验证、以及阅读器有没有替你制造新的数据依赖。**

## 本文核验的主要官方资料

- WebNR：[TXT 导入排障](../../troubleshooting/txt-import.md)、[Legado 网页端替代说明](./2026-08-09-webnr-legado-web-alternative.md)、[来源定义](../../source/index.md)
- Legado：[官方入门](https://gedoor.github.io/docs/GettingStarted)、[书源导入](https://gedoor.github.io/docs/get-started-quickly/add-sources)、[`LegadoTeam/legado`](https://github.com/LegadoTeam/legado)
- Thorium Reader：[Thorium 3](https://thorium.edrlab.org/en/th3/)、[支持格式](https://thorium.edrlab.org/en/th3/400_resources/406_formats/)、[OPDS 目录](https://thorium.edrlab.org/en/docs/220_organizing/222_catalogs/)
- KOReader：[官网](https://koreader.rocks/)、[README](https://github.com/koreader/koreader)、[用户指南](https://koreader.rocks/user_guide/zh_Hans.html)
- FBReader：[官网](https://fbreader.org/en)、[格式支持](https://fbreader.org/en/book-formats)、[OPDS / Where to get books](https://fbreader.org/book-sources)
- calibre：[9.11.0 用户手册](https://manual.calibre-ebook.com/)、[E-book viewer](https://manual.calibre-ebook.com/viewer.html)、[Content server](https://manual.calibre-ebook.com/server.html)、[格式 FAQ](https://manual.calibre-ebook.com/faq.html)

相关 WebNR 阅读指南：[合法免费 TXT 与经典小说来源](./2026-08-08-legal-free-novels-txt-collections.md)、[英文连载小说平台怎么选](./2026-08-10-english-serial-fiction-platforms.md)、[公开读者社区与推荐渠道地图](./2026-08-12-web-novel-reader-communities.md)。
