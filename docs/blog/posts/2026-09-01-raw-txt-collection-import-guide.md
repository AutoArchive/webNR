---
title: 没有目录的 TXT 小说合集怎么导入 WebNR？文件夹、编码、来源与自建 Source 实战
date: 2026-09-01
slug: raw-txt-collection-import-guide
description: 从单个 TXT、本地文件夹到可重复的 WebNR source，解释文件名、编码、CORS、来源证明、固定版本和失败边界，并用 Project Ben-Yehuda 与 GITenberg 展示 direct-TXT 做法。
categories:
  - Reader guides
  - TXT
  - Sources
---

# 没有目录的 TXT 小说合集怎么导入 WebNR？文件夹、编码、来源与自建 Source 实战

**先给结论：** 少量自己的 TXT，直接逐个本地导入；一整个长期收藏，先整理文件名和编码；如果这批文本要长期分享、重复导入或跟踪版本，再把它整理成一个小型 WebNR source。不要一开始就为了“批量”写复杂抓取器。

WebNR 当前有两条成熟路径：

1. **本地 TXT 导入**：文件只在浏览器里读取，正文和阅读进度保存在本地；
2. **URL / WebNR source**：目录保存书目与上游地址，读者选择一本书时浏览器再读取对应文本。

[打开 WebNR 导入页](https://app.webnovel.win/){ .md-button .md-button--primary }

## 四种常见情况，分别怎么处理

| 你的 TXT 在哪里 | 最省事的路径 | 需要特别注意什么 |
| --- | --- | --- |
| 自己电脑上的一个 `.txt` | 本地导入 | 文件名、编码 |
| 自己电脑上的一个文件夹 | 少量逐个导入；长期收藏先整理目录 | 不要假设所有文件编码相同 |
| 公网上一个稳定 TXT | URL 导入 | CORS、charset、来源页、文件是否会变 |
| 公网上一批长期维护的 TXT | 建一个版本化 source | stable ID、许可、commit/release、更新/删除语义 |

当前 WebNR **还没有“选择一个文件夹后一次吞掉所有 TXT”的 UI**。这不是缺一个按钮那么简单：批量导入还需要解决重复项、标题、编码混用、错误隔离和用户确认。对几十本以内的私人收藏，逐个导入往往更可靠。

## 1. 单个本地 TXT：最稳的起点

WebNR 本地导入会先读取原始字节，再尝试解码。当前逻辑大致是：

1. 先严格尝试 UTF-8；
2. UTF-8 失败后做字符集检测；
3. 对常见结果映射到浏览器支持的编码，例如 GBK/GB2312 → GB18030、Big5、Shift_JIS、EUC-JP、EUC-KR；
4. 无法确认时明确暴露失败，而不是悄悄把乱码当成功。

这也是为什么一份年代较久的中文/日文/韩文 TXT，**先下载到本地再导入**常常比直接贴远程 URL 更稳：你能拿到完整字节，且不受服务器错误 charset 声明影响。

### 文件名会直接影响书架体验

本地导入时，WebNR 会把文件名去掉扩展名作为默认标题：

```text
三体.txt                     → 三体
01_吾輩は猫である.txt        → 01_吾輩は猫である
Austen - Pride and Prejudice.txt → Austen - Pride and Prejudice
```

所以一个没有目录的私人收藏，最划算的第一步通常是**把文件名整理好**，而不是先写代码。

## 2. 文件夹：把“批量读”拆成整理和导入

### 十几本：保持简单

如果只是少量自己已经拥有的 TXT：

- 逐个导入；
- 不上传；
- 不需要 CORS；
- 每本都能独立判断编码；
- 出错时容易知道是哪一个文件。

这最符合 WebNR 的 local-first 设计。

### 几百或几千本：先做目录

大收藏真正需要自动化的，首先是**目录生成**。至少回答：

1. 稳定 ID 是文件名、上游作品 ID 还是内容 hash？
2. 标题和作者从哪里来？
3. 文件地址会不会变？
4. 编码是统一 UTF-8，还是混合 GBK/Big5/Shift_JIS？
5. 这批文本能不能公开分享，还是只适合私人使用？
6. 上游删除/改版时，旧条目怎么处理？

把这些问题写清楚，才值得做成可重复 source。

## 3. 一个最小 WebNR TXT source 长什么样

WebNR 原生目录使用 `search_index.yml`。一个简化条目可以是：

```yaml
my-collection/book-001.md:
  title: Example Book
  author: Example Author
  description: 来源、版本与导入边界的简短说明。
  filename: book-001.txt
  page_url: https://example.org/books/001
  download_url: https://example.org/releases/v1/book-001.txt
  source: Example Collection
  license: Public-Domain-or-Exact-License-Identifier
  tags:
    - Raw TXT
```

`page_url` 和 `download_url` 最好分开：

- **page_url**：给人看，解释作品、作者、版本与来源；
- **download_url**：给浏览器读正文，应该稳定、直接、大小可控。

如果上游使用 Git，优先固定到 commit：

```text
https://raw.githubusercontent.com/ORG/REPO/<commit>/book.txt
```

不要把已经审计过的条目指向会持续变化的 `main` / `master`。固定 commit 后，今天确认过的字节明天仍然是同一份，出了问题也有明确回滚点。

## 4. 为什么纯文本也要保存 provenance

“只是 TXT”不代表版本无关紧要。经典作品可能同时存在：

- 原文与现代译文；
- OCR 与人工校订；
- 有注释版与去注释版；
- 公版原作与仍受保护的现代编辑/翻译；
- UTF-8 与旧字符集版本。

所以长期 source 最好保存三层身份：

**作品 → 数字版本/整理版本 → 当前文件快照。**

这能避免“URL 还是那个 URL，但里面已经换了一版”的静默漂移。

## 5. 两个真实 direct-TXT 例子

### Project Ben-Yehuda：官方作品身份 + public-domain dump

Project Ben-Yehuda 同时提供人类可读作品页和明确 public-domain dump。WebNR 的小型 starter 保留官方作品 ID/页面，并把实际 TXT 固定到经过审核的 dump commit。

这适合演示：**公版依据、来源页、UTF-8 文件和固定快照可以同时存在**。

[打开 Project Ben-Yehuda TXT Starter](https://app.webnovel.win/sources/project-ben-yehuda-txt-starter)

### GITenberg：每本书是 Git 仓库，适合可复现 TXT

GITenberg 把许多 Project Gutenberg 公版书放进独立 Git 仓库。WebNR 的 `GITenberg Direct TXT Starter` 只选三个小型样本：

| 作品 | 固定文件 |
| --- | --- |
| *Pride and Prejudice* | `1342-0.txt` |
| *Frankenstein* | `84-0.txt` |
| *The Adventures of Sherlock Holmes* | `1661.txt` |

这些条目固定到经过审核的 commit，而不是跟随 mutable branch。用户选中一本后，浏览器只请求那一个 TXT；没有 bulk clone、后台轮询、Cookie、账号或第三方脚本。

[打开 GITenberg Direct TXT Starter](https://app.webnovel.win/sources/gitenberg-direct-txt-starter)

这个例子说明了一点：一个来源是否值得 direct-TXT，不取决于“我们以前是不是已经有它的 discovery link”，而取决于**当前这个文件能否提供新的、稳定、可解释的阅读能力**。

## 6. 远程 TXT 为什么经常比本地 TXT 更容易失败

远程 URL 导入多了浏览器网络边界：

- 目标站必须允许 CORS；
- redirect 必须最终仍是浏览器可访问文本；
- `Content-Type` / charset 不能把文本误导成别的东西；
- 文件不能无限大；
- URL 不能悄悄指向登录页、HTML 错误页或 anti-bot challenge。

所以“服务器能 curl 到”并不等于“WebNR 浏览器可以读”。遇到远程 URL 失败时，先打开浏览器开发者工具看 CORS/status/content-type，再判断是不是编码问题。

## 7. 哪些集合不应该直接批量塞进 WebNR

即使文件格式是 TXT，也可能不适合做公共 source：

- 权利状态无法解释；
- modern translation / edition 仍受保护；
- collection 许可要求署名、非商业或 ShareAlike，但 source 没有办法保留这些信息；
- 文本依赖特殊 markup，直接显示会严重破坏内容；
- 上游只有 mutable dump，没有 release/commit/hash；
- 需要登录、Cookie 或绕过访问控制。

这时最好的状态是“私人本地使用”或“等待更明确 adapter”，而不是为了目录数量硬接。

## 8. 如果你要把自己的 TXT 文件夹做成 source

建议按这个顺序：

1. **先统一文件名**；
2. **抽样检测编码**，能转 UTF-8 就先规范化；
3. **给每本书稳定 ID**；
4. **保存来源页/作品页**；
5. **记录确切许可或公版依据**；
6. **固定 release/commit/hash**；
7. **先选 3–10 本做 pilot**，不要一开始放 5000 本；
8. **测试每一本的失败方式**；
9. pilot 稳定后再扩大。

这个流程的目标不是把 YAML 写得漂亮，而是让半年以后你仍然知道：这本书是谁、从哪里来、为什么能用、是不是同一份文件。

## 常见问题

### EPUB 能不能直接改后缀成 `.txt`？

不能。EPUB 是容器格式，需要真正 parser。改扩展名不会把它变成纯文本。

### 远程 TXT 乱码怎么办？

如果可以合法下载，先保存到本地，再用 WebNR 的本地字节级解码路径导入；同时检查上游是否有 UTF-8 版本。

### 文件夹能不能一次导入？

当前没有正式的批量文件夹 UI。少量文件逐个导入；长期收藏先生成 source，会更可控。

### Source 会不会把整批文本上传到 WebNR？

不会。source 保存目录信息；direct-TXT 条目在用户选择时由浏览器读取对应上游文件。用户自己的本地 TXT 则留在当前浏览器配置中。

## 继续阅读

- [2026 年哪里能合法免费看小说](2026-08-08-legal-free-novels-txt-collections.md)
- [WebNR 当前来源目录与健康说明](2026-09-03-first-month-source-directory-health-report.md)
- [免费经典小说阅读路线怎么选](2026-09-05-free-classic-ebook-reading-routes-compared.md)

版本说明：本文描述 **2026-09-01** 的 WebNR TXT 导入与 source 设计边界。后续如果真正增加文件夹批量导入或新的容器格式，会通过新的用户文档说明，而不是回头把当前限制改写成“其实早就支持”。
