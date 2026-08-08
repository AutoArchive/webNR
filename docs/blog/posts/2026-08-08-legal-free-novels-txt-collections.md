---
title: 2026 年哪里能合法免费看小说？公版、作者授权与 TXT/电子书资源目录
date: 2026-08-08
slug: legal-free-novels-txt-collections
description: 面向读者整理 2026 年仍可核验的公版、作者授权和开放数字图书馆路线，并区分可以直接读、只能跳转发现、需要逐本判断版权和目前尚不适合 WebNR 直接导入的来源。
categories:
  - Reader guides
  - Sources
---

# 2026 年哪里能合法免费看小说？公版、作者授权与 TXT/电子书资源目录

**直接答案：** 想找长期稳定、来源清楚的免费小说，优先顺序可以很简单：先看明确公版或由作者授权的数字图书馆，再看开放电子书项目和机构馆藏，最后才把搜索引擎、镜像站和社区分享当作发现线索。对 WebNR 用户而言，当前最容易直接阅读的是明确允许分发的 TXT；EPUB、扫描 PDF、特殊编码文本和只提供作品页的馆藏，应该先作为发现链接，等阅读器具备对应解析器和逐本权利判断后再开放直接导入。

本文于 **2026 年 8 月 8 日**重新核验来源项目的官方页面、版权说明、访问方式和 WebNR 当前能力。今天同时上线一个新的 **Standard Ebooks Starter** 发现源，读者可以把四部经典小说的官方作品页加入 WebNR 来源列表：

[添加 Standard Ebooks Starter](https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Fstandard-ebooks-starter){ .md-button .md-button--primary }

这个源只提供官方作品页链接，不复制 EPUB，也不把电子书下载地址伪装成 TXT。此前已经上线的 [Legado 书源查找与验源指南](2026-08-06-legado-source-guide.md) 解释了为什么“规则文件公开”与“内容可以合法获取”必须分开判断；本文把重点放在读者真正可以使用的免费阅读路线。

## 先看一张表：不同“免费来源”其实不是同一种东西

| 来源类型 | 读者能得到什么 | WebNR 当前适合的方式 | 最容易忽略的边界 |
| --- | --- | --- | --- |
| 作者授权或项目原创 TXT | 直接文本文件 | 可以直接导入或建立静态目录 | 授权范围是否允许再分发 |
| 公版电子书项目 | 在线阅读、EPUB、作品页、目录 Feed | 先做作品发现；TXT 可直接读，EPUB 等解析器完成后再接入 | 公版状态随国家/地区而变化 |
| 国家图书馆与数字馆藏 | 作品页、扫描件、全文或元数据 | 作品发现和跳转 | “可查看”不等于“可批量下载或再分发” |
| Wikisource 等协作文本库 | 网页正文、导出文件、版本历史 | 语言/作品级 adapter | 页面许可、原作版权和译文版权可能不同 |
| 搜索与聚合 API | 元数据、可读状态、落地页 | 发现层，不当作内容许可证 | API 返回“可见”不代表内容可自由复制 |

这里最关键的判断是：**免费访问、公共领域、开放许可、机构允许下载、允许机器访问、允许第三方再分发，是六个不同问题。** 一个页面在浏览器里免费打开，只说明此刻可以访问；WebNR 若要把它变成长期可维护的书源，还需要知道来源是谁、作品权利状态、请求方式、格式、编码和失败边界。

## 第一组：最适合普通读者长期收藏的免费项目

### Standard Ebooks：适合想要排版精良英文经典的人

[Standard Ebooks](https://standardebooks.org/) 把公版文学制作成高质量电子书，并提供在线阅读、兼容 EPUB、Kindle/Kobo 格式以及作品源码。项目说明由 Standard Ebooks 制作的内容采用 **CC0 1.0**；每本书的页面又单独提示作品在美国是否被认为已经没有版权限制，并提醒美国以外读者核对所在地法律。

今天核验的四个官方页面是：

- [Pride and Prejudice — Jane Austen](https://standardebooks.org/ebooks/jane-austen/pride-and-prejudice)
- [Frankenstein — Mary Shelley](https://standardebooks.org/ebooks/mary-shelley/frankenstein)
- [The Picture of Dorian Gray — Oscar Wilde](https://standardebooks.org/ebooks/oscar-wilde/the-picture-of-dorian-gray)
- [The Time Machine — H. G. Wells](https://standardebooks.org/ebooks/h-g-wells/the-time-machine)

这些页面都能直接在线阅读，也提供电子书下载。WebNR 目前仍以 TXT 为正式支持格式，因此今天的集成选择“**链接到官方作品页**”，而不是做一个看似方便、实际没有经过 EPUB 安全测试的下载按钮。这样读者马上获得稳定入口，同时阅读器不会虚假宣称已经支持一种格式。

Standard Ebooks 还提供 OPDS/Atom/RSS 形式的电子书 Feed，不过完整 Feed 存在不同访问路径。今天的 Starter 不依赖这些 Feed；后续只有在明确符合公开或开源项目访问条件并建立固定测试后，才会升级为自动目录 adapter。

### Project Gutenberg：目录巨大，但机器访问要走机器路线

[Project Gutenberg](https://www.gutenberg.org/) 是最常见的英文免费电子书入口之一。它的目录以美国版权判断为基础，既有美国公共领域作品，也可能保留历史上经权利人授权发布的条目。因此“Gutenberg 上有”并不适合被简化成“全世界都属于公版”。

对普通读者，直接打开作品落地页最清楚。对程序和书源，项目明确区分主网站的人类访问与机器人/批量访问，并提供机器可读目录、镜像和离线元数据路线。WebNR 后续的 Gutenberg adapter 应当使用这些官方机器入口、缓存目录结果、保持低频，并尽量链接作品页，而不是让每个客户端反复抓取主站网页或把第三方镜像当作权威来源。

Gutenberg 因此很适合作为“大目录发现层”：它能回答“这本经典有没有合法免费版本”，但具体下载、再分发以及所在法域是否已进入公共领域，仍需要看单本作品与当地法律。

### 青空文库：日文经典入口已经可以在 WebNR 里发现

[青空文库](https://www.aozora.gr.jp/) 是日本文学的重要免费数字项目。WebNR 已经上线 **Aozora Bunko Starter**，当前包含《吾輩は猫である》《羅生門》《走れメロス》《よだかの星》四个经过核验的官方图书卡链接。

青空文库的图书卡/书架数据有明确的再利用条件，但具体作品仍需考虑原作、译文等权利状态；文件格式还常见 ZIP、Shift_JIS、青空文库注记和 XHTML。WebNR 因此先把它做成作品发现源。等 ZIP、编码和 ruby 注记解析有版本化测试后，才适合讨论直接阅读。

这个策略对其他区域图书馆同样适用：**先把稳定、官方、可解释的作品入口交给读者，再逐步增加格式能力。**

### Project Madurai：泰米尔语电子文本的区域性宝库

[Project Madurai](https://www.projectmadurai.org/) 是一个长期运行的志愿数字化项目，目标是制作并免费发布泰米尔文学电子文本。官方说明称收藏中的作品来自公共领域，或已经得到相应作者/权利方许可；其档案同时保留早期 TSCII 编码和较新的 Unicode HTML/PDF 版本。

它非常适合成为 WebNR 的区域来源候选，不过接入方式需要比“抓一个 TXT 链接”更细：不同年代文件的字符编码、HTML 结构、PDF 与纯文本能力不一致，早期档案还带有个人使用措辞。今天的决定是保留为高价值 adapter 候选，优先从明确 Unicode、作品状态和下载条件的条目建立 fixture，而不是一口气索引整个档案。

### Project Ben-Yehuda：公版与明确授权并存的希伯来语数字图书馆

[Project Ben-Yehuda](https://benyehuda.org/) 把希伯来文学制作成免费、可搜索的数字版本。项目自己的介绍明确说明，站内作品主要来自版权已经到期的内容，或取得了出版许可；作品列表还把“公共领域”“经授权发布”等权利状态直接作为筛选条件，并提供文本/电子书导出能力。

这类站点对 WebNR 很有价值，因为“作品为什么能公开”本身就是目录数据的一部分。今天把它加入区域来源队列，下一步应使用官方作品状态与导出接口做小规模 fixture，确保每个条目都保留原始作品页和权利标签。

## 第二组：非常有用，但更适合作为发现层

### Wikisource：适合从网页和导出开始，不适合把整个站视为一种许可证

[Wikisource](https://wikisource.org/) 的不同语言项目拥有大量可阅读文本，并有 EPUB/PDF 等导出能力。它的优势是版本历史、校对和页面级来源清楚；复杂之处是原作、译文、编辑贡献以及不同语言项目的具体信息需要逐项处理。

WebNR 已把 Wikisource 留在 adapter 队列。合理设计是保存语言、作品页、导出方式和许可/版权模板，而不是只根据“Wikimedia”这个品牌给整站贴一个统一权利标签。

### Project Runeberg：北欧文学很强，法域判断必须跟着作者和译者走

[Project Runeberg](https://runeberg.org/) 长期数字化北欧文学，并明确说明它按照版权期限谨慎发布作品。对于北欧经典发现，它提供了独特价值；对于全球读者，作者、译者、版本和所在地版权期限仍可能产生差异。

因此它适合做区域发现与逐本链接，不适合生成“整个 Runeberg 都可以任意再分发”的结论。

### HathiTrust：Full View 很有价值，下载权限仍要看条目和数字化来源

[HathiTrust Digital Library](https://www.hathitrust.org/) 汇集大量图书馆数字化内容。没有登录的用户也能阅读许多 **Full View** 条目；但整本下载能力受作品状态、登录资格以及数字化来源影响，Google 扫描的条目尤其可能有下载限制。

对 WebNR 来说，HathiTrust 很适合作为“是否存在机构完整视图”的发现信号，暂时不适合作为统一直链下载源。一个未来 adapter 应明确区分 Full View、Search-only、下载限制和作品落地页。

## 第三组：搜索能力很强，但元数据本身不是内容授权

今天还新增核验了几类发现候选：

- **Digital Public Library of America (DPLA)**：聚合元数据采用非常宽松的开放政策，很适合发现美国机构收藏；实际图片、扫描件或文本仍由各提供机构的 rights statement 决定。
- **Library of Congress JSON API**：不需要 API key 就能查询大量公开元数据，适合低频目录发现；条目格式与权利状态具有异质性，需要保留作品页和逐项 rights 信息。
- **Google Books API / Full View**：能提供书目、预览/可读状态和购买/落地信息；Full View 与下载能力会随作品权利和用户所在地变化，所以应把 `accessInfo` 当成“当前可读性信号”，而不是全局公版证明。
- **Internet Archive Texts**：拥有庞大文本与元数据集合，但不同项目、借阅模型和单本作品的权利状态差异很大。WebNR 可以研究元数据/明确开放集合，通用“Internet Archive 全站下载源”则缺少足够窄的权利边界。

这些来源证明了一件很实用的事：一个好的阅读器目录不必把所有书都自己托管。**发现层负责告诉读者哪里有可靠版本；导入层只处理已经满足格式、访问和权利条件的内容。**

## 如果你只想“找一本文本马上读”，怎么选

可以按下面的顺序降低踩坑概率：

1. **先搜索作者或项目官方页面。** 作者自己发布的 TXT、明确授权下载页、项目原创内容最容易判断。
2. **再找公版项目的作品页。** Standard Ebooks、Project Gutenberg、青空文库、Project Madurai、Project Ben-Yehuda、Project Runeberg 都比无来源 TXT 打包站更容易追溯。
3. **需要更多版本时再去机构馆藏。** Wikisource、HathiTrust、DPLA、Library of Congress、Google Books 可以帮助确定版本、扫描件和可读状态。
4. **看到“TXT 全集”“万能书源”先检查来源。** 文件名、网盘地址和“免费”标签本身不能回答作者、版本、授权和法域问题。
5. **给 WebNR 导入时看格式。** 当前可靠路径是 TXT 与已验证的文本 URL；EPUB、ZIP、特殊编码和复杂网页规则应该等对应能力通过测试。

一个来源如果只有文件、没有作者和 metadata，并不必然不能用。WebNR 的规则是：可以从文件名生成展示标题，未知作者保持 Unknown；但**绝不通过猜测补作者、许可、发布日期或热度**。比起漂亮但虚构的目录，一个诚实的“未知”更容易在以后被纠正。

## 今天的来源审计与接入结果

本轮重新核验了现有 WebNR Originals 和 Aozora Bunko Starter，并扩展了免费阅读候选池。新增发现方向包括 HathiTrust、DPLA、Google Books Full View、Internet Archive Texts、Project Madurai 和 Project Ben-Yehuda。

深入审计后形成三个直接结论：

- **Standard Ebooks：通过，今天接入。** 使用官方作品页和项目自己的 CC0/版权说明，只做 link-based discovery，不使用受条件约束的完整 Feed，也不复制 EPUB。
- **Project Madurai：通过读者价值审计，等待编码/权利 fixture。** 免费电子文本价值高，先从 Unicode 和权利说明明确的条目做 adapter。
- **Project Ben-Yehuda：通过读者价值审计，等待权利状态/导出 fixture。** 站点直接区分公版和授权发布，适合做保留权利标签的区域目录。

新的 **Standard Ebooks Starter** 因此成为 WebNR 第三个正式来源。它的作用不是取代 Standard Ebooks，而是给 WebNR 用户一个可验证的作品发现入口；任何阅读和下载仍回到官方作品页。

## 为什么今天没有直接接一个“大型 TXT 合集”

TXT 合集非常适合 WebNR，但“没有 metadata”与“没有来源依据”是两回事。前者可以解决：文件名就能先成为标题，未知字段保持未知。后者不能靠技术补齐：如果不知道文本来自哪里、是否公版或获授权，就不能因为文件格式方便而把它包装成官方推荐源。

所以接下来的 TXT 工作会优先寻找三类集合：作者明确授权发布、项目自身原创/开放许可、公共领域项目明确允许分发的文本包。Project Madurai、Project Ben-Yehuda 和部分区域数字项目都可能提供这样的材料，但要先逐项把许可措辞、编码和文件入口做成可重复测试。

## 下一步

今天之后，免费阅读目录会持续更新来源健康和接入能力，而不是停在一篇“资源推荐”。接下来最值得做的是：

- 为 Project Gutenberg 建立目录缓存、作品落地页优先的低频 adapter；
- 为 Wikisource 固定语言、导出与归属 fixture；
- 为 Project Madurai 测试 Unicode/TSCII 编码边界；
- 为 Project Ben-Yehuda 保留公版/授权状态并测试文本导出；
- 等 WebNR 的 EPUB 安全解析器完成后，把 Standard Ebooks 从发现源升级为真正可读的格式适配器。

免费小说资源的长期价值来自三件事同时成立：**读者找得到，来源讲得清，阅读器真的能稳定处理。** WebNR 会把这三件事分别验证，再把通过的部分逐步连起来。
