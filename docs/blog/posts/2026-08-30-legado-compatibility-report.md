---
title: WebNR 到底支持哪些 Legado 书源能力？2026-08-30 版本化兼容报告
date: 2026-08-30
slug: legado-compatibility-report
description: 用版本化 fixtures 说明 WebNR 当前可以安全导入和检查哪些 Legado JSON 字段、哪些规则尚不能执行，以及 L1–L5 兼容级别分别意味着什么。
categories:
  - Reader guides
  - Legado
  - Compatibility
---

# WebNR 到底支持哪些 Legado 书源能力？2026-08-30 版本化兼容报告

**直接答案：截至 2026 年 8 月 30 日，WebNR 对 Legado 书源的正式兼容级别是 L1：本地导入与检查。** 你可以选择一个 Legado JSON/TXT 定义文件，让 WebNR 在浏览器本地解析它、保留未知顶层字段，并告诉你这份定义最低需要哪一层能力；它**不会执行搜索/正文规则，不运行 JavaScript，不保存目标站 Cookie，不模拟登录，也不会请求定义指向的网站**。

本报告对应 fixture suite **`2026-08-30.1`**。以后看到“WebNR 兼容 Legado”时，应同时看**能力级别 + fixture 版本**，而不是把“JSON 能打开”误解成“所有书源已经能跑”。

[打开 WebNR，在导入页检查 Legado JSON](https://app.webnovel.win/){ .md-button .md-button--primary }

## 一张表看懂 L1–L5

| 级别 | 当前状态 | WebNR 能做什么 | 当前明确不做什么 |
| --- | --- | --- | --- |
| **L1 — Import & Inspect** | **已支持** | 本地读取 JSON/TXT；单对象或数组；保留 unknown 顶层字段；能力分类；2 MiB / 500 definitions 输入边界 | 不联网、不执行规则 |
| **L2 — Declarative Rules** | **未执行** | 能识别 `searchUrl`、`ruleSearch`、`ruleBookInfo`、`ruleToc`、`ruleContent` 等需求 | 不执行 CSS/XPath/JSONPath/正则，不抓搜索/详情/目录/正文 |
| **L3 — Stateful Rules** | **未执行** | 能识别 Cookie、登录、并发/频率等状态需求 | 不保存第三方 Cookie，不模拟登录，不共享账号状态 |
| **L4 — Restricted Script** | **未执行** | 能发现 `<js>`、`@js:`、`loginCheckJs` 等脚本迹象并升级风险级别 | 不执行第三方 JavaScript |
| **L5 — Bridge / WebView** | **未执行** | 能识别 WebView / Java bridge 一类依赖 | 不绕过 CORS、验证码、登录、Cloudflare、付费墙、DRM 或访问控制 |

最重要的一句是：**“能识别”不等于“能执行”。** L1 是兼容检查器；L2–L5 才涉及真正的规则运行时。

## 为什么不直接做“全部兼容”

Legado 定义可能同时包含几类完全不同的东西：

- 名称、URL、分组、启用状态等 metadata；
- 搜索 URL、发现 URL；
- 搜索、书籍详情、目录、正文规则；
- header、charset、POST body、分页和替换；
- Cookie、登录、变量和并发；
- JavaScript；
- Android WebView、Java bridge 或其他浏览器之外的能力。

如果只因为 JSON 能解析就宣称“兼容”，用户会自然理解成搜索、详情、目录、正文都可以用；如果只因为 Android App 能访问某站，就假设浏览器也可以，又会忽略 CORS、Cookie 和 WebView 的差异。

所以 WebNR 把兼容拆成**可以回归测试的能力层**。这让失败更容易解释，也避免一个后续功能悄悄把今天的安全边界扩大。

## L1 现在实际会做什么

### 本地读取，不把定义上传到内容服务器

检查器位于 WebNR 的导入页。选择 `.json` 或 `.txt` 后，浏览器通过 File API 读取内容，再做 JSON 解析。`bookSourceUrl` 只是被检查的数据，不会因为它存在就触发 fetch。

### 支持单条定义和数组

一份 Legado 文件可能是单对象，也可能是很多定义组成的数组。L1 都能检查。空数组、非对象条目和无效 JSON 会明确失败。

资源边界固定为：

- 最大输入：**2 MiB**；
- 最多：**500 个 source definition**。

超过边界时直接报错，不会裁掉后半部分再给出一个看似完整的报告。

### Unknown 字段保留，而不是静默丢弃

迁移工具最危险的失败之一是“导入成功”，但不认识的字段被悄悄删除。L1 会把未知顶层字段列为 unknown，并在检查结果里保留原值。

这不代表 WebNR 已经把整份 Legado JSON 安装进自己的 source 数据库；只是保证**检查不会假装未知信息不存在**。

### 常见字段会进入最低能力分类

当前分类器大致把字段分成：

- **L1 metadata**：`bookSourceName`、`bookSourceUrl`、`bookSourceGroup`、`enabled` 等；
- **L2 declarative**：`searchUrl`、`exploreUrl`、`ruleSearch`、`ruleBookInfo`、`ruleToc`、`ruleContent`、`header` 等；
- **L3 stateful**：Cookie、login、concurrency 一类字段；
- **L4 script**：脚本 marker；
- **L5 bridge**：WebView / Java bridge 迹象。

这不是一份“Legado 全字段标准”。不认识的字段继续保持 unknown，而不是猜语义。

## 三个 clean-room fixture 分别验证什么

fixture suite `2026-08-30.1` 使用 WebNR 自己编写的合成定义和保留域名，不包含真实小说正文、账号、Cookie、Token，也不复制社区书源的第三方抓取规则。

### `01-declarative.json`

包含 metadata、`searchUrl`、`exploreUrl`、header、search/book info/TOC/content 规则和一个未知扩展字段。

预期结果：WebNR 能判断它需要 L2，但**不执行**；未知字段仍保留。

### `02-stateful.json`

增加 Cookie、并发和登录相关字段。

预期结果：最高需求进入 L3。它不是测试账号，也不会真的登录；它只验证“依赖站点状态的定义不能被当成普通声明式规则”。

### `03-script-bridge.json`

包含无害脚本 marker 和 WebView 字段。

预期结果：报告 L4/L5 需求，**不 eval、不开 Worker、不访问 URL**。这个 fixture 的成功恰恰意味着脚本没有被执行。

## 一个最小例子

例如 `demo.json`：

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

L1 会告诉你：

- metadata 可以检查；
- `searchUrl` / `ruleSearch` 需要 L2；
- `futureField` 是 unknown but preserved；
- 没有任何网络请求发生。

如果定义再加入脚本 marker，最高需求会升到 L4；出现 WebView / bridge 依赖，则升到 L5。

## WebNR Source 与 Legado JSON 是两条不同路径

这个区别很重要：

**Connect to Sources / 连接 WebNR source**：加入 WebNR 自己的 `search_index.yml` 目录，用来发现经过审计的作品或第一方入口。

**Inspect Legado JSON / 检查 Legado 定义**：分析一份定义需要哪些能力，但不把它安装成可执行 source。

所以今天你不能把任意 Legado JSON 丢进 WebNR，然后期待搜索、目录和正文马上工作。检查器的作用是告诉你**为什么不能**，以及它距离浏览器运行时还缺哪一层。

## L2 以后真正需要解决什么

下一层不是“多认几个字段”而已。一个可信的 declarative runtime 至少需要明确：

- 允许的 selector / JSONPath / regex 子集；
- 每个请求的 timeout、响应体大小和 redirect 上限；
- charset 和错误编码怎么处理；
- pagination 最大页数；
- stable identity 如何生成；
- 上游更新/删除怎样反映；
- 失败时是空结果、部分结果还是明确错误；
- versioned fixtures 如何证明升级没有破坏已有定义。

直到这些边界能被测试，L2 都不会被写成“已支持”。

## 哪些问题不会通过“兼容”来绕过

即使未来进入 L3–L5，下面这些也不是“想办法绕过去”的目标：

- 登录和账号权限；
- CAPTCHA / anti-bot challenge；
- 付费内容；
- DRM；
- robots / 服务条款 / 访问控制；
- 需要第三方凭据但 WebNR 没有正式授权的 API。

WebNR 可以把“这份定义需要这些能力”报告清楚，但不会把突破这些边界当成兼容成功。

## 如果你是 Legado 用户，应该怎么用这个报告

**只想读自己的 TXT：** 直接使用 [TXT 导入指南](2026-09-01-raw-txt-collection-import-guide.md)，不需要 Legado inspector。

**想知道一份 JSON 为什么不能跑：** 本地导入 inspection，看它最高需要 L2、L3、L4 还是 L5。

**想找当前可以直接使用的 WebNR 来源：** 看 [来源目录与健康说明](2026-09-03-first-month-source-directory-health-report.md)。

**想理解 WebNR 为什么可以作为 Legado 用户的网页端替代之一：** 看 [WebNR：给 Legado 用户的一个独立网页端替代选择](2026-08-09-webnr-legado-web-alternative.md)。

## 版本说明

- 报告日期：**2026-08-30**
- Fixture suite：**`2026-08-30.1`**
- 正式能力：**L1 / Import & Inspect**
- L2–L5：**识别需求，但未执行**

以后能力提升时应新增 fixture 版本和明确行为，而不是回头把本报告里的“未执行”改成模糊的“兼容”。
