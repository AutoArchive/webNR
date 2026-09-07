---
title: 2026 年 Legado 书源在哪里找？一份面向读者的查找与验源指南
date: 2026-08-06
slug: legado-source-guide
description: 给 Legado 和 WebNR 读者的一份实用验源指南：书源去哪里找、哪些信息值得信、失败时怎么判断问题，以及如何先用 WebNR Originals 排除阅读器本身的问题。
categories:
  - Reader guides
  - Sources
---

# 2026 年 Legado 书源在哪里找？一份面向读者的查找与验源指南

**先说结论：** 不要把“能下载到一份 JSON”当成“这个书源可靠”。找书源时，优先顺序应该是 **作者/项目官方入口 → 公共领域或明确授权的馆藏 → 有维护记录的社区规则**。社区分享的 JSON 可以很好用，但它只是规则文件；目标网站是否允许访问、作品是否可再分发、规则今天是否仍有效，都要另外判断。

如果你只是想确认 WebNR 的“加源 → 选书 → 导入 TXT → 阅读”链路是否正常，可以先用项目自己维护的 **WebNR Originals**：

[把 WebNR Originals 添加到阅读器](https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Fwebnr-originals){ .md-button .md-button--primary }

它只包含 WebNR 自己发布的 CC0 示例文本，不依赖第三方站点、账号、验证码或付费墙。**示例源能用、第三方源不能用**时，问题通常不在阅读器核心，而在目标站、规则、网络、编码或访问条件。

## 先分清“书源”到底是哪一层

很多混乱来自把三个东西叫成同一个“书源”：

1. **阅读器 / 规则引擎**：负责解释来源定义并展示内容。
2. **来源定义**：JSON、YAML 或脚本，描述搜索、详情、目录或正文怎么取得。
3. **目标网站与作品**：真正承载作品、目录、Feed 或下载文件的地方。

规则文件用了 GPL、MIT 或其他开源许可，**不代表目标网站和作品也获得同一许可**。反过来，作品属于公共领域，也不意味着任意第三方整理版、编辑版或网站接口都可以无限抓取。

## 去哪里找：三条路线足够覆盖大多数情况

### 1. 官方、公版和开放馆藏：优先

最省心的是作者自己提供的下载、公共领域项目、大学数字馆藏，以及有明确使用说明的 OPDS / RSS / Atom / TXT 入口。

例如 Project Gutenberg、Standard Ebooks、Wikisource、青空文库等，都比“万能聚合站”更容易确认作品身份和来源。但仍要看**具体作品、具体版本和所在法域**，而不是看到“public domain”几个字就把整个站当成无条件镜像源。

如果你的目标只是读书，优先从这些项目的作品页开始；如果要做自动化目录，再看它们是否公开提供 Feed/API、请求频率和使用边界。

### 2. 社区维护的 Legado 规则：可以用，但先看维护状态

社区规则的价值很高：它们能告诉你真实世界中常见字段、分页、Cookie、脚本和失效模式。但判断一条规则值不值得导入，至少看四件事：

- 最近有没有维护、issue 或失效反馈；
- 它指向哪个真实网站，而不是只看规则仓库许可；
- 是否需要登录、Cookie、验证码、付费或地区权限；
- 搜索、详情、目录、正文究竟是哪一步可用，哪一步已经坏了。

**“GitHub 上还在”不等于“目标站仍可用”。** 同样，“能打开网页”也不等于规则可以稳定自动执行。

### 3. 自建小型来源：最适合长期维护

如果你有自己拥有、明确授权或公共领域的 TXT 集合，做一个很小的目录往往比依赖复杂抓取规则更可靠。WebNR 当前就是这样维护 **WebNR Originals** 和一批经过单独审计的 direct-TXT starter：保留稳定作品身份、来源页和许可，不知道的作者/日期就保持未知，不用猜测值补齐 metadata。

## 一条来源怎么快速验：七个问题

| 检查 | 你要确认什么 |
| --- | --- |
| 谁维护 | 作者、项目还是社区？最近是否仍有更新？ |
| 内容从哪来 | 公版、作者授权、正规平台，还是来源不明的转载？ |
| 要不要账号 | 是否需要 Cookie、登录、验证码、付费或地区权限？ |
| 网站允许什么 | 有没有明确 Feed/API/下载方式、robots 或访问频率说明？ |
| 哪一步坏了 | 添加、搜索、详情、目录还是正文？不要只写“不能用”。 |
| 会不会执行代码 | 是否包含脚本、Bridge、额外域名请求或敏感状态？ |
| 能不能复现 | 有没有固定样本、稳定 ID 和再次测试的方法？ |

如果其中几项回答不了，最稳妥的状态就是“待审计”，而不是“可用”。

## WebNR 和 Legado 现在是什么关系

WebNR 不是 Legado 官方网页端，也不会直接宣称“任意 Legado JSON 都能跑”。它采用独立实现，把兼容能力按可以测试的层级推进。

如果你关心的是**现在到底支持到哪里**，不要从本篇旧的规则查找指南推断，直接看更新后的：

[WebNR 到底支持哪些 Legado 书源能力？2026-08-30 版本化兼容报告](2026-08-30-legado-compatibility-report.md)

那篇会明确区分：能导入并检查 JSON、能解释哪些字段、哪些 declarative/stateful/script/Bridge 能力只是识别需求而尚未执行。这样比一句“兼容 Legado”更有用。

## 遇到“书源不能用”时，先这样排查

1. **先用 WebNR Originals**：确认阅读器自身的加源与 TXT 导入链路。
2. **打开目标站原页面**：确认不是站点本身下线、登录墙或地区限制。
3. **记录失败阶段**：添加 / 搜索 / 详情 / 目录 / 正文。
4. **看浏览器限制**：WebNR 的网址导入受 CORS 约束；服务端能 curl 到，不代表浏览器能读。
5. **不要用绕过来“修”**：验证码、付费、DRM、登录和访问控制不是应该被自动规避的兼容问题。

这样提交的 bug 报告，远比“这个源挂了”更容易复现。

## 如果你只是想找书，不想研究规则

- [合法免费小说与 TXT 集合怎么找](2026-08-08-legal-free-novels-txt-collections.md)
- [没有目录的 TXT 小说合集怎么导入 WebNR](2026-09-01-raw-txt-collection-import-guide.md)
- [WebNR 当前来源目录与健康说明](2026-09-03-first-month-source-directory-health-report.md)
- [免费经典小说阅读路线怎么选](2026-09-05-free-classic-ebook-reading-routes-compared.md)

## 参考入口

- [Project Gutenberg robot access policy](https://www.gutenberg.org/policy/robot_access.html)
- [Project Gutenberg Terms of Use](https://www.gutenberg.org/policy/terms_of_use.html)
- [Standard Ebooks feeds](https://standardebooks.org/feeds)
- [Wikisource copyright policy](https://wikisource.org/wiki/Wikisource:Copyright_policy)
- [WebNR Originals 来源说明](https://app.webnovel.win/sources/webnr-originals/README.txt)

核验日期：**2026-08-06**。这是查找与验源方法，不是“永久有效书源列表”；来源的当前状态应以 WebNR 的来源页和最近健康检查为准。
