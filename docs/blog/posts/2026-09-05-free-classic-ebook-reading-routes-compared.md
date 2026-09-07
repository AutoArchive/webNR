---
title: 免费经典小说去哪读？Project Gutenberg、Standard Ebooks、Alice & Books、GITenberg 与 WebNR 怎么选
date: 2026-09-05
slug: free-classic-ebook-reading-routes-compared
description: 比较 Project Gutenberg、Standard Ebooks、Alice & Books、GITenberg 与 WebNR 的馆藏定位、格式、账号、版权地域、TXT 导入和适合人群，帮助读者快速选路线。
categories:
  - Reader guides
  - Recommendations
  - Sources
  - WebNR
---

# 免费经典小说去哪读？Project Gutenberg、Standard Ebooks、Alice & Books、GITenberg 与 WebNR 怎么选

**先给结论：**

- 想先确认“这本经典有没有免费版本” → **Project Gutenberg**；
- 想要校对、排版和 EPUB 质量更好的版本 → **Standard Ebooks**；
- 想像逛小书架一样快速挑一本、在线读或下载 PDF/EPUB → **Alice & Books**；
- 想要 Git commit、可复现纯文本和机器处理 → **GITenberg**；
- 已经有 TXT，或想把经过审计的纯文本放进浏览器本地书架 → **WebNR**。

它们不是互相替代的五个“同类网站”。前四个主要解决**作品发现和文件来源**，WebNR 更像最后一公里的**本地阅读层**。

本文核验日期为 **2026-09-05**。这里的“免费”不等于“全球无条件公版”：美国公共领域判断不能自动替代你所在国家或地区的版权期限；现代翻译、编辑版、封面和数字整理也可能有独立权利。

[打开 WebNR Reader](https://app.webnovel.win/){ .md-button .md-button--primary }
[查看 WebNR 来源目录](https://www.webnovel.win/blog/2026/09/03/first-month-source-directory-health-report/){ .md-button }

## 一张表先选路线

| 你最在意什么 | 推荐路线 | 你会拿到什么 | 在 WebNR 里的位置 |
| --- | --- | --- | --- |
| 馆藏广、经典容易搜 | **Project Gutenberg** | 作品页、HTML、EPUB、plain text 等 | 大目录发现；具体 direct-TXT 需逐条固定身份 |
| 高质量 EPUB | **Standard Ebooks** | 精校、统一排版、语义结构更完整的电子书 | 官方作品发现；WebNR 不假装已原生支持 EPUB |
| 简单直观地挑一本 | **Alice & Books** | 小型经典书架、在线读、PDF/EPUB | discovery-only，跳转第一方页面 |
| Git 与可复现文本 | **GITenberg** | 每本书独立 Git repo、commit history、raw TXT | 已有 3 本 commit-pinned direct-TXT 样本 |
| 私人 TXT、本地阅读 | **WebNR** | 本地 TXT / 允许 CORS 的文本 URL、阅读进度 | 阅读层，不要求账号，不代理第三方站点 |

## Project Gutenberg：最适合从“有没有”开始

Project Gutenberg 的最大价值是**覆盖广、历史长、格式朴素**。很多经典作品可以在线阅读，也有 EPUB、HTML 和 plain text。

适合：

- 只知道书名/作者，想先确认是否有合法免费版本；
- 想自己决定后续用 Kindle、Calibre、浏览器或 WebNR；
- 需要纯文本作为长期可读格式。

不应误解成：整个站点都可以被任意客户端高频抓取。项目有单独的 robot / machine access 说明，程序化使用应该走官方机器路线，而不是反复抓人类页面。

第一方入口：

- [Project Gutenberg](https://www.gutenberg.org/)
- [Reading options](https://www.gutenberg.org/help/reading_options.html)
- [Robot access](https://www.gutenberg.org/policy/robot_access.html)

## Standard Ebooks：免费之外，更在意“这本书做得好不好”

Standard Ebooks 的核心价值是**编辑工程**。它会把公版文本重新校对、排版、补语义结构和 metadata，做成更接近现代商业电子书体验的 EPUB。

如果你已经在用成熟 EPUB 阅读器，它往往比“拿到最原始 TXT”更舒服。

WebNR 对它保持一个简单边界：**官方作品页可以用来发现高质量版本，但 EPUB 没有真正 parser 之前，不会被宣传成 WebNR 已经原生兼容。**

第一方入口：

- [Standard Ebooks](https://standardebooks.org/)
- [About](https://standardebooks.org/about)
- [Public domain policy](https://standardebooks.org/about/standard-ebooks-and-the-public-domain)

## Alice & Books：想少研究格式，直接挑一本

Alice & Books 的体验更像一个小型现代书店：作品少于大型档案库，但页面直观，很多经典提供在线阅读、PDF 和 EPUB，无需注册。

WebNR 对它采用 **discovery-only**：只保留经过审计的第一方入口，不后台抓取 catalog、不复制封面/简介/排行，也不把站点内容做成本地镜像。

原因不是作品突然“不公版”，而是**作品权利**和**网站机器访问规则**是两个问题。Alice & Books 的当前 Terms 对 automated/non-human access 和系统性提取有明确限制，因此“跳到官方作品页”就是当前合理能力。

[添加 Alice & Books Public Domain Discovery Starter](https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Falice-and-books-public-domain-discovery-starter)

第一方入口：

- [Alice & Books](https://www.aliceandbooks.com/)
- [Terms of Use](https://www.aliceandbooks.com/terms-of-use)

## GITenberg：真正独特的是 Git，而不是“又一个 Gutenberg 链接”

GITenberg 把许多 Project Gutenberg 作品维护在独立 Git 仓库中。对普通读者，它未必比精美作品页更方便；对想要**稳定文件身份**的人，它很有价值：

- 可以固定 commit；
- raw TXT 可直接检查；
- 上游改动有历史；
- 出现问题可以回到精确快照。

WebNR 的 `GITenberg Direct TXT Starter` 只选三个小样本：

- *Pride and Prejudice*
- *Frankenstein*
- *The Adventures of Sherlock Holmes*

每条都固定到具体 commit。用户点击后，浏览器只请求那一本 TXT；没有 bulk clone、后台轮询或把整个 GITenberg 镜像进 WebNR。

[打开 GITenberg Direct TXT Starter](https://app.webnovel.win/sources/gitenberg-direct-txt-starter)

## WebNR：如果你已经有 TXT，就别再找一个“平台”

WebNR 最适合的场景不是替代所有电子书网站，而是：

- 你已经有自己的 TXT；
- 你想把正文和进度保存在当前浏览器；
- 你希望用翻页/滚动、排版、深色模式、书签和 TTS；
- 或者你从经过审计的 direct-TXT source 里选一本文本直接导入。

如果你面对的是 EPUB，当前更合理的做法是用 EPUB 阅读器；如果你面对的是网页平台，则用 discovery source 回到第一方作品页。**不要为了“都塞进一个 App”而牺牲格式和来源边界。**

## 五个常见问题

### 我只想读《傲慢与偏见》，去哪最快？

想在线挑版本：Alice & Books 或 Standard Ebooks。想要 plain text / 大型公版目录：Project Gutenberg。想测试可复现 TXT：GITenberg。已经下载 TXT：直接 WebNR。

### Standard Ebooks 为什么不是 WebNR direct-TXT？

因为它的强项是 EPUB。把 EPUB 当 TXT 读会破坏结构；在 parser 完成前保持 discovery 比伪兼容更可靠。

### Alice & Books 的书是公版，为什么 WebNR 不自动抓？

因为“作品公版”和“网站允许自动化抓取”是两个独立问题。WebNR 遵守其站点访问边界，所以只做人工审计后的第一方链接。

### GITenberg 和 Project Gutenberg 重复吗？

作品集合有重叠，但用途不同：Project Gutenberg 更适合大目录发现；GITenberg 的 Git/commit 结构适合可复现 raw TXT 和 regression fixture。

### 我在美国之外，能直接按美国公版结论使用吗？

不能。版权期限按所在地法域、作者/译者和具体版本判断。本文提供找书路线，不替代你所在地的权利判断。

## 怎么选：只问自己三件事

1. **我需要的是“找书”还是“读已经有的文件”？**
2. **我要 TXT、EPUB、PDF 还是在线阅读？**
3. **我更在意覆盖、排版、界面简单，还是版本可复现？**

这三个问题答完，路线通常就很清楚：

- 覆盖 → Gutenberg
- EPUB 品质 → Standard Ebooks
- 简单挑书 → Alice & Books
- 可复现 TXT → GITenberg
- 本地阅读 → WebNR

如果你想继续比较更广的免费馆藏，看 [2026 年哪里能合法免费看小说](2026-08-08-legal-free-novels-txt-collections.md)；如果你已经拿到一堆 TXT，看 [TXT 集合导入指南](2026-09-01-raw-txt-collection-import-guide.md)。

核验日期：**2026-09-05**。项目目录、条款和作品状态会变化；当前 WebNR 来源能力以 [Sources](https://www.webnovel.win/sources/) 为准。
