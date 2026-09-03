---
title: 第一个月哪些 WebNR 来源真的还健康？22 个 maintained source 的全量复测与下一批候选
date: 2026-09-03
slug: first-month-source-directory-health-report
_description: WebNR 第一个月来源健康报告：逐个复测 maintained source family，区分直读 TXT、官方发现入口与内部来源，记录最后测试日期、语言、格式、失败与替代方案，并公布 DBNL、VWWP 等下一批候选。
description: WebNR 第一个月来源健康报告：逐个复测 maintained source family，区分直读 TXT、官方发现入口与内部来源，记录最后测试日期、语言、格式、失败与替代方案，并公布 DBNL、VWWP 等下一批候选。
categories:
  - Sources
  - Analysis
  - WebNR
---

# 第一个月哪些 WebNR 来源真的还健康？22 个 maintained source 的全量复测与下一批候选

先给结论：**截至 2026-09-03，WebNR 在第一个月维护起来的 21 个既有 source family 全部保留；本轮没有一个需要删除，也没有一个因为访问、版权边界或格式漂移而降级。** 今天另外把上一轮已经完成初审的 **CLiGS Textbox** 从候选推进成一个真实的西班牙语 direct-TXT starter，因此本轮结束后 maintained set 从 21 个增加到 **22 个**。

这句话有一个必须说明的限定：**“健康”不等于“我们能爬它”。** WebNR 为每个来源承诺的能力不同。一个只被批准为官方发现入口的 source，只要它的第一方页面仍然可用、链接语义没有漂移、WebNR 仍然只保存自写说明和跳转链接，它就是健康的；我们不会因为网页“抓得到”就擅自升级成目录同步。反过来，一个 direct-TXT source 则必须继续满足更严格的条件：正文地址仍指向已审计的第一方或 commit-pinned 文件、格式和体积仍在浏览器导入边界内、稳定身份没有变化、权利与署名说明仍然成立。

因此这次复测不是一个 HTTP 200 清单，而是一次 **capability-aware health check**：每个 maintained family 都按自己已经公开承诺的能力重新核对代表性路径、来源身份和失败边界。对 immutable Git snapshot，还重新核对 commit 身份；对平台型来源，则重新核对第一方发现入口；对 WebNR 自己维护的内部 TXT，则核对生产 reader 路径与 source definition。

[打开 WebNR Reader](https://app.webnovel.win/){ .md-button .md-button--primary }
[查看来源与导入说明](https://www.webnovel.win/sources/){ .md-button }

## 这次到底测了什么

我们把健康检查拆成四层，而不是把所有来源都塞进同一个“可访问/不可访问”二元框：

1. **身份仍然正确**：维护中的 URL、作品 ID、平台入口或 Git commit 仍然指向预期对象，而不是重定向到无关页面。
2. **当前批准的能力仍成立**：link-only 就只验证发现入口；direct-TXT 则验证具体 TXT transport、固定版本、大小与来源边界。
3. **权利与访问边界没有被悄悄扩大**：例如 Folger 的 TXT 仍然保留非商业条件；Project Gutenberg 的发现目录仍不被包装成 WebNR 的批量抓取接口；平台用户投稿也不会因为公开可读就被当作可再分发内容。
4. **失败时不会偷偷换来源**：如果一个 direct-TXT 上游以后失效，WebNR 应显示导入失败并进入审计，而不是自动去找一个未经审核的镜像顶上。

这也解释了为什么“link-only”在健康报告里不是黄色警告。它是一种**明确、可验证、风险较低的产品能力**。真正的警告应该是：我们声称某个 adapter 可以读取内容，但实际上没有稳定接口、没有版本化 fixture、没有明确 identity/update/delete 语义，或者需要绕过登录、机器人挑战和付费边界。当前 maintained set 里没有这种情况。

## 22 个 maintained source：2026-09-03 全量健康表

下面的“最后测试”表示这次 monthly health pass 对该 family 的当前能力重新核验日期。对于大型平台和目录，我们测试的是代表性第一方入口和 WebNR 已承诺的能力，而不是把整个站点的每一本书、每一篇帖子重新抓一遍。

| Source family | 主要语言 | 当前能力 / 格式 | 最后测试 | 状态 | 失败 / 替代说明 |
| --- | --- | --- | --- | --- | --- |
| WebNR Originals | 中文 | WebNR 内部 CC0 TXT，reader 直接导入 | 2026-09-03 | 健康 | 无失败；作为内部回归基线继续保留 |
| Aozora Bunko Starter | 日语 | 官方图书卡发现；ZIP/Shift_JIS 正文暂不直读 | 2026-09-03 | 健康 | 图书卡仍可用；无需替代 |
| Standard Ebooks Starter | 英语 | 官方作品页发现；EPUB 等留在来源站 | 2026-09-03 | 健康 | 目录与作品页可用；无需替代 |
| Project Madurai Starter | 泰米尔语 | 官方 Unicode/UTF-8 页面发现 | 2026-09-03 | 健康 | 继续按项目原始条款保守发现 |
| English Serial Platforms Starter | 英语 | Royal Road、Scribble Hub、Wattpad、Tapas、Honeyfeed 官方发现入口 | 2026-09-03 | 健康 | Royal Road 等代表性入口可用；不抓正文 |
| Project Gutenberg Starter | 英语 | 官方 ebook 落地页发现 | 2026-09-03 | 健康 | 仍保持 human-facing discovery，不做 catalog crawler |
| Global Grey Starter | 英语 | 官方 ebook 落地页发现 | 2026-09-03 | 健康 | 代表性经典作品页可用 |
| Online Books Page Starter | 英语 | CC0 curated metadata 对应的稳定书目页发现 | 2026-09-03 | 健康 | curated listing 当前可用；正文仍由下游来源负责 |
| Wolne Lektury Starter | 波兰语 | 官方作品目录发现 | 2026-09-03 | 健康 | 《Lalka》等页面可读，下载/API 能力未被擅自升级 |
| Wikisource Starter | 英语 | 具体版本作品页发现 | 2026-09-03 | 健康 | 1813 版 *Pride and Prejudice* 等版本页可用 |
| English Web-Fiction Discovery Starter | 英语 | Top Web Fiction、SpaceBattles、Sufficient Velocity 等发现入口 | 2026-09-03 | 健康 | Top Web Fiction 当前榜单与标签入口仍活跃 |
| Chinese Web-Fiction Platforms Starter | 中文 | 起点、晋江、纵横、17K、七猫官方平台发现 | 2026-09-03 | 健康 | 维持 link-only；不复制作品、榜单或账户数据 |
| Japanese Web-Fiction Platforms Starter | 日语 | なろう、カクヨム、エブリスタ、野いちご、ノベマ！官方发现 | 2026-09-03 | 健康 | 「小説を読もう！」等当前入口可用 |
| Korean Web-Fiction Platforms Starter | 韩语 | Munpia、NAVER SERIES、RIDI、Novelpia、BritG 官方发现 | 2026-09-03 | 健康 | NAVER SERIES / Munpia 等当前入口可用 |
| Progression & LitRPG Publisher Discovery Starter | 英语 | 出版社第一方 catalog / collection 发现 | 2026-09-03 | 健康 | Aethon 当前 catalog 可用；不复制商品和书籍数据 |
| Fanfiction Discovery Starter | 多语言 / 英语为主 | FFN、AO3、Fimfiction、Scribble Hub 等第一方发现 | 2026-09-03 | 健康 | 保持 link-only；AO3 Atom 仍是后续 richer-interface 候选 |
| Web Novel Discussion Radar Starter | 英语 | Royal Road / Reddit / Scribble Hub Forum 月度讨论入口 | 2026-09-03 | 健康 | Royal Road Recommendations 当前仍有活跃主题；月度快照不做后台轮询 |
| Classics & Open Reading Discovery Starter | 多语言 | Lit2Go、Alpheios、Scaife 官方开放阅读发现 | 2026-09-03 | 健康 | 继续保留 item-level rights 差异，不做 blanket redistribution |
| Project Ben-Yehuda Public Domain TXT Starter | 希伯来语 | commit-pinned UTF-8 direct TXT | 2026-09-03 | 健康 | 官方阅读页与固定 dump 身份仍成立；无镜像替代 |
| GITenberg Direct TXT Starter | 英语 | commit-pinned raw TXT | 2026-09-03 | 健康 | 三个固定 Git snapshot 保持可复现；不跟随 mutable branch |
| Folger Shakespeare TXT Starter | 英语 | 第一方 TXT direct import | 2026-09-03 | 健康 | Folger 仍提供 TXT；继续保留非商业使用边界 |
| **CLiGS Textbox Spanish-American TXT Starter** | **西班牙语** | **commit-pinned direct TXT** | **2026-09-03** | **新接入 / 健康** | 三个 <1 MiB TXT；PD 文本 + collection CC BY 4.0，固定到审计 commit |

从运营角度看，这次最重要的数字其实不是“22”，而是 **0 个静默失败、0 个为了凑数量而强行降级、0 个未经审计的自动替代**。来源越多，如果没有能力边界，长期维护成本会呈爆炸式增长；反而是每个 family 都有明确的“我到底承诺什么”，才有可能每天自动复测而不把网站变成不可控的抓取器集合。

## 四个真正能直接读 TXT 的来源，现在有什么不同

第一个月最明显的进展，是 WebNR 已经不再只有“链接目录”。maintained set 里现在有四类真实 direct-TXT 样本，而且故意选择了不同的来源结构。

### Project Ben-Yehuda：官方公共领域 dump + 固定 commit

Project Ben-Yehuda 的优势是来源项目自己同时给出人类可读作品页和公共领域 dump。WebNR 把具体作品 ID 与官方页面留作 provenance，实际 TXT 则固定到审核过的 Git commit。这样上游继续更新不会让已发布的 WebNR 条目在没有 PR 的情况下改变字节内容。

[打开 Project Ben-Yehuda TXT Starter](https://app.webnovel.win/sources/project-ben-yehuda-txt-starter)

### GITenberg：每本书一个 Git 仓库

GITenberg 适合演示另一种身份：作品对应独立仓库，WebNR 选择具体纯文本文件并固定到具体 commit。它和 Project Gutenberg Starter 并不重复——后者仍是面向读者的官方发现页，前者用很小的样本验证“一个 Git-backed raw TXT 能否稳定直接导入”。

[打开 GITenberg Direct TXT Starter](https://app.webnovel.win/sources/gitenberg-direct-txt-starter)

### Folger Shakespeare：第一方 TXT，但不是“因为 Shakespeare 公版所以什么都能做”

Folger 的例子尤其能说明为什么我们不只看原作者死亡年份。Folger 提供自己编辑的高质量数字文本和 TXT 下载，并明确说明相关数字文件可用于非商业目的。WebNR 因此直接链接 Folger 第一方 TXT，但 source 里保留 Folger Digital Texts 的许可与署名信息，没有把“Shakespeare 原作公版”错误扩大成“Folger 编辑版无条件公版”。

[打开 Folger Shakespeare TXT Starter](https://app.webnovel.win/sources/folger-shakespeare-txt-starter)

### 今天新增 CLiGS：公共领域文本 + CC BY 4.0 collection + commit-pinned TXT

CLiGS Textbox 上一轮已经进入候选队列，今天完成了一个真正的小型 pilot。我们没有把整个巨大 Textbox 仓库一口气接进来，而只选择了 **Collection of 19th Century Spanish-American Novels (1880–1916)** 中三个 plain-text 文件：

| 稳定 ID | 作品 | 作者 | 固定文件大小 |
| --- | --- | --- | ---: |
| `nh0003` | *Laucha* | Roberto Payró | 72,519 bytes |
| `nh0004` | *Inca* | Roberto Payró | 136,407 bytes |
| `nh0011` | *Rumbo* | Eugenio Cambaceres | 200,133 bytes |

上游 collection README 明确说明作者版权已经到期，并把该 collection 以 **CC BY 4.0** 发布；它还给出了建议引用方式。三个条目都固定到 `cligs/textbox` 的审计 commit `1b91e940475c8a7e866457a3953fed5edb0a29f1`，而不是跟随 mutable `master`。浏览器只有在读者明确选择某一本时才请求对应 raw TXT；没有 bulk clone、后台 polling、代理、Cookie、账号，也没有把其他 CLiGS collection 自动推定为相同许可。

[打开 CLiGS Spanish-American TXT Starter](https://app.webnovel.win/sources/cligs-textbox-spanish-american-txt-starter)
[查看 CLiGS collection 的来源说明](https://github.com/cligs/textbox/tree/1b91e940475c8a7e866457a3953fed5edb0a29f1/spanish/novela-hispanoamericana)

这就是我们希望以后 richer source 遵循的模式：**先挑一个权利、格式、身份都能说清楚的小样本，把 runtime contract 和失败语义做实，再扩大覆盖。**

## 为什么 14 个左右的目录型 family 仍然只做 link-only

平台型来源与公共领域文本库完全不是一个问题。Royal Road、起点、AO3、NAVER SERIES、Fimfiction 等站点上的大量内容由不同作者提交，可能包含账号、评论、评分、付费、年龄或地区边界。即使公开网页今天能被浏览器打开，也不能推出 WebNR 获得了“把整个目录同步过来”的授权，更不能推出每个页面都适合无人值守抓取。

所以 link-only 的验收标准很明确：

- 第一方发现入口仍然存在；
- URL 没有变成无关营销页或登录墙；
- WebNR 的说明没有假装拥有正文或平台 metadata；
- 任何有付费、账号、年龄、机器人策略或作者权利差异的部分仍留给原平台；
- 如果以后存在官方 API、Atom、OPDS 或可下载 public-domain corpus，则**单独为那个 richer capability 做新的审计**。

这也是为什么 AO3 已经从“完全 defer”进展到健康的 Work Search discovery，但 canonical-tag Atom feed 仍留在下一层；Fimfiction 的官方 API 也仍然是优先 richer adapter 候选，但新的 API application/client identity 需要站方创建，不能为了自动化运营伪造凭据。它们都不是 WebNR 日常运营 blocker，只是升级能力之前需要满足的独立前提。

## 本月没有失败来源，所以没有制造“替代源”

健康报告通常容易诱导出一种错误动作：既然要写“failure / replacement”，就好像必须找一个失败然后换掉。今天的证据不支持这么做。

21 个既有 maintained family 在自己承诺的能力层都继续成立，因此：

- **删除：0**
- **降级：0**
- **因为失败而替换：0**
- **新增：1（CLiGS direct-TXT pilot）**

“没有替代”并不是没做事，而是避免把运营 KPI 变成破坏稳定性的理由。真正需要替代的情况应该有明确证据，例如第一方入口长期消失、内容身份发生不可接受漂移、许可发生变化、TXT 从可读文本变成不受支持的格式、上游开始要求账号/授权，或者来源持续返回不可恢复错误。到那时我们会在同一周期降级、移除或找到经过独立审计的替代；今天没有发生。

## 下一批 5 个新候选：谁最值得接

除了复测 maintained set，今天也继续筛选此前没有进入跟踪表的新 source family。候选不是“搜索结果收藏夹”；至少要把格式、权利、来源身份和 WebNR 能提供的真实用户价值看清楚，才会进入下一阶段。

### 1. DBNL dataset：当前最强的下一批 direct-TXT / TEI 候选

荷兰皇家图书馆（KB）维护的 [DBNL dataset](https://www.kb.nl/en/research-find/for-researchers/data-services-apis/datasets/dbnl-dataset) 很值得优先处理。官方资料说明，DBNL 的书/卷数据可提供 full text、TEI XML 和 `.txt`，并且公共领域文本可作为数据集获取；较新的受版权保护材料则有不同限制。

这意味着下一步不应该“接整个 DBNL”，而应该选择**明确 public-domain 的小型子集**，保存 dataset/item identity、版本和权利证据，做一个和 CLiGS 类似的 direct-TXT pilot。它现在排在候选队列第一位。

### 2. Victorian Women Writers Project：TEI 很有价值，但 header 不能丢

[Victorian Women Writers Project](https://tei-c.org/activities/projects/victorian-women-writers-project/) 约有两百份文本，原始作品主要属于公共领域；项目记录同时给出了下载、传输、复制、分发原始文本的条件，但要求保留电子文本 header，Indiana 项目贡献本身还有单独的版权边界。

所以它不是“看到 public domain 就去掉 TEI header 抽正文”。正确路径是先做一个确定性的 TEI fixture：哪些 header/attribution 必须保留、哪些节点转成 reader text、identity 怎样稳定、转换结果怎样 version。完成后才适合 native adapter。

### 3. Biblioteca Italiana：格式很理想，reuse license 还要补齐

Sapienza 的 [Biblioteca Italiana](https://bibliotecaitaliana.it/) 提供超过一千六百份意大利文学文本，并使用 XML-TEI 等结构化格式。对 WebNR 来说，这是一个很好的意大利语覆盖机会。

但今天的第一方资料核验还没有拿到足够明确、可落到 adapter contract 的 blanket reuse license，所以不会因为“freely accessible/downloadable”就自动解释成“可由 WebNR 批量再发布”。先补权利证据，再做 TEI fixture。

### 4. Wright American Fiction 1851–1875：规模大，但先解决 endpoint 与质量层级

[Wright American Fiction](https://tei-c.org/activities/projects/wright-american-fiction-1851-1875/) 的历史 corpus 很大，也有 TEI/SGML 和 page images。问题在于不同部分的编辑/校对质量并不完全相同，而且本轮没有获得足够新的第一方 blanket redistribution 与稳定下载接口证据。

因此当前价值更接近“值得研究的 corpus”，而不是“今天就能变成 source”。下一轮如果能明确 current endpoint、edited/OCR quality boundary 和使用权利，再决定是 discovery 还是 native text adapter。

### 5. Project Laurens Jansz. Coster：内容有价值，但 legacy delivery 是风险

荷兰皇家图书馆对 [Project Laurens Jansz. Coster](https://www.kb.nl/en/discover-and-experience/digital-publications/project-laurens-jansz-coster) 的说明显示，它长期提供无版权限制的荷兰经典文学数字文本，但项目本身已经不再更新。

这并不让它“失败”；只是把问题从抓取变成**长期地址和归档身份**。如果以后接入，应优先寻找 KB 能解释、可长期复现的 archival route，而不是依赖一个多年不维护的旧站点 URL。

今天这五个候选中，**DBNL 最接近下一次真实 direct-TXT ship；VWWP 最适合推动 TEI runtime；Biblioteca Italiana 和 Wright 需要先补权利/endpoint 证据；Coster 则应当以 archival discovery 的方式处理。**

## 还有哪些已经排队，但今天不应该抢跑

上一轮进入队列的 **ELTeC** 和 **CoNSSA/TextGrid** 仍然有意义，不过它们更适合作为“把 TEI 转成稳定 reading text”的 fixture，而不是今天为了数量再加两个链接。我们需要先定义：

- 选择哪些 TEI 元素进入正文；
- 标题、段落、诗行、脚注和舞台说明怎样映射；
- 不能识别的节点是报错、保留还是忽略；
- 转换前后如何保存 source identity；
- 版本更新时如何证明没有把同一个 ID 悄悄换成另一份文本；
- 权利与署名怎样从 source manifest 一直保留到 reader。

这条路线和 8 月 30 日发布的 Legado compatibility work 很像：**先把可验证的最小 runtime 做出来，再扩能力。** 对 source adapter 来说，可复现的转换 fixture 比“支持 TEI”四个字更重要。

## 这份健康报告没有告诉我们的：真实流量表现

来源健康和搜索表现是两套证据。今天能够证明 22 个 maintained source 的产品/来源能力，但不能从这里推导“哪个来源带来最多用户”“哪篇文章 CTR 最高”或“新增 CLiGS 会提升多少搜索流量”。

WebNR 配置的 GA4 / Search Console 导出在本轮仍然没有可用数据文件；这意味着相关指标是**不可用（unavailable），不是 0**。同样，在当前运营连接里没有可用于 `webnovel.win` 的 Cloudflare provider request-analytics 数据，因此不会拿不存在的请求量填健康报告，也不会为了“优化”而改动已经验证的 GA4 `G-DGH8HNQKE4`、完整 `page_location` / query-bearing `page_path` 或 privacy signals 配置。

等真实 provider export 恢复后，source health 可以和读者行为结合：例如 source add、导入成功、阅读启动、返回访问、source-specific failure rate。但在那之前，**能测到的就报告能测到的，缺失证据就明确写缺失。**

## 下一阶段：从“来源多”转向“来源能力更深”

第一个月已经证明 WebNR 可以每天扩展来源而不把自己变成一个不受控 crawler。第二个月更值得做的不是把 22 变成 100，而是把 capability ladder 向下推进：

**第一层：稳定发现链接** → **第二层：有明确权利和身份的 direct TXT / feed** → **第三层：有 fixtures 的 declarative / structured adapter** → **第四层：明确状态、更新、删除与失败语义的 richer runtime**。

今天的 CLiGS pilot 是第二层的一个新例子。下一步优先顺序也因此很明确：

1. **DBNL public-domain direct-TXT 小样本**；
2. **完成第一套确定性的 TEI→reading-text fixture**，优先为 VWWP / ELTeC / CoNSSA 之类的结构化开放文本服务；
3. **继续 AO3 Atom 的 transport/identity/update fixture**，不把 Work Search 的 link-only 能力和 feed 能力混为一谈；
4. **Fimfiction API 在获得官方 application/client identity 后再实现** OAuth、rate limit、cache、pagination、update/delete 和 versioned fixture；
5. maintained set 继续轮换复测，任何真实失败在发现当天处理，而不是等下一份月报。

一个来源真正“健康”的标志，不是今天 curl 成功，而是半年后我们仍然能回答：**它是谁、我们为什么可以这样用、用户点击后发生什么、上游变化会不会静默改内容、失败时怎样回滚。** 这 22 个 maintained family 现在至少都有这个问题的明确答案。

[返回 WebNR 文档首页](https://www.webnovel.win/)
