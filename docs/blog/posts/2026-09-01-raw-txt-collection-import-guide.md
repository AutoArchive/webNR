---
title: 没有目录的 TXT 小说合集怎么导入 WebNR？文件夹、编码、来源与自建 Source 实战
date: 2026-09-01
slug: raw-txt-collection-import-guide
_description: 从单个 TXT、本地文件夹到可重复的 WebNR source，解释文件名、编码、CORS、来源证明、固定版本和失败边界，并给出 Project Ben-Yehuda 与 GITenberg 的真实直接导入案例。
description: 从单个 TXT、本地文件夹到可重复的 WebNR source，解释文件名、编码、CORS、来源证明、固定版本和失败边界，并给出 Project Ben-Yehuda 与 GITenberg 的真实直接导入案例。
categories:
  - Reader guides
  - TXT
  - Sources
---

# 没有目录的 TXT 小说合集怎么导入 WebNR？文件夹、编码、来源与自建 Source 实战

很多免费小说、历史文本和个人整理档案最后都长成同一种样子：一个文件夹里放着几十、几百个 `.txt`，有时只有文件名，没有 OPDS、RSS、API、书目页，甚至没有一份像样的目录。对阅读器来说，真正困难的部分通常也不是“能不能把字显示出来”，而是怎样把一堆文件变成**可以重复导入、可以知道来源、可以在上游变化后仍然复现**的阅读集合。

WebNR 目前有两条成熟路径。第一条是**本地单文件导入**：把 `.txt` 交给浏览器，正文保存在本地 IndexedDB。第二条是**URL / WebNR source 导入**：source 保存书目与上游地址，读者选择一本书时浏览器直接请求该地址。对“只有一个文件夹，没有目录”的收藏，今天最稳的做法是先决定它属于一次性的私人阅读，还是值得长期维护的公开集合；前者逐个本地导入，后者生成一个小型 `search_index.yml`，把文件名、标题、来源页、固定版本和下载地址显式写出来。

本文对应 WebNR 在 **2026-09-01** 的实际实现。今天同时上线了第二个真实 direct-TXT 示例：**GITenberg Direct TXT Starter**，用三本公共领域英文作品演示“Git 仓库里的 TXT 文件怎样变成可重复的一键导入 source”。它与此前的 **Project Ben-Yehuda Public Domain TXT Starter** 一起，形成两个不同语言、不同上游结构、但同样可复核的直接 TXT 路径。

[打开 WebNR 导入页](https://app.webnovel.win/){ .md-button .md-button--primary }

## 先看结论：四种 TXT 情况分别怎么处理

| 你的 TXT 在哪里 | 推荐路径 | 标题从哪里来 | 编码重点 | 来源重点 |
| --- | --- | --- | --- | --- |
| 自己电脑上的一个 `.txt` | 本地导入 | 文件名去掉扩展名 | WebNR 本地路径会先尝试 UTF-8，再做编码检测 | 文件属于你自己的本地资料即可 |
| 自己电脑上的一个文件夹 | 目前逐个导入；长期收藏可先生成 WebNR source | 先整理文件名，或在 source 里写正式标题 | 文件之间可能混用编码，需要抽样检查 | 给整个文件夹保存一份 provenance 说明 |
| 公网上一个稳定的 UTF-8/ASCII TXT | URL 导入或 WebNR source | URL 文件名，source 可提供更好的书目事实 | 优先选择 UTF-8 或正确声明 charset 的来源 | 保存人类可读来源页与精确下载 URL |
| 公网上一批长期维护的 TXT | 建立版本化 WebNR source | `search_index.yml` 中明确写 title/author | 把编码当作 source contract 的一部分 | 固定 release/commit/hash；记录权利、更新和删除规则 |

这里有一个很重要的现实边界：**WebNR 现在还没有“选择一个文件夹后一次导入全部 TXT”的浏览器 UI。** 当前文件选择器读取的是单个 `File`。因此“导入文件夹”在今天更适合被理解为一个整理工作流：少量文件逐个导入；数量变大、希望重复使用或分享时，就把文件夹变成一个有目录的 WebNR source。这样做比在浏览器里盲目批量吞掉几百个文件更容易检查标题、编码、权利和重复项。

## 1. 单个本地 TXT：最省事，也拥有最好的编码兜底

WebNR 的本地导入代码位于 [`app/lib/storage.ts`](https://github.com/AutoArchive/webNR/blob/main/app/lib/storage.ts)。当前 `importFromFile()` 只接受 `.txt`。浏览器先以 `ArrayBuffer` 读取文件，WebNR 再调用自己的 `detectAndDecodeText()`。

解码顺序很具体：

1. 先用 `TextDecoder('utf-8', { fatal: true })` 尝试严格 UTF-8；
2. UTF-8 失败后，让 `jschardet` 根据字节判断编码；
3. 对常见结果做浏览器可执行的映射，例如 GB2312 / GBK → `gb18030`，以及 Big5、EUC-JP、Shift_JIS、EUC-KR；
4. 如果检测出的编码无法被浏览器 `TextDecoder` 使用，最后回到 UTF-8 解码并把失败暴露在控制台。

这意味着一份年代较久的中文、日文或韩文 TXT，**下载到本地再导入**往往比直接贴远程 URL 更稳。尤其是你不知道服务器有没有正确发送 `Content-Type` / `charset` 时，本地路径拥有更多字节级信息和 WebNR 自己的编码检测。

本地导入之后，WebNR 默认把文件名去掉最后一个扩展名作为书名。例如：

```text
三体.txt            → 三体
01_吾輩は猫である.txt → 01_吾輩は猫である
Pride-and-Prejudice.txt → Pride-and-Prejudice
```

所以一个没有目录的私人 TXT 文件夹，最划算的第一步常常不是写脚本，而是把文件名整理好。推荐至少做到：

```text
作者 - 书名.txt
```

或者在同一作者很多作品时：

```text
作者/
  书名一.txt
  书名二.txt
```

WebNR 今天不会读取父目录名来补作者，因此真正进入书架的标题仍以文件名为主。目录结构主要帮助你自己管理原始收藏。

## 2. 本地文件夹：先决定“私人批量阅读”还是“可维护集合”

文件夹里有 5 本书和有 5,000 本书，是两个完全不同的问题。

### 少量私人文件：保持简单

如果只是十几份自己已经拥有的 TXT，逐个导入的优点很明显：

- 不需要上传；
- 不需要 CORS；
- 不需要把私人文件放进任何公开 source；
- 每本书都走相同的本地编码检测；
- 删除、改名和重新导入都由你控制。

这条路径最符合 WebNR 的 local-first 设计。阅读正文、书签和进度主要保存在浏览器本地，WebNR 不需要知道你的文件夹来自哪里。

### 大型或长期收藏：先生成目录

当文件数量变大，真正需要自动化的是**目录生成**，而不是“让浏览器一次点开 500 个文件”。一个可维护目录至少要回答六个问题：

1. **稳定 ID 是什么？** 文件名、上游作品 ID，还是内容 hash？
2. **标题和作者从哪里来？** 只靠文件名，还是有 CSV/YAML 元数据？
3. **正文地址会不会变？** 是本地路径、release URL、固定 commit，还是会漂移的 `main`？
4. **编码是什么？** 全部 UTF-8，还是混合 GBK / Big5 / Shift_JIS？
5. **这些文本能不能被公开列入 source？** “网上能下载”本身不提供再分发许可。
6. **上游删除或改版时怎么办？** 目录更新不能静默把旧书删掉，也不能用同一个 URL 悄悄换成另一版。

因此 WebNR source 的价值不是多一个 YAML 格式，而是把这些隐含信息变成可 review 的 contract。

## 3. 最小 WebNR source 长什么样

WebNR 原生目录使用 `search_index.yml`。对 raw TXT，最有用的字段通常是：

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
    - Public domain
  categories:
    - Free TXT reading
  region: en-US
  chapters: 1
```

其中 `page_url` 和 `download_url` 最好承担不同职责：

- `page_url` 给人看，应该能解释作品、作者、版本和来源；
- `download_url` 给浏览器取正文，应该直接、稳定、尺寸可控。

如果上游是 Git 仓库，推荐把下载 URL 固定到 commit：

```text
https://raw.githubusercontent.com/ORG/REPO/<commit>/book.txt
```

而不是：

```text
https://raw.githubusercontent.com/ORG/REPO/main/book.txt
```

固定 commit 带来的收益非常实际：今天 review 的字节明天仍然是同一份；上游更新不会让 WebNR 的已发布条目在没有 PR 的情况下改变；出现问题时也有明确 rollback point。

## 4. 为什么“可直接下载”仍然要保留 provenance

纯文本看起来太简单，很容易让人忘记版本信息。一本经典作品可能同时存在：

- 原文和译文；
- 现代校订版和旧版；
- 有注释版和去注释版；
- OCR 版和人工校对版；
- UTF-8 和旧字符集版；
- 公共领域原作与仍受保护的现代翻译。

所以 source 至少应保存三层身份：

**作品身份 → 版本/数字化身份 → 当前文件快照。**

Project Ben-Yehuda 的做法很适合展示这三层关系：WebNR 保存作品 ID 与官方阅读页；正文来自官方 `public_domain_dump`；`download_url` 再固定到经过审核的 dump commit。上游明确声明该 dump 的数据文件属于公共领域，TXT 为 UTF-8，因此 WebNR 可以把它做成真正 direct-TXT，而无需推断“免费访问”等同于授权。

[打开 Project Ben-Yehuda TXT Starter](https://app.webnovel.win/sources/project-ben-yehuda-txt-starter)

## 5. 今天新增的 GITenberg Direct TXT Starter：为什么这次值得从 defer 升级

GITenberg 在 2026-08-31 的审计里曾经被暂缓。原因不是技术不可用，而是它和 WebNR 已有的 Project Gutenberg **发现入口**重叠很大：再加一个“点进去看 Gutenberg”的目录，对读者价值有限。

今天的问题换成了“没有目录的 raw TXT 如何形成可重复导入”。在这个问题下，GITenberg 提供了新的价值：**每本书是独立 Git 仓库，纯文本文件、README、LICENSE 和 metadata 可以一起固定到 commit。** 这让它成为 direct-TXT transport 的好样本，而不仅仅是第二个 Gutenberg 链接目录。

本轮加入三本书：

| 作品 | 上游 | 固定 TXT | 审计快照 |
| --- | --- | --- | --- |
| *Pride and Prejudice* | GITenberg / PG #1342 | `1342-0.txt` | `81db45c9c48c592f0b77f01fc59e677ad0a5634e` |
| *Frankenstein* | GITenberg / PG #84 | `84-0.txt` | `c98a483bd1f34e7366126b81bcedd1a6faee636e` |
| *The Adventures of Sherlock Holmes* | GITenberg / PG #1661 | `1661.txt` | `7e5dd2703fbf503c004063e96ab7c61262375e5f` |

三个仓库的 README 都把对应作品标为 Public Domain，并说明 GITenberg 保存的是 Project Gutenberg 图书的源文件。WebNR 只提交书目、provenance 和固定 raw URL；正文继续留在 GITenberg 上游。三个被选文件都小于 1 MiB，也没有 ZIP、登录、Cookie、JavaScript 或 source-specific parser 的依赖。

[打开 GITenberg Direct TXT Starter](https://app.webnovel.win/sources/gitenberg-direct-txt-starter)

这也是一个很有用的运营原则：**defer 是“当前能力/价值证据还不足”，不是永久判决。** 当读者问题、runtime capability 或上游证据变化后，同一个候选可以在新的、边界更窄的能力上重新审计。

## 6. URL 导入和本地导入的编码行为并不相同

这点对 raw TXT 特别重要。

当前本地导入会读取原始字节并执行 WebNR 的编码检测；远程 `importFromUrl()` 则调用浏览器 `fetch()` 后使用 `response.text()`。WebNR 当前没有在 URL 路径上再跑一次与本地文件相同的 `jschardet` fallback。

因此远程 direct-TXT source 的优先级应该是：

1. UTF-8；
2. ASCII（天然也是有效 UTF-8）；
3. 来源服务器明确且正确声明字符集；
4. 其他旧编码先下载为本地文件，再使用本地导入路径。

青空文库就是很典型的反例：许多作品的经典下载形态涉及 ZIP、Shift_JIS 和青空文库注记。WebNR 目前的 Aozora Bunko Starter 因此仍保持作品发现链接，而没有把“有 TXT 下载”直接升级为 direct import。真正升级时至少要同时解决 ZIP 解包、编码、注记处理、单作品权利状态和 fixture，而不是只找到一个 `.zip` URL。

这也解释了为什么一个 source 的“格式”不能只写 `TXT`。更准确的 contract 应写成：

```text
transport = HTTPS direct file
container = none
encoding = UTF-8
max observed size = < 1 MiB
identity = immutable commit URL
auth = none
cookies = none
pagination = none
update = reviewed PR only
```

这样的描述才足够让未来的测试知道要验证什么。

## 7. CORS：远程 TXT 能在浏览器打开，不代表能被 WebNR fetch

WebNR 是浏览器应用。URL import 使用浏览器 `fetch()`，因此跨域请求要遵守 CORS。一个链接在新标签页里能打开，只说明浏览器能导航到它；这不自动证明 JavaScript 能从 `app.webnovel.win` 读取响应正文。

遇到远程 TXT 导入失败，可以按这个顺序排查：

1. URL 本身是否返回成功状态；
2. 是否发生登录、验证码或 anti-bot challenge；
3. 响应是否允许跨域读取；
4. 是否发生重定向到 HTML 页面；
5. 文件尺寸是否异常；
6. 字符集是否正确；
7. URL 是否是可变的“latest”地址。

WebNR 不应该通过代理、模拟登录、绕 CAPTCHA 或偷带 Cookie 来“修复”一个没有 CORS 的来源。更合适的做法是寻找上游官方 API/feed/download endpoint、固定 release，或者保留 discovery link，让用户从来源站自己下载后进行本地导入。

## 8. 五个新的开放文本候选告诉我们：格式开放、许可开放、浏览器可运行是三件事

今天的 source patrol 额外筛查了五个此前未进入 WebNR 维护集合的开放文本 family。它们非常适合解释为什么 raw text admission 必须逐源判断。

### OpenITI：机器可读的伊斯兰文化文本，但许可与格式都需要显式继承

[OpenITI](https://openiti.org/documentation/) 提供上万份机器可读文本，主体使用 plain text + OpenITI mARkdown；版本 release 可通过 GitHub/Zenodo 固定。项目文档说明 release 采用 **CC BY-NC-SA 4.0**。它很适合作为研究与本地阅读候选，但一个公共 WebNR source 若要长期维护，就需要把署名、NonCommercial、ShareAlike、mARkdown 显示/清理方式和 release identity 一起设计进去。今天不把它降格成“看起来是 `.txt`，所以直接接”。

### Folger Shakespeare：官方就有 TXT 下载，但正文采用 CC BY-NC 3.0

Folger 官方提供 Shakespeare 的 PDF、DOC、HTML、TXT、XML、TEI Simple 下载，同时明确数字文本使用 **CC BY-NC 3.0**，要求署名并限制商业用途。对个人阅读它非常友好；对 WebNR 的长期 source admission，则需要先决定如何在产品层持续携带许可与 attribution，并明确未来商业场景。今天保留为强候选，不把 noncommercial 条款隐藏在一个普通 “Free TXT” 标签下面。

### CELT：能下载，也明确要求私人、教学和研究用途

University College Cork 的 [CELT](https://www.ucc.ie/en/research-sites/celt/) 有大量爱尔兰历史与文学文本。官方 FAQ 明确允许搜索、屏幕阅读、为私人使用/教学/研究下载或打印，同时要求不要把 CELT 文本下载后放到自己的服务器。这里最安全的能力是来源发现和私人导入说明；它不适合被误写成“WebNR 可以自由镜像的开放 TXT 库”。

### Perseus canonical：仓库总体 CC BY-SA 4.0，但内容以 TEI XML 为主且组件权利有差异

PerseusDL 的 canonical Greek/Latin GitHub 仓库总体采用 **CC BY-SA 4.0 unless otherwise indicated**，同时 README 提醒具体材料可能具有不同版权状态。它的主要机器格式是 TEI XML，不是 WebNR 当前的 raw TXT。未来若做 adapter，应保存 CTS/版本身份、item-level license 和 XML→阅读文本转换 fixture，而不是把 XML 直接塞进 TXT reader。

### EEBO-TCP Phase I：25,363 份转录进入公共领域，但核心发行形态是 TEI/XML

Text Creation Partnership 的 EEBO Phase I 文本自 2015-01-01 起发布到公共领域；官方/项目 GitHub 分发以结构化 XML/TEI 为核心。这是一个权利条件很强、格式转换工作也很明确的候选。真正的 WebNR integration 应先实现确定性的 TEI→plain-text 派生规则、标题/作者 identity 与 fixture，再决定是否生成 direct-reading catalog。

这五个候选里，没有一个需要靠“抓网页正文”来证明价值。相反，它们展示了更可持续的来源增长路线：优先找**公开 release、版本标识、机器文件、明确许可**，然后只实现 WebNR 当前能够测试的最窄能力。

## 9. 给自己的 TXT 文件夹生成 source：一份可操作 checklist

如果你手里有一个可以合法公开的 TXT 文件夹，可以按下面的顺序整理。

### Step A：先冻结一个输入快照

不要一边生成目录，一边继续改文件。先给文件夹一个版本：

```text
my-collection-2026-09-01/
```

如果使用 Git：

```text
git add texts metadata.csv
git commit -m "Freeze TXT collection 2026-09-01"
```

之后 source 指向 commit，而不是 `main`。

### Step B：把明显的临时文件排除

典型排除项：

```text
.DS_Store
Thumbs.db
*.tmp
*.bak
README-draft.txt
```

目录生成脚本应该有 allowlist（例如只接受 `.txt`），而不是“文件夹里有什么就全发出去”。

### Step C：建立 stable identity

优先级通常是：

```text
上游作品 ID > 明确的馆藏 ID > 你自己的永久 slug > 当前文件名
```

文件名可以改，稳定 ID 最好不要随标题标点变化。

### Step D：把 title/author 与 filename 分开

一份中文 CSV 就足够：

```csv
id,title,author,filename,license,page_url
001,作品一,作者甲,001.txt,Public Domain,https://example.org/works/001
002,作品二,作者乙,002.txt,CC-BY-4.0,https://example.org/works/002
```

生成 YAML 时，展示标题来自 `title`，文件传输来自 `filename`。这样以后重命名文件、修正书名、增加原文标题都不会把 identity 搅在一起。

### Step E：抽样检查编码，再声明 collection contract

至少抽取：

- 最小文件；
- 最大文件；
- 含罕见字符/繁体/日文假名/组合字符的文件；
- 不同年代生成的文件；
- 元数据里标记为不同语言的文件。

如果全部 UTF-8，就把 UTF-8 写进 source README；如果混合编码，先统一转码通常比让每次阅读都猜编码更稳定。转码必须保留原始文件 hash 和转换脚本版本，避免“清理之后不知道改了什么”。

### Step F：生成小而可 review 的 `search_index.yml`

第一次不要把 20,000 条一次塞进去。先选 3–20 个代表性作品，覆盖：

- 不同文件大小；
- 不同作者；
- 不同字符；
- 不同元数据形状。

先让 CI、浏览器导入和 public source route 都稳定，再讨论分页、sharding 或自动更新。

## 10. 哪些信息绝对不该被目录生成脚本带进去

TXT 目录很容易混入私人信息。生成 source 时要明确丢弃：

- 本机绝对路径，例如 `/Users/alice/Downloads/...`；
- Windows 用户名路径；
- Drive/Dropbox 私有分享 token；
- Cookie、Authorization header；
- 个人备注、阅读进度；
- 账号邮箱；
- 付费站下载 URL 中的临时签名；
- 未获授权的正文镜像地址。

WebNR source 需要的是公开可验证的书目与来源事实，不是你的文件系统快照。

## 11. 常见失败与最短修复路径

### 乱码

**本地文件：** 先让 WebNR 的本地检测处理；仍失败时，用文本编辑器确认实际编码，再转换为 UTF-8 后保留原文件备份。

**远程 URL：** 检查服务器 charset。来源没有可靠声明时，下载到本地再导入通常更稳。

### URL 在浏览器能开，WebNR 导入失败

优先怀疑 CORS 或重定向。不要用账号 Cookie、代理或验证码绕过作为默认方案。

### 导入后标题像 `1342-0`

这是远程 URL 文件名本身。把作品加入 WebNR source，让 discovery metadata 提供可读标题；底层 raw 文件仍可保持上游原名。

### 一个文件夹里重复了同一本书很多版本

不要只按标题去重。至少加入版本/来源字段，必要时保留多版，例如：

```text
Frankenstein — 1818 text
Frankenstein — 1831 text
```

对数字档案来说，“同名”远远不等于“同一字节或同一版”。

### 上游更新了文件

固定 commit 的 source 不会自动变。先审计新 revision，再通过新的 PR 更新 pin。这是刻意的设计：变化应该是可见事件，而不是后台漂移。

## 12. WebNR 接下来最值得做什么

raw TXT 路线已经从“只能读本地文件”走到了两个可验证 direct-source 示例：Project Ben-Yehuda 展示多语言 UTF-8 公共领域 dump，GITenberg 展示按作品拆分的 Git-backed 公共领域 TXT。下一阶段有三项价值很高：

1. **本地批量/文件夹导入 UI**：让用户选择多个 TXT，并在写入前看到标题、编码和冲突预览；
2. **远程 URL 的字节级编码路径**：让 remote import 与 local import 拥有一致、可测试的编码行为，同时尊重服务器 charset；
3. **生成式 source tooling**：从授权文件夹或 metadata CSV 生成 bounded `search_index.yml`，输出重复 ID、缺失许可、超大文件、非 HTTPS、可变 URL 等 lint。

这些能力一旦落地，“一个文件夹”就能沿着清晰的阶梯变成“可维护 source”，同时继续保持 WebNR 的 local-first 和最小网络权限边界。

## 参考与复核入口

### WebNR 实现与当前 source

1. [WebNR `NovelStorage`：本地与 URL TXT 导入实现](https://github.com/AutoArchive/webNR/blob/main/app/lib/storage.ts)
2. [Project Ben-Yehuda Public Domain TXT Starter](https://app.webnovel.win/sources/project-ben-yehuda-txt-starter)
3. [Aozora Bunko Starter](https://app.webnovel.win/sources/aozora-starter)
4. [GITenberg Direct TXT Starter](https://app.webnovel.win/sources/gitenberg-direct-txt-starter)

### 本轮 direct-TXT 上游

5. [GITenberg: Pride and Prejudice #1342](https://github.com/GITenberg/Pride-and-Prejudice_1342)
6. [GITenberg: Frankenstein #84](https://github.com/GITenberg/Frankenstein_84)
7. [GITenberg: The Adventures of Sherlock Holmes #1661](https://github.com/GITenberg/The-Adventures-of-Sherlock-Holmes_1661)
8. [Project Ben-Yehuda `public_domain_dump`](https://github.com/projectbenyehuda/public_domain_dump)

### 新候选的第一方政策与格式

9. [OpenITI documentation](https://openiti.org/documentation/)
10. [OpenITI releases](https://github.com/OpenITI/RELEASE)
11. [Folger Shakespeare download formats](https://www.folger.edu/explore/shakespeares-works/download/)
12. [Folger copyright policy](https://www.folger.edu/copyright-policy/)
13. [CELT, University College Cork](https://www.ucc.ie/en/research-sites/celt/)
14. [CELT FAQ / copyright and use](https://www.ucc.ie/en/research-sites/celt/faq/)
15. [PerseusDL canonical Greek literature](https://github.com/PerseusDL/canonical-greekLit)
16. [Text Creation Partnership: EEBO-TCP texts](https://github.com/textcreationpartnership/Texts)

### 浏览器文本与网络基础

17. [MDN: TextDecoder](https://developer.mozilla.org/docs/Web/API/TextDecoder)
18. [MDN: Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API)
19. [MDN: CORS](https://developer.mozilla.org/docs/Web/HTTP/Guides/CORS)

---

**一句话收尾：** 对没有目录的 TXT 合集，先把“文件能打开”升级成“作品身份、编码、来源、权利和快照都可解释”，再决定逐个本地读还是生成 source。目录本身很小，但它把一堆匿名文件变成了可以维护、可以复现、可以安全扩展的阅读集合。
