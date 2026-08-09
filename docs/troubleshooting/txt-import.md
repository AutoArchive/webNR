# TXT import troubleshooting / TXT 导入排障

This guide covers the import paths that WebNR currently implements: local `.txt` files and permitted HTTP/HTTPS text URLs. EPUB, PDF, MOBI, and other container formats are not supported yet.

本指南只覆盖 WebNR 当前已经实现的导入路径：本地 `.txt` 文件和允许浏览器访问的 HTTP/HTTPS 文本 URL。EPUB、PDF、MOBI 等容器格式目前尚未支持。

## Start with the supported path / 先确认使用的是受支持路径

1. Open [WebNR](https://app.webnovel.win/).
2. Choose **Add** or **Import Novel**.
3. For a local book, select a file whose actual format is plain text and whose filename ends in `.txt`.
4. For a remote book, enter a direct HTTP/HTTPS URL that returns text rather than an HTML download page, login screen, archive, or ebook container.

1. 打开 [WebNR](https://app.webnovel.win/)。
2. 选择 **Add** 或 **Import Novel**。
3. 导入本地书籍时，应选择真实内容为纯文本且扩展名为 `.txt` 的文件。
4. 导入远端书籍时，应输入直接返回文本的 HTTP/HTTPS 地址，而不是下载页面、登录页面、压缩包或电子书容器。

!!! warning "A renamed file is not converted / 修改扩展名不等于转换格式"
    Renaming `book.epub` to `book.txt` does not create a text file. EPUB is a ZIP-based container and requires a real parser. WebNR rejects unsupported local formats instead of decoding binary bytes as text.

    把 `book.epub` 重命名成 `book.txt` 并不会完成格式转换。EPUB 是基于 ZIP 的容器，需要真实解析器。WebNR 会拒绝不支持的本地格式，而不是把二进制内容误当作文本。

## The file opens as garbled text / 文件打开后乱码

WebNR uses browser-native decoding and supports UTF-8 plus common legacy Chinese encodings such as GB18030 and Big5. Garbled output normally means the file uses an unexpected encoding, contains binary data, or was exported incorrectly.

WebNR 使用浏览器原生解码能力，支持 UTF-8 以及 GB18030、Big5 等常见中文旧编码。乱码通常表示文件编码不符合预期、文件实际包含二进制数据，或导出过程有误。

Try these checks:

- Open the file in a trusted text editor and confirm it displays correctly there.
- Save a copy as UTF-8 without changing the original file.
- Confirm the file is not an EPUB, PDF, Word document, archive, or HTML page with a `.txt` suffix.
- Test with a small excerpt containing the same language and punctuation. If the excerpt works, the original file may contain malformed byte sequences or mixed encodings.
- Keep the original file until the converted copy has been verified.

建议依次检查：

- 使用可信文本编辑器打开文件，确认编辑器中显示正常。
- 另存一份 UTF-8 副本，不要覆盖原始文件。
- 确认文件并不是使用 `.txt` 扩展名伪装的 EPUB、PDF、Word、压缩包或 HTML 页面。
- 截取包含相同语言和标点的一小段文本进行测试。如果小文件正常，原文件可能含有损坏字节或混合编码。
- 在确认转换结果之前保留原始文件。

## A text URL fails to import / 文本 URL 无法导入

A URL that works in a normal browser tab may still be unreadable by a web application. WebNR performs the request from your browser, so the remote server must permit cross-origin access through CORS.

能在浏览器标签页中打开的 URL，不一定允许网页应用读取。WebNR 直接从用户浏览器发起请求，因此远端服务器必须通过 CORS 允许跨域访问。

Common causes:

| Symptom | Likely cause | Safe next step |
| --- | --- | --- |
| The URL opens a webpage instead of raw text | It is a landing or download page | Find the authorized direct text URL |
| The browser reports a cross-origin or CORS error | The server does not permit browser applications to read the response | Ask the site owner to enable appropriate CORS, or download an authorized TXT file and import it locally |
| The response is 401 or 403 | Authentication or access policy is required | Use an authorized access method outside WebNR; do not place credentials in the URL |
| The response is 404 | The resource moved or was removed | Verify the public URL with the publisher |
| The import returns HTML, a login page, or an error document | Redirect or access control changed the response | Do not treat it as a book; verify the final authorized text endpoint |
| A very large request times out | Network, server, or browser resource limits | Download an authorized copy locally and import the TXT file |

WebNR does not operate a public CORS proxy and does not bypass login, payment, DRM, robots, rate limits, or access controls.

WebNR 不提供公共 CORS 代理，也不会绕过登录、付费、DRM、robots、速率限制或其他访问控制。

## The book disappeared / 书籍消失了

Imported books and reading progress live in the current browser profile. They can be removed when site data is cleared, private/incognito storage is closed, a browser profile is deleted, or automated storage eviction occurs.

导入书籍与阅读进度保存在当前浏览器配置中。清除站点数据、关闭无痕/隐私窗口、删除浏览器配置或浏览器自动回收存储空间，都可能导致数据消失。

Until full backup and restore is implemented:

- Keep the original TXT files outside the browser.
- Avoid using private/incognito mode for a durable library.
- Do not clear storage for `app.webnovel.win` unless you accept losing local data.
- Export important books when the application offers an export action.
- Treat browser synchronization as unrelated to WebNR backup unless the browser explicitly documents that it synchronizes this site data.

在完整备份与恢复功能实现之前：

- 在浏览器之外保留原始 TXT 文件。
- 不要使用无痕/隐私模式建立长期书库。
- 除非接受丢失本地数据，否则不要清除 `app.webnovel.win` 的站点存储。
- 对重要书籍使用应用提供的导出操作。
- 除非浏览器明确说明会同步这类站点数据，否则不要把浏览器同步视为 WebNR 备份。

## The installed PWA appears stale / 安装后的 PWA 看起来没有更新

WebNR uses a Service Worker for its offline application shell. Normal updates should install without unregistering the existing worker. If the installed application appears stale:

1. Confirm you are online and reopen the application.
2. Close all WebNR windows and open it again.
3. Compare the current public build at `https://app.webnovel.win/build.json` when reporting a reproducible issue.
4. Do not clear site data as the first troubleshooting step because that can delete the local library.

WebNR 使用 Service Worker 提供离线应用外壳。正常更新不应注销已有 worker。若安装后的应用看起来没有更新：

1. 确认网络可用并重新打开应用。
2. 关闭所有 WebNR 窗口后再次启动。
3. 报告可复现问题时，可记录 `https://app.webnovel.win/build.json` 中的当前构建标识。
4. 不要把“清除站点数据”作为第一步，因为这可能删除本地书库。

## Report a reproducible import problem / 报告可复现的导入问题

Use the [structured bug report](https://github.com/AutoArchive/webNR/issues/new?template=bug.yml). Include:

- the WebNR commit from `/build.json`;
- browser name and version;
- local-file or URL import path;
- the file encoding or response content type when known;
- the exact visible error or failed step;
- a minimal synthetic, public-domain, self-owned, or explicitly authorized fixture.

Do **not** upload private books, copyrighted text without permission, filenames that reveal private information, cookies, credentials, private source URLs, or reading history.

请使用[结构化 Bug 报告](https://github.com/AutoArchive/webNR/issues/new?template=bug.yml)，并提供：

- `/build.json` 中的 WebNR 提交标识；
- 浏览器名称与版本；
- 使用的是本地文件还是 URL 导入；
- 已知情况下的文件编码或响应 Content-Type；
- 可见错误信息或失败步骤；
- 最小化的合成、公版、自有或明确授权测试样本。

请勿上传私有书籍、未经授权的版权文本、泄露隐私的文件名、Cookie、凭据、私有来源 URL 或阅读历史。

## Related documentation / 相关文档

- [Documentation home / 文档首页](../README.md)
- [URL parameters](../manual/url-params.md)
- [Source definitions](../source/index.md)
- [Contributing](../manual/contributing.md)
