---
title: 2026 年哪里能合法免费看小说？公版、作者授权与 TXT/电子书资源目录
date: 2026-08-08
slug: legal-free-novels-txt-collections
description: 面向读者整理仍可核验的公版、作者授权与开放数字图书馆路线，并说明哪些适合直接读、哪些更适合做发现入口，以及 TXT、EPUB、扫描 PDF 的差别。
categories:
  - Reader guides
  - Sources
---

# 2026 年哪里能合法免费看小说？公版、作者授权与 TXT/电子书资源目录

**先说结论：** 想找来源清楚、长期比较稳定的免费小说，优先顺序可以很简单：**公共领域或作者明确授权的项目 → 开放电子书项目 → 图书馆与机构馆藏 → 搜索/聚合服务作为线索**。不要把“网页免费打开”直接等同于“可以任意下载、机器抓取或再分发”。

对 WebNR 用户，最省事的是本地 TXT 或已经审计过的 direct-TXT；EPUB、扫描 PDF、特殊编码文本和只提供作品页的馆藏，则先把它们当作**找书入口**。WebNR 不会为了“看起来支持更多格式”把 EPUB 假装成 TXT，也不会把一个公开网站自动变成抓取源。

[添加 Standard Ebooks Starter](https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Fstandard-ebooks-starter){ .md-button .md-button--primary }

## 一张表先分清“免费”是什么意思

| 来源类型 | 读者通常能得到什么 | WebNR 更适合怎么用 | 最容易误解的地方 |
| --- | --- | --- | --- |
| 作者授权 / 项目原创 TXT | 可直接保存的文本 | 本地导入或 direct-TXT source | 免费阅读不一定包含再分发权 |
| 公版电子书项目 | HTML、TXT、EPUB、作品页 | TXT 可直接读；其他格式先做发现 | 公版期限随法域、版本、译者而变化 |
| 国家图书馆 / 数字馆藏 | 扫描、全文、书目页 | 发现与跳转 | Full View 不一定允许整本下载 |
| Wikisource 等协作文本库 | 网页正文、历史版本、导出 | 按作品/语言审计 | 原作、译文和编辑贡献可能不是同一权利状态 |
| 搜索 / 聚合 API | 元数据、可读状态、落地页 | 找书线索 | API 返回“可见”不等于内容可自由复制 |

判断一个来源时，把下面六件事分开：**免费访问、公共领域、开放许可、允许下载、允许机器访问、允许第三方再分发**。它们不是同义词。

## 最适合普通读者先看的几条路线

### Project Gutenberg：先解决“有没有免费版本”

[Project Gutenberg](https://www.gutenberg.org/) 适合做英文经典的第一层检索：馆藏大、无需账号，很多作品提供 HTML、EPUB 和 plain text。它也有专门的机器访问政策和目录路线，所以人类找书与程序化访问不需要混在一起。

对读者来说，最简单的方法仍然是从官方作品页开始。对 WebNR 来说，Project Gutenberg 更适合承担**发现大目录**的角色；真正 direct-TXT 的条目则应明确作品身份、具体文件和版本，而不是让每个浏览器客户端去扫描主站。

需要注意：Project Gutenberg 的版权判断以美国为重要基准。一本书在美国进入公共领域，不代表它在你的所在地也一定如此。

第一方入口：

- [Project Gutenberg](https://www.gutenberg.org/)
- [Reading options](https://www.gutenberg.org/help/reading_options.html)
- [Robot access](https://www.gutenberg.org/policy/robot_access.html)

### Standard Ebooks：更在意“这本 EPUB 做得好不好”

[Standard Ebooks](https://standardebooks.org/) 的优势不是“又一份免费文件”，而是把公版文本重新校对、排版并做成现代 EPUB。对 Kindle、Kobo、Apple Books、Thorium、Calibre 等成熟 EPUB 阅读器用户，它往往比原始 TXT 更舒服。

WebNR 的 **Standard Ebooks Starter** 只链接官方作品页，不复制 EPUB，也不宣称 WebNR 已经原生支持 EPUB。当前比较适合从这里发现高质量版本的作品包括 *Pride and Prejudice*、*Frankenstein*、*The Picture of Dorian Gray* 与 *The Time Machine*。

第一方入口：

- [Standard Ebooks](https://standardebooks.org/)
- [About](https://standardebooks.org/about)
- [Public domain policy](https://standardebooks.org/about/standard-ebooks-and-the-public-domain)

### 青空文库：日文经典和近代文本的自然入口

[青空文库](https://www.aozora.gr.jp/) 对日文公版文学非常重要。它有稳定的作品卡、书架与文本文件，但常见 ZIP、Shift_JIS、青空文库注记和 XHTML，不是所有文件都适合直接当 UTF-8 TXT 读取。

WebNR 当前把它作为作品发现入口，先保留官方图书卡和作品身份。这样读者能找到《吾輩は猫である》《羅生門》《走れメロス》等作品，同时避免在没有 ZIP/注记解析 fixture 的情况下假装“直接导入已经完整兼容”。

### Project Madurai：泰米尔文学的长期数字化项目

[Project Madurai](https://www.projectmadurai.org/) 长期发布泰米尔文学电子文本。收藏横跨较早的 TSCII 编码和较新的 Unicode HTML/PDF，作品的来源与发布条件也需要按具体条目理解。

因此 **Project Madurai** 很适合做区域文学发现，也适合从明确 Unicode、权利状态和下载条件的条目逐步建立兼容；它不适合被一句“免费项目”粗暴地当成统一 TXT 仓库。

### Project Ben-Yehuda：把权利状态直接做成目录信息

[Project Ben-Yehuda](https://benyehuda.org/) 提供希伯来文学数字文本，并区分公共领域和获得授权的作品。对阅读器来说，这种“作品为什么能公开”的信息非常有价值。

WebNR 后续已经基于其公开的 public-domain dump 建立 **Project Ben-Yehuda Public Domain TXT Starter**：只对明确公共领域、UTF-8、身份可固定的小型样本提供 direct-TXT，而不是把整个站点的所有内容都视为同一许可。

## 很有用，但更适合做发现层的来源

### Wikisource

Wikisource 的优势是网页正文、版本历史和校对过程清楚，也提供不同导出方式。复杂点在于原作、译文、编辑贡献和不同语言站点的规则可能不同，所以最好按具体作品与版本判断，而不是给整个 Wikimedia 项目套一个统一版权结论。

### HathiTrust

HathiTrust 很适合确认某本书是否存在机构数字版本，以及它当前是 Full View、受限查看还是只有检索。**能在线看**与**允许整本下载**并不是同一状态；下载能力还可能受登录资格、作品状态与数字化来源影响。

### Project Runeberg

Project Runeberg 对北欧文学发现很有价值，但法域、作者、译者和版本差异都需要保留。最合理的使用方式是逐本作品页发现，而不是把整个站视为全球统一公版库。

## 搜索和聚合服务：拿来找，不拿来证明版权

DPLA、Library of Congress API、Google Books、Internet Archive 等服务都很适合回答“哪里可能有这本书”。但它们提供的是**发现能力**：真实全文、扫描件和下载权限仍由具体提供机构、条目和所在地规则决定。

尤其要避免一个常见误区：Google Books 显示 Full View，或 Internet Archive 某个 item 可以打开，并不能自动推导出“任何第三方都能重新托管这份内容”。

## 如果你只想今晚开始读，怎么选

**英文经典：** 先搜 Project Gutenberg；如果有 Standard Ebooks 版本并且你用 EPUB 阅读器，优先试精修版。

**日文经典：** 青空文库先找作品卡；遇到 ZIP / Shift_JIS / 注记文件时，不要把格式问题误判成“作品不能读”。

**泰米尔语：** Project Madurai 是很好的第一方入口，优先选 Unicode 条目。

**希伯来语：** Project Ben-Yehuda 适合找公版/授权文本；WebNR 已有小型 public-domain direct-TXT starter。

**你已经有 TXT：** 不必先找 source，直接在 WebNR 本地导入即可。编码或 CORS 问题看 [TXT 导入指南](2026-09-01-raw-txt-collection-import-guide.md)。

## 如何判断一个“免费小说站”值不值得长期信任

看五件事就够了：

1. 有没有清楚的项目/机构身份与作品页；
2. 权利说明是整站笼统口号，还是能落实到作品/版本；
3. 下载格式和编码是否明确；
4. 程序访问有没有官方 Feed/API/镜像/robots/频率说明；
5. 上游失效时，你还能否用稳定作品 ID 或版本重新找到同一文本。

这比“今天能不能 curl 到一个 URL”更接近长期可维护的阅读来源。

## 与 WebNR 的关系

WebNR 的来源系统并不等于“把互联网小说搬进 WebNR”。它更像一层**可解释的发现与导入目录**：

- 有明确、稳定、可审计 TXT 时，可以做 direct-TXT；
- 只有可靠作品页时，就保持 discovery；
- EPUB/PDF/特殊格式没有真正 parser 时，不冒充兼容；
- 登录、验证码、付费、DRM 和访问控制不通过绕过来解决。

如果你关心某个来源为什么只是 discovery-only，而不是 direct-TXT，可以继续看 [WebNR 当前来源目录与健康说明](2026-09-03-first-month-source-directory-health-report.md)。

核验日期：**2026-08-08**。项目目录、版权期限和访问政策会变化；需要当前状态时，以来源项目第一方页面和 WebNR 最新 Sources 页面为准。
