---
title: WebNR 到底支持哪些 Legado 书源能力？2026-08-30 版本化兼容报告
date: 2026-08-30
slug: legado-compatibility-report
_description: 用版本化 fixtures 说明 WebNR 当前可以安全导入和检查哪些 Legado JSON 字段、哪些规则尚不能执行，以及 L1–L5 兼容级别分别意味着什么。
description: 用版本化 fixtures 说明 WebNR 当前可以安全导入和检查哪些 Legado JSON 字段、哪些规则尚不能执行，以及 L1–L5 兼容级别分别意味着什么。
categories:
  - Reader guides
  - Legado
  - Compatibility
---

# WebNR 到底支持哪些 Legado 书源能力？2026-08-30 版本化兼容报告

**直接答案：截至 2026 年 8 月 30 日，WebNR 对 Legado 书源的正式兼容级别是 L1：本地导入与检查。** 你现在可以在 WebNR 的“Import Novel / 导入”页面选择一个 Legado JSON 或 TXT 书源定义文件；文件只在当前浏览器里读取，WebNR 会解析单条定义或数组、保留未知的顶层字段、识别常见字段属于哪一类能力，并生成一份兼容报告。这个检查器**不会执行搜索规则、正文规则、JavaScript、Cookie、登录流程或 WebView，也不会请求书源指向的网站**。

本次报告绑定的 fixture suite 是 **`2026-08-30.1`**。后续任何“WebNR 支持 Legado”之类的公开说法都应该同时给出能力级别和 fixture 版本，而不是只写一个容易误解的“兼容”。

[打开 WebNR，在导入页检查 Legado JSON](https://app.webnovel.win/){ .md-button .md-button--primary }

如果你的目标只是把自己的 TXT 放进浏览器阅读，WebNR 原有路径不变；如果你想判断一份 Legado JSON 为什么不能直接在 WebNR 运行，新的检查器给出了第一个可重复的答案入口。

## 一张表看懂今天的边界

| 能力级别 | 2026-08-30 状态 | WebNR 今天实际做什么 | 明确不做什么 |
| --- | --- | --- | --- |
| **L1 / Phase 1：Import & Inspect** | **已支持** | 本地读取 JSON/TXT；接受单对象或数组；保留顶层未知字段；识别常见字段；报告最高所需能力；2 MiB、最多 500 条定义的输入边界 | 不联网，不执行任何书源规则 |
| **L2 / Phase 2：Declarative Rules** | **未执行** | 能识别 `searchUrl`、`ruleSearch`、`ruleBookInfo`、`ruleToc`、`ruleContent` 等需要声明式运行时 | 不执行 CSS/XPath/JSONPath/正则，不抓搜索/详情/目录/正文 |
| **L3 / Phase 3：Stateful Rules** | **未执行** | 能把 Cookie、登录、并发/频率等字段标成需要状态与权限边界 | 不保存目标站 Cookie，不模拟登录，不共享账号状态 |
| **L4 / Phase 4：Restricted Script** | **受限、未执行** | 发现 `<js>`、`@js:`、`loginCheckJs` 等脚本标记时升级风险级别 | 不执行第三方 JavaScript，不给规则开放浏览器、文件或凭据能力 |
| **L5 / Phase 5：Bridge / WebView** | **受限、未执行** | 识别 WebView/Bridge 依赖并明确报告 | 不绕过 CORS、验证码、登录、Cloudflare、付费墙、DRM 或其他访问控制 |

这里最重要的区别是：**“能够识别字段”不等于“能够执行字段”。** L1 解决的是导入、结构保真和能力分级；L2–L5 才涉及真正把第三方规则跑起来。

## 为什么先做 L1，而不是直接承诺“兼容全部书源”

Legado 的“书源”不是一个简单 RSS 地址。官方旧版入门文档把书源描述为通过规则抓取第三方网页中的书籍、章节和正文；公开文档支持从本地文件或网络地址导入 JSON/TXT。[P1][P2] 一份常见定义可能同时包含：

- 书源名称、URL、分组、启用状态等 metadata；
- 搜索 URL 和发现 URL；
- `ruleSearch`、`ruleBookInfo`、`ruleToc`、`ruleContent` 等规则对象；
- header、charset、POST body、分页和替换净化；
- Cookie、登录状态、变量和请求并发；
- JavaScript；
- Android WebView、Java bridge 或其他浏览器之外的能力。

这些能力的安全边界完全不同。如果把“JSON 可以解析”写成“书源可以用”，读者会以为搜索、详情、目录、正文都已通过；如果把“某个网站在 Android App 能打开”写成“浏览器也兼容”，又会忽略 CORS、Cookie、WebView 和权限模型差异。

所以 WebNR 现在把兼容拆成可以逐项验证的层级。第一层看起来朴素，却解决了几个基础问题：文件是否能导入？单对象和数组是否都能识别？未知字段会不会被悄悄丢掉？一条规则到底只需要声明式解析，还是已经出现脚本、登录或 WebView？这些问题没有稳定答案之前，后面的执行器很难安全迭代。

## L1 今天具体支持什么

### 1. 本地文件读取，不上传到 WebNR 内容服务器

新的检查器位于阅读器“Import Novel”页面。用户选择 `.json` 或 `.txt` 后，浏览器通过本地 File API 读取文本，再调用 JSON parser。检查流程没有远程 fetch，也不会因为 `bookSourceUrl` 存在就访问那个域名。

这条设计和 WebNR 的 local-first reader 一致：本地小说正文、书架和阅读进度已经主要留在浏览器侧；兼容检查也不需要把用户的书源文件变成服务端数据。

### 2. 单条定义和数组都能检查

Legado 社区文件既可能是一条对象，也可能是很多条对象组成的 JSON 数组。L1 会把单对象规范化为一条输入，把数组逐条生成报告。空数组会被拒绝；为了避免把浏览器变成一个没有边界的大文件分析器，本版本最多检查 500 条定义。

### 3. 未知顶层字段不会因为 WebNR 不认识就消失

兼容迁移最危险的一种失败不是报错，而是“看起来成功，但字段被静默删除”。L1 inspection 的结果会保留原始对象的顶层字段，并单独列出 unknown fields。未来某个字段如果进入 L2/L3/L4 分类，fixture 可以验证它从“unknown preserved”变成明确能力，而不是依靠人工记忆。

注意：这里说的“保留”是**检查器在本次解析结果中保持字段和值**，并不代表 WebNR 已经把整份 Legado JSON 存进书源数据库或会把它作为运行时 source 安装。

### 4. 常见字段会被分到能力层

当前 L1 把 `bookSourceName`、`bookSourceUrl`、`bookSourceGroup`、`enabled` 等基础 metadata 归为 Phase 1；把 `searchUrl`、`exploreUrl`、`ruleSearch`、`ruleBookInfo`、`ruleToc`、`ruleContent`、`header` 等归为 Phase 2；Cookie、login 和 concurrency 类字段进入 Phase 3；脚本标记进入 Phase 4；WebView / Java bridge 迹象进入 Phase 5。

这不是一份“Legado 全字段标准”。它是一个**保守分类器**：认识的字段给出最低已知需求，不认识的字段留下来并标 unknown，而不是猜测其语义。

### 5. 明确输入上限和失败方式

fixture `2026-08-30.1` 对输入设置了 2 MiB 和最多 500 条 source definition 的边界。不是因为 Legado 格式只能这么大，而是因为“本地检查器”需要一个明确的资源上限。超过边界会明确报错，不会自动裁掉后半部分后再生成看似完整的报告。

无效 JSON、非对象条目、空数组同样会失败。这个原则以后也会延伸到 L2：请求大小、分页数量、redirect、timeout、编码和失败结果都必须有上限，不能只测试 happy path。

## 三个版本化 fixture 测什么

本次仓库加入了一个完全由 WebNR 编写的 clean-room corpus。fixture 只使用 `example.invalid` 之类不会成为真实第三方小说站的保留域名，不包含任何小说正文、账号、Cookie、Token，也不复制社区书源里的实际抓取规则。

### Fixture 01：Declarative

`01-declarative.json` 包含书源 metadata、`searchUrl`、`exploreUrl`、header、search/book info/TOC/content 四类规则，以及一个 WebNR 故意不认识的 `fixtureExtension`。

它验证两件事：第一，L1 能把常见声明式字段识别为“L2 required，但当前不执行”；第二，未知扩展会被报告并保留，不会因为 schema 不认识就消失。

### Fixture 02：Stateful

`02-stateful.json` 增加 `enabledCookieJar`、`concurrentRate`、`loginUrl` 和 `loginUi`。

它不是一个可登录网站的测试账号。相反，它专门验证 WebNR 不会把“存在登录字段”当成普通声明式抓取。只要定义依赖目标站状态，就应该进入更高能力层，后续实现必须回答 Cookie 存储范围、站点权限、退出/删除、跨源隔离、并发限制和用户可见控制。

### Fixture 03：Script & Bridge

`03-script-bridge.json` 使用无害的脚本 marker 和 `webView` 字段。检查器只检测字符串中的 `<js>` / `@js:` 等标记，不 eval、不创建 Worker、不请求目标 URL。

这条 fixture 的成功标准恰恰是“**不执行**”。如果以后 L4 引入受限脚本，它会使用新的 capability suite 和新的安全测试，而不是让今天的 L1 突然开始跑第三方代码。

## 工作示例：一份 JSON 会得到什么结果

例如把下面的合成定义保存为 `demo.json`：

```json
{
  "bookSourceName": "My test source",
  "bookSourceUrl": "https://example.invalid/",
  "enabled": true,
  "searchUrl": "/search?q={{key}}",
  "ruleSearch": {
    "bookList": ".book",
    "name": ".title@text"
  },
  "futureField": {
    "keep": true
  }
}
```

导入后，WebNR 会告诉你：基础 metadata 可在 L1 检查；`searchUrl` 和 `ruleSearch` 需要 L2 声明式运行时；`futureField` 是 unknown but preserved。它不会真的访问 `example.invalid`，也不会尝试搜索一本书。

如果同一份定义在 `ruleContent` 中出现 `<js>...</js>`，最高需求会升到 L4；如果出现 WebView/Java bridge marker，则会升到 L5。这个结果的用途是帮助用户和开发者回答“**为什么这份源目前不能在纯浏览器里直接运行**”，不是给第三方站点生成“已兼容”认证。

## WebNR 原生 source 和 Legado JSON 现在仍是两条不同路径

WebNR 当前真正用于 reader discovery 的原生来源仍然是自己的 `search_index.yml` repository format。它包含经过审核的作品或官方发现入口，并由 `app/lib/discover.ts` 读取；索引有 5 MiB 上限，只接受 HTTP(S) 页面/下载 URL，并对标题、作者、标签、日期等 metadata 做保守规范化。[W1][W2]

因此今天有两个容易混淆的动作：

1. **Connect to Sources / 连接 WebNR source：** 把 WebNR 原生目录加入阅读器，可用于发现和后续合法导入流程；
2. **Inspect a Legado JSON / 检查 Legado 定义：** 只在本地分析兼容能力，不把它安装成可执行 source。

L2 真正上线之后，这两者才会开始出现受控的交集，例如把一条经过审核、只使用声明式规则的 Legado 定义转换成 WebNR 可运行 adapter。今天不能把这个未来状态提前写成已实现。

## 这次为什么审计五个社区集合，却不把它们“全量接入”

今天的 source program 筛查了五个公开集合/项目，用来观察真实世界里字段和失败模式的分布。审计目标是 compatibility corpus，而不是替读者批量抓这些集合背后的第三方站点。

### 1. XIU2/Yuedu：适合作为字段与失效模式参考，不适合直接变成 WebNR 推荐源包

XIU2/Yuedu 当前仍公开维护书源集合，仓库采用 GPL-3.0；README 明确说明这些规则面向第三方小说网站，并提醒网站存在访问频率限制、IP 限制或验证，建议降低预下载和搜索线程数。[P3][P4]

这给兼容测试两个很有价值的信号：真实规则确实会遇到限速和站点结构漂移；“规则文件有开源许可”也不能代替“目标站内容允许第三方自动抓取/再分发”。因此 WebNR 只把常见字段族和失败模式写进 clean-room fixture，不复制目标站规则进入推荐目录。

### 2. tickmao/Novel：规模说明 parser 必须有边界

该仓库在 2026 年 8 月仍维护约 1000 条 Legado source，并同时整理其他阅读器格式；README 还明确把它描述为聚合与分享，要求使用者支持正版并自行处理来源版权。[P5][P6]

对 WebNR 来说，最有价值的不是“1000 条一键装进去”，而是它提醒我们：一个真实集合可以很大。于是 L1 明确设置 2 MiB / 500 条的单次检查边界；以后如果需要大集合分析，应该做流式/分页或专门工具，而不是让 UI 在没有限制的情况下吞任意文件。

### 3. ZWolken/Light-Novel-Yuedu-Source：登录、半维护和反爬会把“格式兼容”与“来源健康”分开

该项目当前 README 明确写着半维护状态，一些来源需要登录，部分搜索有问题；维护说明还记录过目标站的反爬、字体混淆等导致长期稳定性差的情况。[P7]

这正好证明为什么兼容报告不能只给绿色/红色：“JSON 能 parse”与“来源今天可用”至少是两张不同的表。登录依赖进入 L3，复杂脚本和浏览器行为进入 L4/L5；目标站是否授权、是否健康则属于 source-specific audit，不能由 parser 自动推断。

### 4. aoaostar/legado：聚合规模和同步状态不能替代安全审计

该项目公开页面在 2026 年 8 月显示数千条聚合 source，并对不同集合给出同步成功/失败状态。[P8] 它的 issue 里还能看到“空规则”或疑似恶意脚本 source 的过滤讨论。[P9]

对于 WebNR，最直接的设计结论是：以后即使做到 L2，也不能把“上游同步成功”当成安全许可。定义需要大小限制、域名边界、script detection、权限分类和 fixture；L4 更不应该默认继承 L2 的权限。

### 5. Orokapei/BookSource：真实定义会混合 CSS、POST/charset、分页和登录字段

这个公开 JSON 集合可以观察到 CSS selector、下一页、POST body、charset、login 字段等组合。[P10] 这些形态对分类器有价值，但规则文件公开并没有自动建立每个目标站的访问和再分发授权，因此本轮只作为结构参考，不复制成 WebNR content source。

**本轮最终通过的“integration”是 compatibility-corpus integration，而不是第三方小说站 ingestion。** 三个 synthetic fixture 把上述审计里反复出现的 declarative、stateful、script/bridge 能力隔离出来，并进入版本化 browser E2E。这样每天的 source program 仍然产生可测试进展，同时不会为了满足“新增一个源”的数字去扩大不清楚的抓取范围。

## 为什么不会执行你导入文件里的 JavaScript

浏览器里执行第三方 source script 的风险和解析 JSON 完全不是一个等级。书源脚本可能接触 URL、headers、Cookie、正文页面、局部变量，传统 Android 环境还可能暴露 Java 对象或 WebView 行为。如果 WebNR 直接在主页面 `eval`，一条来源定义就可能获得与阅读器页面同级的 JavaScript 权限。

因此 L1 的安全要求是零执行。未来 L4 如果实现，至少需要：

- 独立 Worker 或更强隔离边界；
- 明确允许的 capability，而不是“可以访问所有浏览器 API”；
- CPU/墙钟超时；
- 内存和输出大小限制；
- 网络域名 allowlist 与请求预算；
- 禁止访问书架正文、IndexedDB 中无关书籍、analytics 状态和其他 source 的 Cookie；
- 可取消、可回滚；
- 每一种开放能力都有 versioned fixture 和负向测试。

所以“脚本暂不支持”不是 parser 偷懒，而是在没有沙箱合同之前避免把任意代码执行包装成兼容功能。

## 浏览器 CORS 为什么也不能靠“加个代理”草率解决

Android 原生网络栈和浏览器不是同一个安全环境。一个第三方 URL 在 Android App 能请求，并不意味着站点允许 `app.webnovel.win` 的 JavaScript 跨域读取响应。WebNR 现有的 URL TXT 导入只在目标服务器允许 CORS 时工作；这也是前一版 Legado 替代说明已经公开的边界。[W3]

建设一个公共服务器代理固然可以技术上绕过一部分浏览器 CORS，但它会把来源访问、用户请求、站点限速、版权和安全责任集中到 WebNR 服务端，还可能变成规避目标站访问策略的工具。因此当前路线优先是：官方 Feed/API、明确开放的机器接口、同源或用户拥有的内容、以及未来可选的本地 Bridge；不是“所有失败都丢给公共代理”。

## 兼容报告不等于版权或站点授权报告

一个 source definition 可能采用 GPL/MIT 等开源许可，这通常说明规则文件本身如何复制和修改；它不自动给 WebNR 第三方小说正文、封面、评论或付费章节的再分发权。同样，网页公开可访问也不等于允许持续 crawler、缓存或镜像。

所以 WebNR 继续把两套判断分开：

- **compatibility audit：** 这个 JSON 用了哪些字段、规则和运行时能力？
- **source admission audit：** 目标站是谁维护、条款/robots/机器接口是什么、允许什么请求频率、内容的授权或公共领域依据是什么、是否需要登录/验证码/付费、健康与删除语义怎样？

只有第二套审计通过，某个真实来源才可能从 isolated corpus 进入 reader-facing source catalog。

## 用户今天应该怎样使用这份报告

如果你手里有一份 Legado JSON，最有效的流程是：

1. 打开 WebNR，进入 **Import Novel**；
2. 在 **Legado compatibility inspector / 书源兼容检查** 中选择本地 JSON/TXT；
3. 查看每条 source 的 `Highest required capability`；
4. L1 只说明“文件结构可检查”，不要期待它自动搜书；
5. 如果是 L2，记录具体需要的 `searchUrl` / rule family，作为后续 declarative fixture；
6. 如果是 L3，先确定是否真的需要 Cookie/登录，以及目标站是否允许该访问方式；
7. 如果是 L4/L5，不要把脚本或 WebView 需求伪装成普通 CSS selector 问题；
8. 遇到 unknown field，提交一个**脱敏、最小化** fixture 或字段说明，不要附 Cookie、Token、账号或小说正文。

这种反馈比“这个源不能用”更容易转成可重复测试。

## 下一版最应该实现什么

L1 已经把“输入到底长什么样”变成机器可检查问题。下一步优先级仍是 **L2 declarative runtime**，但应从最小的 clean-room fixture 开始：

1. 基础 GET search；
2. CSS selector；
3. JSONPath；
4. XPath；
5. book info；
6. TOC；
7. content；
8. pagination；
9. headers、charset 与 replacement；
10. 每一步都有 request timeout、response-size、redirect 和域名边界。

当这一条链在自建 fixture server 上稳定，再拿经过 source-specific rights/access 审计的真实候选做 bounded integration。Cookie/login 留给 L3；JS 留给 L4；必须依赖 Android WebView 的定义留给 L5/Bridge。

这条顺序可能比“一次导入一千条书源”慢，但它会让“兼容”成为可以复跑、可以回归、可以精确解释失败原因的工程指标。

## 本版本的验收标准

`2026-08-30.1` 只有在下面这些事实同时成立时才能叫 L1 supported：

- Chromium 中可以从导入页选择一份本地 JSON；
- source name / URL 能显示；
- common metadata 被识别为 L1；
- declarative fields 被识别为 L2 requirement；
- Cookie/login/concurrency 被识别为 L3 requirement；
- script marker 被识别为 L4 restricted；
- WebView/Java marker 被识别为 L5 restricted；
- unknown top-level field 被报告而不是静默删除；
- 检查过程不请求 `bookSourceUrl`；
- 超过 2 MiB、超过 500 条、非法 JSON 或非对象条目会明确失败；
- 原有 TXT 导入、URL 导入、IndexedDB 书架、PWA、WebNR source discovery 和 GA4 full-URL reporting 不因这个功能回归。

任何一项失败，都应降低或撤回对应兼容声明，而不是修改文案掩盖测试结果。

## 结论

WebNR 今天终于可以对“你们支持 Legado 吗？”给出一个不模糊的版本答案：

> **支持 L1 / fixture suite `2026-08-30.1`：本地导入、结构保真、字段分类和兼容报告。尚不支持把任意 Legado JSON 当作可执行书源运行。**

这比“完全不支持”前进了一步，也比“已经兼容”诚实得多。接下来每增加一层，都必须同时增加执行能力、安全边界、fixtures、负向测试和真实来源的独立权限/健康审计。

如果你只是读本地 TXT，WebNR 现有路径已经成熟；如果你依赖复杂 Legado source，现在可以先用 L1 把依赖拆出来。等 L2–L5 逐步落地时，迁移将不再靠猜，而会由明确的 capability report 告诉你差在哪里。

## 参考资料

### Legado 与社区来源（核验于 2026-08-30）

- **[P1]** Legado 旧版公开文档，《导入书源》：<https://gedoor.github.io/docs/get-started-quickly/add-sources>
- **[P2]** Legado 旧版公开文档，《入门》：<https://gedoor.github.io/docs/GettingStarted>
- **[P3]** XIU2/Yuedu：<https://github.com/XIU2/Yuedu>
- **[P4]** XIU2/Yuedu GPL-3.0 LICENSE：<https://github.com/XIU2/Yuedu/blob/master/LICENSE>
- **[P5]** tickmao/Novel：<https://github.com/tickmao/Novel>
- **[P6]** tickmao/Novel 2026-08 source statistics：<https://github.com/tickmao/Novel/blob/master/STATS.md>
- **[P7]** ZWolken/Light-Novel-Yuedu-Source：<https://github.com/ZWolken/Light-Novel-Yuedu-Source>
- **[P8]** aoaostar/legado：<https://github.com/aoaostar/legado>
- **[P9]** aoaostar/legado issue #8，异常/脚本 source 过滤讨论：<https://github.com/aoaostar/legado/issues/8>
- **[P10]** Orokapei/BookSource：<https://github.com/Orokapei/BookSource>
- **[P11]** 当前 gedoor/legado 仓库：<https://github.com/gedoor/legado>
- **[P12]** Legado 旧版公开说明，《开源阅读到底是什么》：<https://gedoor.github.io/intro>

### WebNR 当前实现与前序说明

- **[W1]** WebNR `app/lib/discover.ts`：<https://github.com/AutoArchive/webNR/blob/main/app/lib/discover.ts>
- **[W2]** WebNR `app/types/repo.ts`：<https://github.com/AutoArchive/webNR/blob/main/app/types/repo.ts>
- **[W3]** 《WebNR：给 Legado 用户的一个独立网页端替代选择》：<https://www.webnovel.win/blog/2026/08/09/webnr-legado-web-alternative/>
- **[W4]** 《2026 年 Legado 书源在哪里找？》：<https://www.webnovel.win/blog/2026/08/06/legado-source-guide/>
- **[W5]** WebNR repository：<https://github.com/AutoArchive/webNR>
