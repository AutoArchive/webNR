# WebNR Documentation / WebNR 文档

WebNR is a private, local-first browser reader for user-owned TXT books and supported text URLs. It stores imported text and reading progress in the current browser profile and requires no account.

WebNR 是一个隐私优先、本地存储的浏览器 TXT 阅读器。导入的文本与阅读进度保存在当前浏览器配置中，无需账号。

[Open WebNR / 打开阅读器](https://app.webnovel.win/) · [GitHub](https://github.com/AutoArchive/webNR) · [Report an issue / 报告问题](https://github.com/AutoArchive/webNR/issues)

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

## Privacy and data / 隐私与数据

The reader does not load Google Analytics. Imported book content, filenames, and reading progress are not sent to WebNR servers. URL imports contact the URL selected by the user. Clearing browser site data can remove the local library, so backup and restore remain high-priority product work.

阅读器不加载 Google Analytics。导入内容、文件名与阅读进度不会发送到 WebNR 服务器。URL 导入会直接访问用户选择的地址。清除浏览器站点数据可能删除本地书库，因此备份与恢复是高优先级功能。

## Browser and network limitations / 浏览器与网络限制

- URL imports are controlled by browser CORS rules. / URL 导入受浏览器 CORS 规则限制。
- WebNR does not bypass authentication, payment, DRM, robots, or access controls. / WebNR 不绕过登录、付费、DRM、robots 或访问控制。
- Source definitions do not grant a content license. / 书源定义不代表内容授权。

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

See [Contributing](mannual/contributing.md) for the pull-request and review contract.
