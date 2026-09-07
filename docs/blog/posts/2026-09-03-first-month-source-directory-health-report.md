---
title: WebNR 当前有哪些来源？第一个月来源目录与健康说明（2026-09-03）
date: 2026-09-03
slug: first-month-source-directory-health-report
description: 把 WebNR 第一个月的 22 个来源按“可直接导入 TXT、官方发现入口、内部回归源”重新整理，解释健康状态真正代表什么，以及读者应该怎样选。
categories:
  - Sources
  - WebNR
---

# WebNR 当前有哪些来源？第一个月来源目录与健康说明（2026-09-03）

**截至 2026-09-03，这一版 WebNR 维护了 22 个 source family。** 但“22 个来源”不是“22 个都能抓正文”：有些是可以直接导入 TXT 的稳定文本入口，有些只负责把你送到第一方作品/平台页面，还有一个是 WebNR 自己的回归样本。

如果你是读者，最重要的不是 source 数量，而是**它能做什么**。下面按能力重新整理，不再按运营流水账逐条解释。

[打开 WebNR Reader](https://app.webnovel.win/){ .md-button .md-button--primary }
[查看来源入口](https://www.webnovel.win/sources/){ .md-button }

## 一张表看懂三种来源

| 类型 | 适合做什么 | WebNR 会做什么 | WebNR 不会做什么 |
| --- | --- | --- | --- |
| **Direct TXT** | 想直接把明确许可/公版文本导入阅读器 | 用户选中后读取一个经过审计的 TXT | 不后台批量抓取、不自动换未经审计的镜像 |
| **Discovery** | 想找作品、平台、馆藏或讨论入口 | 保存 WebNR 自写说明和第一方链接 | 不复制平台正文、榜单、账号或评论数据 |
| **Internal** | 排查阅读器本身是否正常 | 提供 WebNR 自有的固定测试文本 | 不依赖第三方站点 |

所以，**link-only / discovery-only 不是“坏掉的 direct TXT”**。它就是一个边界明确的发现功能。如果将来发现可靠的第一方 Feed、API、OPDS、Atom 或可下载公版 corpus，会单独审计后再升级。

## 能直接读 TXT 的来源

截至这次健康检查，最值得普通读者关注的是下面四组真实 direct-TXT 样本：

| 来源 | 语言 | 为什么可以直接读 | 稳定性做法 |
| --- | --- | --- | --- |
| **Project Ben-Yehuda TXT Starter** | 希伯来语 | 项目公开的 public-domain dump | TXT 固定到经过审计的 Git commit |
| **GITenberg Direct TXT Starter** | 英语 | 选取明确公版作品的 raw TXT | 每本书固定到具体 commit，不跟随 mutable branch |
| **Folger Shakespeare TXT Starter** | 英语 | Folger 第一方提供 TXT，并保留其非商业/署名边界 | 直接链接第一方 TXT，不把 Shakespeare 公版错误扩大成编辑版无条件公版 |
| **CLiGS Spanish-American TXT Starter** | 西班牙语 | 选取公共领域文本；collection 以 CC BY 4.0 发布 | 三个小型 TXT 固定到审计 commit |

它们故意不是“大而全”的镜像。WebNR 先用很小、可以解释来源身份和许可的样本，把“点一本书后能稳定导入”做实，再考虑扩大覆盖。

### 这四组有什么区别

**Project Ben-Yehuda** 同时提供人类可读作品页和公共领域文本 dump，适合验证“官方 provenance + 固定快照”。

**GITenberg** 把每本公版书放在独立 Git 仓库里，适合验证“作品 ID + commit-pinned raw TXT”。它和 Project Gutenberg 的作品发现页不是同一能力。

**Folger Shakespeare** 提醒我们：原作者作品公版，并不等于现代数字编辑版没有使用条件。WebNR 保留 Folger 自己的许可与署名边界。

**CLiGS Textbox** 则验证结构化研究语料也可以选出很小的 plain-TXT 子集，只要 collection、文本权利、引用和版本都能说清楚。

## 负责“找”的来源

其余大多数 maintained family 是 discovery。可以按你想找什么来选：

### 公版与开放阅读

- **Aozora Bunko**：日文公版作品卡与馆藏发现。
- **Standard Ebooks**：高质量英文公版电子书作品页。
- **Project Gutenberg**：英文及多语言公版/授权作品入口。
- **Project Madurai**：泰米尔语数字文本。
- **Wolne Lektury**：波兰语开放文学。
- **Wikisource**：具体版本的开放文本页。
- **Global Grey / Online Books Page / Classics & Open Reading**：补充经典文学和开放馆藏发现。

### 网文平台

- **English Serial Platforms**：Royal Road、Scribble Hub、Tapas、Honeyfeed 等。
- **Chinese Web-Fiction Platforms**：起点、晋江、纵横、17K、七猫等第一方入口。
- **Japanese Web-Fiction Platforms**：なろう、カクヨム、エブリスタ、野いちご、ノベマ！等。
- **Korean Web-Fiction Platforms**：Munpia、NAVER SERIES、RIDI、Novelpia、BritG 等。
- **English Web-Fiction Discovery**：补充社区型英文连载入口。

### 类型与社区

- **Progression / LitRPG Publisher Discovery**：出版社第一方 catalog / collection。
- **Fanfiction Discovery**：AO3、FFN、Fimfiction、Scribble Hub 等发现入口。
- **Web Novel Discussion Radar**：Royal Road、Reddit、Scribble Hub Forum 等公开讨论入口。

这些来源的共同点是：**WebNR 帮你发现，不替平台重新托管内容。** 作品权利、账号、付费、年龄、地区、评论与社区规则继续由原平台负责。

## “健康”到底是什么意思

本次复测的结论是：**原有 21 个 family 都继续满足自己已经公开承诺的能力，没有因为真实失败而删除或降级；CLiGS 作为第 22 个 family 新增。**

这里的健康不是简单的 HTTP 200，而是：

- 入口仍然指向预期平台/作品，而不是无关页面；
- direct-TXT 的文件身份、格式和许可边界仍成立；
- discovery source 没有偷偷升级成未获证据支持的抓取；
- 上游失败时不会自动换成一个未经审计的镜像；
- 缺失的作者、更新时间、许可或流量数据不会被猜出来。

因此这次结果可以简单写成：

- 保留：**21**
- 新增：**1（CLiGS direct TXT）**
- 删除：**0**
- 降级：**0**
- 失败后自动替代：**0**

没有失败时，不需要为了“月报看起来有动作”硬找一个来源换掉。

## 为什么 AO3 / Fimfiction 之类还没有直接变成完整 API source

因为“存在接口”与“可以稳定做成 WebNR adapter”之间还有一层工程合同。

- **AO3**：Work Search discovery 已可用；canonical-tag Atom 是更深能力的候选，需要把 transport、stable identity、更新/删除与失败 fixture 做完。
- **Fimfiction**：官方 API 是很好的候选，但新的 API application/client identity 需要站方创建；WebNR 不会伪造凭据。

这些不是整个 WebNR 的 blocker，只是更深能力的前置条件。

## 读者应该怎么选

**只想读自己的 TXT：** 不需要任何 source，直接用 [TXT 导入指南](2026-09-01-raw-txt-collection-import-guide.md)。

**想找免费经典：** 先看 [免费经典小说阅读路线对比](2026-09-05-free-classic-ebook-reading-routes-compared.md)，再从 Project Gutenberg、Standard Ebooks、GITenberg 等选择。

**想找中文/日文/韩文网文：** 用对应区域平台 discovery；WebNR 会把你带到第一方平台，不替它们复制正文。

**想排查来源问题：** 先用 WebNR Originals 排除阅读器故障，再记录失败发生在“加源 / 搜索 / 详情 / 目录 / 正文”的哪一步。

## 下一步该深化什么

这份 2026-09-03 快照之后，WebNR 更值得做的是“能力变深”而不是单纯把 source 数量变大：

1. 更多明确 public-domain / open-license 的小型 direct-TXT pilot；
2. 可重复的 TEI → reading text 转换 fixture；
3. AO3 Atom 这类第一方 Feed adapter；
4. 在获得正式 client identity 后实现 Fimfiction API adapter；
5. 继续轮换复测已有来源，真实失败当天处理。

**这是一份日期化快照。** 2026-09-03 之后新增的来源不会倒填进这里；要看今天的最新目录，请以 [WebNR Sources](https://www.webnovel.win/sources/) 和当前仓库状态为准。
