<div align="center">
  <h1>WebNR - Web Novel Reader<br/>网文阅读器</h1>
  <p>
    A private, local-first, cross-platform web novel reader that runs in your browser.<br/>
    一个注重隐私、本地优先、跨平台的网文阅读器，直接在浏览器中运行。<br/>
    No account required. Import your own TXT files or supported text URLs and keep reading data in the current browser profile.<br/>
    无需账号。可导入自己的 TXT 文件或受支持的文本网址，阅读数据保存在当前浏览器配置中。
  </p>

  <p>
    <a href="https://app.webnovel.win/">Open Reader 在线阅读</a> |
    <a href="source/">Sources 书源</a> |
    <a href="blog/">Blog</a> |
    <a href="troubleshooting/txt-import/">TXT Help TXT 排障</a> |
    <a href="https://github.com/AutoArchive/webNR">GitHub</a>
  </p>
</div>

<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; padding: 16px 0;">
  <img src="imgs/Screenshot%202025-02-09%20174735.png" alt="WebNR library screenshot" style="width: 100%; border-radius: 8px;"/>
  <img src="imgs/Screenshot%202025-02-09%20174807.png" alt="WebNR discovery screenshot" style="width: 100%; border-radius: 8px;"/>
  <img src="imgs/Screenshot%202025-02-09%20174820.png" alt="WebNR search screenshot" style="width: 100%; border-radius: 8px;"/>
  <img src="imgs/Screenshot%202025-02-09%20174833.png" alt="WebNR reader screenshot" style="width: 100%; border-radius: 8px;"/>
  <img src="imgs/Screenshot%202025-02-09%20174855.png" alt="WebNR reader settings screenshot" style="width: 100%; border-radius: 8px;"/>
  <img src="imgs/Screenshot%202025-02-09%20174925.png" alt="WebNR reading experience screenshot" style="width: 100%; border-radius: 8px;"/>
  <img src="imgs/Screenshot%202025-02-09%20174556.png" alt="WebNR home screenshot" style="width: 100%; border-radius: 8px;"/>
</div>

## ✨ Key Features 主要特点

<table>
<tr>
<td>
<h3>🔒 Local-first 本地优先</h3>

- Imported text stays in the current browser profile<br/>导入文本保存在当前浏览器配置中
- Reading progress is stored locally<br/>阅读进度保存在本地
- No account required<br/>无需账号
- Installable PWA with an offline application shell<br/>可安装为 PWA，并支持离线应用外壳
</td>
<td>
<h3>📚 Flexible Import 灵活导入</h3>

- Import local TXT files<br/>导入本地 TXT 文件
- Import permitted text URLs<br/>导入允许访问的文本网址
- Common encodings including UTF-8, GB18030 and Big5<br/>支持 UTF-8、GB18030、Big5 等常见编码
- Add independent source catalogs for discovery and search<br/>可添加独立书源目录进行发现与搜索
</td>
</tr>
<tr>
<td>
<h3>🌐 Sources & Compatibility 书源与兼容</h3>

- Curated discovery and direct-TXT starters where verified<br/>提供经验证的发现入口与 direct-TXT 来源
- Versioned Legado compatibility work where tested<br/>对已测试能力提供版本化 Legado 兼容说明
- Source definitions do not grant a content license<br/>书源定义本身不代表内容授权
- No bypass of login, payment, DRM or access controls<br/>不绕过登录、付费、DRM 或访问控制
</td>
<td>
<h3>📖 Reading Experience 阅读体验</h3>

- Paged and scrolling modes<br/>翻页与滚动模式
- Typography controls and dark mode<br/>排版设置与深色模式
- Reading progress and bookmarks<br/>阅读进度与书签
- Text-to-speech<br/>语音朗读
</td>
</tr>
</table>

<details>
<summary><h2>🚀 Start Reading 开始阅读</h2></summary>

1. Open [WebNR](https://app.webnovel.win/) and choose **Add** / 打开 WebNR 并选择 **Add**。
2. Select a local `.txt` file, or enter an HTTP/HTTPS text URL that permits browser access / 选择本地 `.txt` 文件，或输入允许浏览器访问的 HTTP/HTTPS 文本网址。
3. Start reading. The imported text and reading progress stay in the current browser profile / 开始阅读；导入文本和阅读进度保存在当前浏览器配置中。

For encoding, CORS, storage and PWA issues, see [TXT import troubleshooting](troubleshooting/txt-import.md) / 编码、CORS、存储和 PWA 问题请参阅 [TXT 导入排障](troubleshooting/txt-import.md)。

</details>

<details>
<summary><h2>🔒 Privacy & Browser Limits 隐私与浏览器边界</h2></summary>

Imported book content and reading progress stay in the current browser profile and are not uploaded to a WebNR content server. The public reader and documentation pages send page views to Google Analytics 4 measurement `G-DGH8HNQKE4`. The reader reports the complete page URL, including query parameters, so an imported URL in `?add=...` is included in that page-view URL. Google signals and ad-personalization signals are disabled. WebNR does not add custom analytics events containing book content or reading progress.

导入的书籍正文与阅读进度保存在当前浏览器配置中，不会上传到 WebNR 内容服务器。公开的阅读器和文档页面会向 Google Analytics 4 的 `G-DGH8HNQKE4` 发送页面浏览。阅读器上报完整页面网址（包括查询参数），因此 `?add=...` 中的导入网址会包含在该页面浏览网址中。Google signals 与广告个性化信号已关闭。WebNR 不会创建包含书籍正文或阅读进度的自定义分析事件。

URL imports are subject to browser CORS rules. WebNR does not bypass authentication, payment, DRM, robots or other access controls.

网址导入受浏览器 CORS 规则限制。WebNR 不绕过登录、付费、DRM、robots 或其他访问控制。

</details>

<details>
<summary><h2>🔗 URL Parameters URL 参数</h2></summary>

```text
# Add source definitions / 添加书源
https://app.webnovel.win/?repos=https://repo1.example,https://repo2.example

# Import a text URL / 导入文本网址
https://app.webnovel.win/?add=https://example.com/novel.txt

# Open search / 打开搜索
https://app.webnovel.win/?search=https://repo.example
```

</details>

<details>
<summary><h2>🛠️ Develop WebNR 开发 WebNR</h2></summary>

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

</details>

<div align="center">

## 📝 License 许可证

WebNR is released under the repository's [MIT License](https://github.com/AutoArchive/webNR/blob/main/LICENSE).

<p><a href="#top">Back to top 返回顶部</a></p>

</div>
