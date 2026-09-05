---
title: 免费经典小说去哪读？Project Gutenberg、Standard Ebooks、Alice & Books、GITenberg 与 WebNR 怎么选
date: 2026-09-05
slug: free-classic-ebook-reading-routes-compared
_description: 2026 年免费经典小说阅读路线实测比较：Project Gutenberg、Standard Ebooks、Alice & Books、GITenberg 与 WebNR 的馆藏定位、格式、账号、版权地域、TXT 导入和适合人群分别有什么差别。
description: 2026 年免费经典小说阅读路线实测比较：Project Gutenberg、Standard Ebooks、Alice & Books、GITenberg 与 WebNR 的馆藏定位、格式、账号、版权地域、TXT 导入和适合人群分别有什么差别。
categories:
  - Reader guides
  - Recommendations
  - Sources
  - WebNR
---

# 免费经典小说去哪读？Project Gutenberg、Standard Ebooks、Alice & Books、GITenberg 与 WebNR 怎么选

先给结论。**如果你只想尽快找到最多的免费经典作品，先去 Project Gutenberg；如果你更在意 EPUB 的排版、校对、语义标记和阅读器体验，优先看 Standard Ebooks；如果你想要一个更小、更直观、无需注册、同时提供 PDF/EPUB/在线阅读的经典书架，可以看 Alice & Books；如果你在意 Git 版本、可复现文件和机器处理，GITenberg 更合适；如果你的目标是把纯文本真正放进浏览器本地阅读，WebNR 当前最顺手的路线仍然是本地 TXT 或已经审计过的 direct-TXT source。**

这五条路线不是“谁取代谁”。它们解决的是不同问题：有的擅长大规模数字化，有的擅长精修电子书，有的擅长视觉发现，有的擅长可复现源文件，而 WebNR 目前更像最后一公里的本地阅读层。把这些角色分清，比只比较“有多少本书”更有用。

本文核验日期为 **2026-09-05**。这里的“免费”不等于“全球无条件公版”。Project Gutenberg、Standard Ebooks、Alice & Books、GITenberg 等第一方页面都以美国公共领域判断为重要基础；一个作品在美国进入公共领域，不代表它在你所在国家或地区一定也是同样状态。下载、分享或再利用前仍应按自己的司法辖区核对版权期限。

[打开 WebNR Reader](https://app.webnovel.win/){ .md-button .md-button--primary }
[查看 WebNR 第一个月来源健康报告](https://www.webnovel.win/blog/2026/09/03/first-month-source-directory-health-report/){ .md-button }

## 一张表先选路线

| 你最在意什么 | 更适合的路线 | 2026-09-05 核验到的特点 | WebNR 里的位置 |
| --- | --- | --- | --- |
| 馆藏广、搜索经典方便 | **Project Gutenberg** | 数万本免费电子书；无需注册；在线读、EPUB、纯文本等多种格式 | 目前主要作为官方发现入口；部分作品可通过其他经过审计的 TXT 路线进入 WebNR |
| 排版、校对、现代 EPUB 体验 | **Standard Ebooks** | 公版作品重新校对、排版、做语义标记；项目自己的电子书工作也放入公共领域 | WebNR 保留官方作品发现入口；当前 WebNR 不把 EPUB 假装成 TXT 直接解析 |
| 想快速浏览漂亮的 PDF/EPUB | **Alice & Books** | 小而直观；无需账号；PDF、EPUB、在线阅读；作品页明确提示美国公版与地域差异 | 本轮新增 discovery-only starter；遵守其禁止自动化/系统化抓取的站点条款 |
| Git、版本固定、可复现文本 | **GITenberg** | 4 万余本 Git 管理的公版书；适合固定 commit 与机器处理 | WebNR 已有 3 本 commit-pinned direct-TXT 小样本，可直接测试浏览器文本导入 |
| 本地 TXT、隐私、本地书架 | **WebNR** | 正式支持本地 TXT 和允许 CORS 的文本 URL；正文与进度留在浏览器 | 阅读层本身；不要求账号，也不把第三方网站变成代理抓取服务 |

如果你的问题是“今晚想读《傲慢与偏见》，哪个最省事”，答案可能是 Alice & Books 或 Standard Ebooks；如果问题是“我要一个长期可复现的纯文本测试输入”，答案更可能是 GITenberg；如果问题是“我要把自己已经有的 TXT 放进一个不上传正文的浏览器书架”，则直接打开 WebNR 比继续寻找新的下载站更合理。

## Project Gutenberg：先解决“有没有”和“能不能直接拿到”

Project Gutenberg 仍然是免费经典电子书最自然的第一站。它的第一方站点在本次核验时列出 **7 万多本免费电子书**，明确强调无需付费、无需注册，并以美国版权已经到期的较老作品为重点。作品通常可以直接在网页中阅读，也提供 EPUB、HTML、plain text 等格式；官方帮助页还把“Read Online”作为最简单的阅读方法之一。

它最大的优势不是页面最漂亮，而是**覆盖广、历史长、格式朴素且容易迁移**。当你只知道作者或书名，不确定哪里有合法的免费版本，Project Gutenberg 很适合做第一层检索。对研究者、工具作者和长期归档来说，plain text 也有特殊价值：它不依赖某一种电子书容器格式，几十年后仍然容易解析。

但 WebNR 没有把整个 Project Gutenberg 网站包装成一个自己的大规模 crawler。原因也很简单：一个大型来源的“网页公开可访问”并不自动等于“每天用自己的爬虫扫完整站最合理”。WebNR 现有 Project Gutenberg Starter 保持面向读者的发现能力；需要真正 direct-TXT 的时候，则优先用具有稳定文件身份、明确大小和可复现 fixture 的小型来源进行验证。

**适合谁：**

- 想先确认一本老书是否有免费版本；
- 希望选择 HTML、EPUB、纯文本等不同格式；
- 不想注册账号；
- 需要一个长期存在、作品覆盖广的公共领域入口；
- 愿意自己决定后续用浏览器、Kindle、Calibre、WebNR 或其他工具阅读。

第一方资料：

- [Project Gutenberg 首页](https://www.gutenberg.org/)
- [Project Gutenberg Reading Options](https://www.gutenberg.org/help/reading_options.html)
- [Project Gutenberg Public Domain eBook Submission](https://www.gutenberg.org/help/public_domain_ebook_submission)

## Standard Ebooks：当“免费”之外，你还在意一本 EPUB 做得好不好

Standard Ebooks 和 Project Gutenberg 的关系很适合用一句话理解：**Project Gutenberg 往往先解决数字化和可获得性，Standard Ebooks 再把其中适合的公版文本做成经过校对、统一排版、语义结构更完整的现代电子书。** Standard Ebooks 自己也明确把 Project Gutenberg 视为重要文本来源，并说明其目标是做出接近商业电子书质量的免费公版版本。

本次第一方核验中，Standard Ebooks 明确说明：它选择认为已在美国进入公共领域的文本和封面素材，并把自己新增的排版、markup、封面等工作也通过 CC0 / 公共领域 dedication 放开。它还强调语义 XHTML、现代 typography、详细 metadata、popup footnotes、目录和无 DRM 等特性。

这意味着，如果你有 Kindle、Kobo、Apple Books、Thorium、Calibre 或其他成熟 EPUB 阅读器，Standard Ebooks 往往比“拿到一份最原始的 TXT”更舒服。它的价值在于**编辑工程**，不是单纯再复制一个免费下载按钮。

对 WebNR 来说，目前有一个非常现实的边界：**WebNR 正式支持的是 TXT，不会因为 Standard Ebooks 的 EPUB 很好就把 EPUB 当成 TXT 糊弄过去。** 在真正的 EPUB parser、安全审查、渲染策略和 fixtures 完成之前，Standard Ebooks 在 WebNR source 里更适合承担“发现一个高质量版本”的角色，而不是被宣传为 WebNR 已经可以原生读取的容器格式。

**适合谁：**

- 已经用成熟 EPUB 阅读器；
- 介意乱码、奇怪换行、直引号、脚注和目录质量；
- 希望一套经典书在不同设备上有比较一致的视觉体验；
- 想把开源/公版电子书作为再加工基础；
- 不要求“必须在 WebNR 内直接打开 EPUB”。

第一方资料：

- [Standard Ebooks 首页](https://standardebooks.org/)
- [About Standard Ebooks](https://standardebooks.org/about)
- [Standard Ebooks and the Public Domain](https://standardebooks.org/about/standard-ebooks-and-the-public-domain)
- [Accessibility](https://standardebooks.org/about/accessibility)

## Alice & Books：更像一个“打开就能挑一本”的小型经典书架

Alice & Books 是本轮新审计的来源。它的首页在 2026-09-05 核验时显示 **1,224 本 classics**，主打 PDF、EPUB、在线阅读、无需注册、DRM-free，并说明馆藏作品在美国属于公共领域或采用开放许可。具体作品页会继续给出版权提示，例如《Pride and Prejudice》《Frankenstein》《White Nights》都明确标注 `Public domain (US)`，同时提醒美国以外读者核对本地版权期限。

从纯读者体验看，它的优势很直接：页面比大型档案库更像一个现代书店。你不用先理解文件目录，点开作品就能看到 PDF、EPUB、在线阅读等选项。对于“不想研究格式，只想现在开始读一本经典”的人，这是很好的发现路径。

不过，本轮 WebNR 对它做了一个刻意的能力限制：**新增的 Alice & Books source 是 discovery-only，不是 crawler、API adapter 或镜像。** 这里不是因为《傲慢与偏见》突然不公版，而是因为 AliceAndBooks 当前 Terms of Use 对“站点内容”和“机器访问”写了明确边界：禁止通过 bot/script 等 automated or non-human means 访问，并禁止系统性提取网站数据去建立 collection/database/directory，也禁止 data-mining/robots 一类自动抽取活动。

因此 WebNR 只维护四个经过人工审计的第一方目的地：官方 library，以及《Pride and Prejudice》《Frankenstein》《White Nights》三个代表作品页。source 中的说明是 WebNR 自己写的，不复制对方的封面、简介、下载数、热门排行、阅读时长或推荐数据，也不会后台轮询 AliceAndBooks。

这也是“link-only 是能力等级，不是失败状态”的一个典型例子：**读者可以稳定发现并跳转，WebNR 又没有把普通网页使用权夸大成自动抓取授权。**

[添加 Alice & Books Public Domain Discovery Starter](https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Falice-and-books-public-domain-discovery-starter)

第一方资料：

- [Alice & Books](https://www.aliceandbooks.com/)
- [AliceAndBooks Terms of Use](https://www.aliceandbooks.com/terms-of-use)
- [Pride and Prejudice](https://www.aliceandbooks.com/book/pride-and-prejudice/jane-austen/7)
- [Frankenstein](https://www.aliceandbooks.com/book/frankenstein/mary-shelley/35)
- [White Nights](https://www.aliceandbooks.com/book/white-nights/fyodor-dostoevsky/717)

## GITenberg：真正有意思的是 Git，而不是“又多一个 Gutenberg 镜像”

GITenberg 的第一方项目页称目前有 **43,000 多本**书，并把项目描述为 free、open、collaborative、scriptable digital library。它的作品来自 Project Gutenberg 等公版基础，但把“每本书如何被维护”变成更适合软件工程的模型：Git repository、commit history、可 fork、可修订。

这对于普通读者未必比一个漂亮 EPUB 页面更直观，但对 WebNR 这种要做**可复现 source health 和导入 regression** 的工具非常有价值。上游 mutable URL 今天和下个月可能变；一个审核过的 commit 则可以作为明确身份。WebNR 现在的 `GITenberg Direct TXT Starter` 故意只选三本书，并把具体 TXT 固定到具体 commit。这样一条 source 的“健康”不是“某个网站首页还活着”，而是“这个已审计字节输入仍然可以被同样的 reader 路径读取”。

这是为什么 GITenberg 在本文里不和 Project Gutenberg 竞争“谁的目录更大”。它更像一座桥：把公共领域电子书的世界连接到 Git、版本化 fixtures、可重复测试和机器处理。

**适合谁：**

- 想固定一个文本版本；
- 做 NLP、文本处理、reader fixture 或回归测试；
- 希望看到每本书的修改历史；
- 能接受 GitHub/Git 风格的来源结构；
- 在 WebNR 中更看重 direct-TXT 的确定性，而不是大而全目录。

第一方资料：

- [GITenberg Project](https://gitenberg.org/)
- [WebNR GITenberg Direct TXT Starter](https://app.webnovel.win/sources/gitenberg-direct-txt-starter)

## WebNR：它不是又一个电子书下载站，而是把“我已经选好的文本”留在浏览器里

把前面四个来源放到一起之后，WebNR 的角色反而更清楚。WebNR 当前不是要复制 Project Gutenberg，也不需要重新做一遍 Standard Ebooks 的编辑工程。它更适合负责这条链的后半段：**你已经知道想读什么、已经拥有 TXT 或找到了允许浏览器读取的文本 URL，然后把正文、书架和进度留在自己的浏览器里。**

截至 2026-09-05，WebNR 正式支持本地 TXT，以及服务器允许浏览器跨域访问的文本 URL。导入内容与阅读进度主要保存在当前浏览器的 IndexedDB，不要求用户注册 WebNR 账号。EPUB 和 PDF 仍然不会被假装成“已经支持”；容器格式需要真正的 parser、安全边界、fixtures 和 E2E 之后才能进入正式能力声明。

因此，面对一部经典作品，可以按下面的顺序做决策：

1. **只想读，已经有 TXT：** 直接导入 WebNR，本地文件不需要 CORS。
2. **想要漂亮 EPUB：** 先看 Standard Ebooks；用专门 EPUB 阅读器通常更合理。
3. **想快速浏览 PDF/EPUB：** Alice & Books 是一个直观入口，但由原站完成下载/阅读。
4. **想找最广泛的公版版本：** 从 Project Gutenberg 开始。
5. **想要稳定、commit-pinned 的文本：** 看 GITenberg/WebNR direct-TXT starter。
6. **网页上有 TXT，但 WebNR URL 导入失败：** 先查 CORS，而不是找公共代理绕过来源站策略。

这条分工可以避免一个常见误区：为了让“所有来源都在一个 App 里打开”，最后不得不增加中心化代理、偷偷转发 Cookie、绕过登录或把来源网站的访问策略吃掉。WebNR 当前宁愿让一部分来源保持 discovery-only，也不把这种隐性代理成本伪装成“兼容性”。

## 五个来源真正的差别：不是数量，而是编辑、身份和权限

### 1. “作品公版”与“这个网站可以被自动抓”是两件事

《Pride and Prejudice》本身进入公共领域，不代表某个网站的封面、简介、排行、页面代码、用户数据和编辑内容也自动进入公共领域。Alice & Books 是今天最清楚的例子：作品页明确写美国公版，但网站 Terms 同时限制自动化和系统化数据提取。

反过来，Standard Ebooks 不只是告诉你基础作品是公版，还主动把自己制作的 ebook 文件工作也 dedication 到公共领域。这类第一方声明会直接影响一个工具以后能否做更丰富的机器接口。

### 2. “下载地址今天能打开”与“稳定 source”也是两件事

一个 URL 返回 200，只能说明这一次请求得到响应。WebNR 如果要承诺 direct-TXT，还需要知道稳定 identity、编码、响应大小、超时、更新/删除语义、CORS、失败行为，以及上游是否允许这类访问。GITenberg 的 commit-pinned 文件在这里特别有优势；DBNL 则相反，虽然权利证据很强、源站也提供 TXT，但 WebNR 还没有得到可重复的浏览器 CORS 证据，所以当前仍然只做 discovery。

### 3. “格式多”不等于“WebNR 都应该解析”

PDF、EPUB、MOBI、HTML、TXT 各自服务不同阅读器。一个网站提供五种格式是好事，但 WebNR 不应该因为 source 页面写了 EPUB 就在产品里声称 EPUB 已兼容。当前稳定边界还是 TXT；需要 EPUB 时，用 Standard Ebooks + 专门 EPUB reader 往往比在 WebNR 里做一个半成品解析器更好。

## 今天另外筛查了哪些免费电子书来源

为了避免这篇比较只围绕已经熟悉的项目，本轮 source program 还筛查了另外四个候选 family，并没有为了“每天必须加一个”把它们全部塞进 maintained set。

### Loyal Books：适合音频发现，但与现有公版路线高度重叠

Loyal Books 的第一方 About 页面说明，它的大量公版内容主要来自 Project Gutenberg，音频则大量来自 LibriVox，并强调 public-domain audiobook；其 App 页面同时列出数千本 audiobook 与数万本 ebook。对读者而言，它的视觉浏览和有声书入口有价值，但对 WebNR 当前的**文本 source** 来说，与 Gutenberg/GITenberg 的覆盖重叠很高，而且本轮没有得到足够细的 item-level ebook provenance 证据来证明“整套 ebook catalog 可以作为一个新的同步接口”。因此本轮不做内容 ingestion，也不为凑数再造一个重复目录。

- [About Loyal Books](https://www.loyalbooks.com/about)
- [Loyal Books App](https://www.loyalbooks.com/app)

### Planet eBook：澳大利亚版权边界不应该被悄悄改写成全球公版

Planet eBook 的具体作品页明确写着：这些电子书在澳大利亚发布并在当地 out of copyright，同时提醒读者在下载、阅读或分享前检查自己国家的版权法。这个说明本身很清楚，也正因为清楚，WebNR 不应该把它简化成一个没有地域限定的“全球 public domain TXT source”。当前又没有比现有 Gutenberg/Standard Ebooks 路线更强的 WebNR reader value，因此先 defer 内容集成。

- [Planet eBook](https://www.planetebook.com/)

### ManyBooks：现在已经是“公版经典 + 作者自出版 + 免费/折扣生态”的混合平台

ManyBooks 的第一方 About 页面说明，早期大量电子书来自 Project Gutenberg，但后来平台也向 self-publishing authors 开放；主页同时展示 public-domain classics 与免费/折扣新书。帮助页还说明，下载电子书通常需要先创建账号。

这并不是坏事，只是意味着它已经不是一个可以用“全部公版”四个字描述的单一来源。对 WebNR 来说，若以后接入，需要逐项区分公版作品、作者授权 permafree、外部商店促销和账户下载边界，不能把整个站当作统一 license。今天先保持候选状态，比做一个含混的大目录更安全也更可维护。

- [About ManyBooks](https://manybooks.net/about)
- [ManyBooks Help](https://manybooks.net/help)

### Better Gutenberg：有意思，但与已有 Gutenberg/GITenberg 路线需要证明“新增价值”

Better Gutenberg 的第一方 About 页面说明，它把 Project Gutenberg 和其他公版 collection 的文本重新处理成更干净的现代 EPUB；当前站点还提供 6,000 多本 EPUB 的整库下载。它是一个值得继续审计的 formatter/curated library，但 WebNR 已经有 Project Gutenberg 的发现路线和 GITenberg 的版本化 TXT 路线。下一步若要接入，应该先回答“对 WebNR 读者新增了什么能力”，以及其再加工 EPUB、更新、归属和批量获取边界，而不是因为它是新网站就重复一个 catalog。

- [About Better Gutenberg](https://bettergutenberg.org/about/)

## 推荐路线：按你的真正目标选，不要按“免费站排行榜”选

### 场景 A：我只想找一本经典，今晚开始读

先搜 Project Gutenberg；如果你希望页面和电子书更精致，再看 Standard Ebooks 或 Alice & Books。它们都不要求你先理解 WebNR source 格式。

### 场景 B：我想把几十本经典长期放在 EPUB 阅读器

优先 Standard Ebooks。对那些 Standard Ebooks 没有制作的作品，再回 Project Gutenberg 或其他公版库补齐。WebNR 当前不是 EPUB library manager，不需要硬塞进来。

### 场景 C：我做文本分析或阅读器测试，要固定输入

优先找可固定 revision 的 GITenberg，或者 WebNR 已经审计的 direct-TXT starter。把 commit、文件路径、编码和大小写进 fixture，比记录“今天下载按钮还能点”更可靠。

### 场景 D：我手里已经有很多 TXT，只想本地读

不要继续找下载站。直接导入 WebNR。本地文件不需要来源站 CORS，也不会因为第三方目录结构变化而失效。若以后需要把一个公开、授权的 TXT 文件夹分享成 source，再生成一个小型、带 provenance 的 `search_index.yml`。

### 场景 E：我看到一个公版网站，想让 WebNR 全自动同步

先不要从“能抓”开始，而从六个问题开始：作品或 edition 的权利是什么？站点允许怎样的机器访问？浏览器能否请求？identity 怎么固定？更新和删除怎么处理？失败时是否会偷偷换镜像？这六个问题答完，再决定是 link-only、direct TXT、feed/API adapter，还是根本不应该接入。

## 本轮 WebNR source 变化

作为这次比较的一部分，WebNR 新增 **Alice & Books Public Domain Discovery Starter**。它不是把 AliceAndBooks 变成后台数据源，而是把四个经过审核的第一方入口放进 reader 的来源发现层，并明确记录当前站点条款导致的自动化边界。

这使 maintained source family 从 23 个增加到 **24 个**，同时保持一个重要原则：**source 数量增长不能靠降低 admission 标准。** 本轮审计的 Loyal Books、Planet eBook、ManyBooks、Better Gutenberg 都保留在候选/后续审计队列，而不是为了日目标强行进入 maintained set。

[打开 Alice & Books Starter](https://app.webnovel.win/sources/alice-and-books-public-domain-discovery-starter)

## 最后一句话

免费经典小说的生态已经不缺“下载按钮”，真正值得比较的是：**谁负责确认作品可自由提供，谁负责校对和排版，谁给你稳定版本，谁只是帮你发现，而你的阅读器到底需要哪一种输入。**

Project Gutenberg 是广泛入口；Standard Ebooks 是精修版本；Alice & Books 是现代化的快速发现；GITenberg 把公版文本变成可版本化的软件资产；WebNR 则把经过选择的 TXT 放进本地浏览器书架。按这个分工使用它们，比追求一个“什么都抓、什么都解析、什么都镜像”的超级来源更可靠。

### 参考与核验资料

以下页面均于 2026-09-05 重新核验：

1. Project Gutenberg — https://www.gutenberg.org/
2. Project Gutenberg Reading Options — https://www.gutenberg.org/help/reading_options.html
3. Project Gutenberg Public Domain eBook Submission — https://www.gutenberg.org/help/public_domain_ebook_submission
4. Standard Ebooks — https://standardebooks.org/
5. About Standard Ebooks — https://standardebooks.org/about
6. Standard Ebooks and the Public Domain — https://standardebooks.org/about/standard-ebooks-and-the-public-domain
7. Standard Ebooks Accessibility — https://standardebooks.org/about/accessibility
8. Alice & Books — https://www.aliceandbooks.com/
9. AliceAndBooks Terms of Use — https://www.aliceandbooks.com/terms-of-use
10. AliceAndBooks: Pride and Prejudice — https://www.aliceandbooks.com/book/pride-and-prejudice/jane-austen/7
11. AliceAndBooks: Frankenstein — https://www.aliceandbooks.com/book/frankenstein/mary-shelley/35
12. AliceAndBooks: White Nights — https://www.aliceandbooks.com/book/white-nights/fyodor-dostoevsky/717
13. GITenberg Project — https://gitenberg.org/
14. Loyal Books About — https://www.loyalbooks.com/about
15. Loyal Books App — https://www.loyalbooks.com/app
16. Planet eBook — https://www.planetebook.com/
17. ManyBooks About — https://manybooks.net/about
18. ManyBooks Help — https://manybooks.net/help
19. Better Gutenberg About — https://bettergutenberg.org/about/
20. WebNR 第一个月来源健康报告 — https://www.webnovel.win/blog/2026/09/03/first-month-source-directory-health-report/
