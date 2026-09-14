---
title: 欧洲小语种免费电子书去哪找？丹麦 ADL、捷克 MLP、匈牙利 MEK 怎么选
date: 2026-09-14
slug: european-minority-language-free-ebooks-adl-mlp-mek
description: 2026 年 9 月实测丹麦 Arkiv for Dansk Litteratur、布拉格市图书馆免费电子书与匈牙利电子图书馆 MEK，比较它们适合找什么、能拿到什么格式，以及为什么“免费阅读”不等于可以把整个站直接镜像进阅读器。
categories:
  - Reader guides
  - Sources
  - Recommendations
---

# 欧洲小语种免费电子书去哪找？丹麦 ADL、捷克 MLP、匈牙利 MEK 怎么选

**先给结论：**如果你在找丹麦、捷克或匈牙利的经典文学，不必先去一个英文聚合站碰运气。三条更直接的第一方路线是：

- **丹麦文学**：先看 **Arkiv for Dansk Litteratur（ADL）**；它适合找经典丹麦作者，丹麦皇家图书馆还单独发布了一个明确标记为 Public Domain 的 156 部作品数据集。
- **捷克文学与世界经典捷克语版本**：先看 **Městská knihovna v Praze（布拉格市图书馆，MLP）E-knihovna**；官方页面目前写明有 3000 多种免费可下载电子书，常见格式包括 PDF、EPUB 和 PRC，另外还有无需注册即可阅读的 Webové knihy。
- **匈牙利语电子书**：先看 **Magyar Elektronikus Könyvtár（MEK）**；它是匈牙利国家塞切尼图书馆体系下的长期电子图书馆，适合按作者、书名和主题找匈牙利语或与匈牙利相关的电子出版物，但具体再利用条件要看每本书自己的版权说明。

这三家最重要的共同点不是“都能免费下载”，而是**来源身份和权利说明比随机 TXT 聚合站清楚得多**。最重要的差别则是：ADL 有一个单独明确的公版数据子集；MLP 面向普通读者提供大量免费成品电子书；MEK 则把作品级权利条件放得更前，不能把整个馆藏当成统一许可。

本文核验日期为 **2026-09-14**。WebNR 当前只把 ADL 接成了一个严格的 **link-only discovery source**：点击后回到 DSL / 丹麦皇家图书馆第一方页面，不抓取 ADL 正文、ZIP、TEI/XML、PDF 或目录数据，也不声称已经能直接解析它的数据集。

[添加 ADL Danish Literature Discovery Starter](https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Fadl-danish-literature-discovery-starter){ .md-button .md-button--primary }
[查看免费经典小说路线比较](2026-09-05-free-classic-ebook-reading-routes-compared.md){ .md-button }

## 一张表先选路线

| 你现在想找什么 | 最先去哪里 | 目前能确认的边界 | WebNR 现在怎么处理 |
| --- | --- | --- | --- |
| 丹麦经典文学、老版本、可检索历史文本 | **ADL** | 更广 ADL 中不同数字版可能有编辑/出版权利；Royal Danish Library 另有一个明确 Public Domain 的 156 部作品数据集 | 新增 link-only source，只链接项目、馆藏与公版数据集说明 |
| 捷克小说、戏剧、诗歌、世界经典捷克语电子版 | **MLP E-knihovna** | 官方称 3000+ 免费下载，但馆藏也含不同出版社提供的电子书，不能把“免费获取”自动改写成统一再分发许可 | 当前作为第一方发现路线，不批量镜像 |
| 匈牙利语或匈牙利相关电子出版物 | **MEK** | 每个文档有自己的使用条件；MEK FAQ 明确要求查看作品版权页，CC 条款或权利人条件可能各不相同 | 当前作为第一方发现路线，不做全馆抓取 |
| 已经拿到本地 TXT | **WebNR Reader** | 本地文件由你自己提供；正文和阅读进度保存在当前浏览器 | 直接导入 TXT，不需要把第三方网站变成“书源” |

## ADL：找丹麦经典，先分清“整个阅读站”和“明确公版数据集”

ADL 的全名是 **Arkiv for Dansk Litteratur**。丹麦语言文学学会（DSL）的官方项目页说明，它与 **Det Kgl. Bibliotek（丹麦皇家图书馆）** 合作维护，覆盖从中世纪到 20 世纪中叶的经典丹麦文学，当前项目说明列出 **78 位作者**，既有影印，也有可检索文本。

这里最值得读者注意的是一个很容易被忽略的权利分层：**老作品不等于这个网站上的每一种现代数字版、导言和编辑成果都自动没有版权。** ADL 的部分 PDF 甚至会明确写出出版者仍持有版权，同时说明其中有些作品已经完全处于 public domain。

好消息是，丹麦皇家图书馆在自己的 LOAR 开放仓库里另外发布了一份 **“Arkiv for Dansk Litteratur: tekster uden for ophavsret”** 数据集。官方条目把它标成 **Public Domain Mark 1.0**，并说明其中包含 **156 部、1851–1945 年的作品**。

因此，如果你的目的只是“找丹麦经典在哪里读”，可以从 ADL 项目开始；如果你的目的进一步变成“我需要一个权利边界明确、可用于文本研究的数据子集”，则应看这份单独的数据集，而不是自行推断整个 ADL 都是同一许可。

第一方入口：

- [DSL — Arkiv for Dansk Litteratur](https://dsl.dk/projekter/arkiv-for-dansk-litteratur)
- [Det Kgl. Bibliotek — ADL collection](https://loar.kb.dk/collections/bd32ee7e-d78d-413b-9639-e157735010c6)
- [ADL public-domain dataset](https://loar.kb.dk/items/4eccf49e-ba91-43f0-bb39-81f7b1069d1e)

### 为什么 WebNR 现在只做 link-only？

因为“有明确公版数据集”仍不等于“浏览器阅读器已经能正确处理这个数据集”。它是压缩数据包，ADL 的文本生态还涉及结构化文本。WebNR 当前路线要求先把 **TEI / 结构化文本 → 阅读正文** 的转换做成可复现 fixture，明确作品身份、未知节点、编码、资源上限与失败行为，再谈 direct-text 兼容。

所以现在最可靠的产品行为只是：**把你送到正确的第一方入口，不伪装成已经支持 ADL 数据集导入。**

## MLP：想直接下载成品电子书，它对普通读者最友好

布拉格市图书馆 **Městská knihovna v Praze（MLP）** 的官方电子书页面目前写得很直白：E-knihovna 提供 **3000 多种免费可下载标题**，包括捷克和世界文学、经典、侦探小说、戏剧与诗歌，常见格式是 **PDF、EPUB、PRC**。

它另外提供 **Webové knihy**：官方说明这些网页版电子书可以免费、无需注册，直接在浏览器中打开，并可借助浏览器离线能力继续阅读。

这条路线适合：

- 想找捷克经典或捷克语译本；
- 不想自己处理原始 TXT；
- 已经有 EPUB / PDF 阅读器，希望直接拿成品文件；
- 只想在线打开一本书，而不是先研究一个数据集。

不过 MLP 自己也说明，其电子书区还包括从不同出版社取得的电子书。因此这里同样要区分：**“图书馆允许你免费拿到一本电子书”与“第三方可以把整套文件和元数据重新镜像到另一个服务”不是同一句话。** 对 WebNR 来说，在没有作品级许可和自动访问规则之前，第一方链接比批量抓取更诚实。

第一方入口：

- [MLP — E-knihy](https://www.mlp.cz/cz/o-knihovne/sluzby/e-zdroje/e-knihy/)
- [MLP — Webové knihy](https://www.mlp.cz/cz/o-knihovne/sluzby/e-zdroje/webove-knihy)

## MEK：馆藏很有价值，但一定要看每本书自己的版权页

**Magyar Elektronikus Könyvtár（MEK，匈牙利电子图书馆）** 是这三条路线里最能说明“免费访问为什么不等于统一许可”的例子。

MEK 的官方英文说明明确欢迎其他网站**链接**到其馆藏和单个文档；同时，它要求进入馆藏的电子文档必须能够在不侵犯现行版权的情况下分发，对当代作者则需要权利人授权或相应的 Creative Commons 许可。

但在“我下载以后能做什么”这件事上，MEK FAQ 又进一步提醒：应查看每本书封面页中的版权条件。馆内文档通常面向个人学习、阅读和不发生再分发的非营利用途；如果作品明确带有 CC 许可，则按相应许可执行；其他更大范围的重新发布、改编或传播需要看权利人条件。

换句话说，**MEK 很适合作为可靠的“去哪里找匈牙利电子书”入口，却不适合被粗暴地概括成“整站 public domain”。**

第一方入口：

- [Magyar Elektronikus Könyvtár](https://mek.oszk.hu/)
- [MEK — visitor / linking information](https://mek.oszk.hu/html/kapcsolateng.html)
- [MEK FAQ](https://www.mek.oszk.hu/html/gyik.html)

## “免费”“public domain”“可被阅读器自动导入”其实是三件事

看到一个数字图书馆时，可以用下面三个问题快速避免误判：

1. **读者能否免费打开或下载？** 这是访问条件。
2. **具体作品 / 具体数字版本允许怎样再利用？** 这是版权与许可条件。
3. **网站是否允许客户端自动抓取，且 WebNR 是否真的支持它的格式？** 这是机器访问与兼容能力。

三项都要分别成立，才适合进一步做 direct-text 或自动目录 adapter。只满足第一项时，做一个清楚的 first-party link 往往反而是最可靠的实现。

这也是为什么 WebNR 对 ADL 先从 link-only 开始：它没有把“156 部公版作品”的结论外推到整个 ADL，也没有把一个 ZIP / TEI 数据集伪装成已经能直接阅读的 TXT。

## 如果我只想尽快开始读，应该怎么选？

- **丹麦语经典**：先开 ADL；只在需要明确公版数据子集时再看 LOAR 的 156 部作品数据集。
- **捷克语成品电子书**：先去 MLP；EPUB / PDF 用户最省事。
- **匈牙利语电子书**：先用 MEK 找书，再读具体作品的版权说明。
- **手上已经有 TXT**：直接导入 WebNR，不需要为了“统一入口”再把第三方数字图书馆套一层抓取器。

如果你主要找英语公版经典，可继续看 [Project Gutenberg、Standard Ebooks、Alice & Books、GITenberg 与 WebNR 怎么选](2026-09-05-free-classic-ebook-reading-routes-compared.md)。如果你的问题是“已经下载了一堆 TXT 怎么整理和导入”，看 [没有目录的 TXT 小说合集怎么导入 WebNR](2026-09-01-raw-txt-collection-import-guide.md)。

核验日期：**2026-09-14**。数字馆藏、版权说明、下载格式和站点访问规则都会变化；具体作品仍应以第一方页面的最新状态为准。
