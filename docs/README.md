# WebNR Documentation / WebNR 文档

WebNR is a local-first browser reader for user-owned TXT books and supported text URLs. It stores imported text and reading progress in the current browser profile and requires no account.

WebNR 是一个本地优先的浏览器 TXT 阅读器。导入的文本与阅读进度保存在当前浏览器配置中，无需账号。

[Open WebNR / 打开阅读器](https://app.webnovel.win/) · [TXT import troubleshooting / TXT 导入排障](troubleshooting/txt-import.md) · [GitHub](https://github.com/AutoArchive/webNR) · [Report an issue / 报告问题](https://github.com/AutoArchive/webNR/issues)

## Start reading / 开始阅读

1. Open the reader and choose **Add** or **Import Novel**. / 打开阅读器并选择 **Add** 或 **Import Novel**。
2. Select a local `.txt` file, or enter an HTTP/HTTPS text URL. / 选择本地 `.txt` 文件，或输入 HTTP/HTTPS 文本地址。
3. Start reading. The application stores the book and progress locally. / 开始阅读，书籍与进度会保存在浏览器本地。

!!! warning "Current format support / 当前格式支持"
    Local TXT is supported. EPUB, PDF, and other container formats are rejected until real parsers, security review, fixtures, and import tests exist.

    当前支持本地 TXT。EPUB、PDF 等容器格式在拥有真实解析器、安全审查、测试样本与导入测试之前不会被接受。

## What works today / 当前能力

- UTF-8 and common legacy text encodings, including GB18030 and Big5. / 支持 UTF-8、GB18030、Big5 等常见文本编码。
- Local TXT and permitted text URL imports. / 支持本地 TXT 与允许跨域访问的文本 URL。
- Paged and scrolling modes, typography controls, dark mode, progress, bookmarks, and text-to-speech. / 支持翻页与滚动、排版设置、深色模式、进度、书签与语音朗读。
- Installable PWA and an offline application shell. / 可安装为 PWA，并支持离线打开应用外壳。
- Independently distributed repository definitions for discovery and search. / 可添加独立分发的仓库定义进行发现与搜索。

## Data and analytics / 数据与分析

Imported book content and reading progress stay in the current browser profile and are not uploaded to a WebNR content server. The reader and documentation site use Google Analytics 4 measurement `G-DGH8HNQKE4`.

The reader sends the **complete browser page URL**, including query parameters, to Google Analytics. Therefore an imported URL in `?add=...` is included in the reported page URL. Google signals and ad-personalization signals are disabled. WebNR does not add custom analytics events containing local file contents or reading progress.

导入的书籍正文与阅读进度保存在当前浏览器配置中，不会上传到 WebNR 内容服务器。阅读器与文档站使用 Google Analytics 4，Measurement ID 为 `G-DGH8HNQKE4`。

阅读器会把**完整浏览器页面网址**发送给 Google Analytics，包括查询参数。因此，`?add=...` 中的导入网址也会包含在上报的页面网址中。Google signals 与广告个性化信号已关闭。WebNR 不会额外创建包含本地文件正文或阅读进度的自定义分析事件。

## Browser and network limitations / 浏览器与网络限制

- URL imports are controlled by browser CORS rules. / URL 导入受浏览器 CORS 规则限制。
- WebNR does not bypass authentication, payment, DRM, robots, or access controls. / WebNR 不绕过登录、付费、DRM、robots 或访问控制。
- Source definitions do not grant a content license. / 书源定义不代表内容授权。

See [TXT import troubleshooting / TXT 导入排障](troubleshooting/txt-import.md) for encoding, CORS, storage, PWA update, and reproducible-report guidance.

## Develop WebNR / 开发 WebNR

```bash
git clone --recurse-submodules https://github.com/AutoArchive/webNR.git
cd webNR
npm ci
npm run dev
```

Validate application changes:

```bash
npm run lint
npm run typecheck
npm run build
```

Validate documentation changes:

```bash
python -m pip install --requirement .github/requirements-docs.txt
mkdocs build --strict
```

See [Contributing](manual/contributing.md) for the pull-request and review contract.
