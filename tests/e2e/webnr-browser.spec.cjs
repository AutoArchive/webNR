/* eslint-disable @typescript-eslint/no-require-imports */
const { test, expect } = require('@playwright/test');

async function blockExternalAnalytics(page) {
  await page.route('https://www.googletagmanager.com/**', route =>
    route.fulfill({ status: 200, contentType: 'application/javascript', body: '' })
  );
}

test.beforeEach(async ({ page }) => {
  await blockExternalAnalytics(page);
});

test('shows the Legado web-alternative note and registers the PWA shell', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('button', { name: 'Import Novel' })).toBeVisible();
  await expect(page.getByText(/independent browser-based alternative/i)).toBeVisible();

  const manifestAvailable = await page.evaluate(async () => {
    const response = await fetch('/manifest.json');
    return response.ok;
  });
  expect(manifestAvailable).toBe(true);

  await expect.poll(
    () => page.evaluate(async () => Boolean(await navigator.serviceWorker.getRegistration())),
    { timeout: 12_000 }
  ).toBe(true);
});

test('imports a local TXT, persists it in IndexedDB, and reopens it with the keyboard', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Import Novel' }).click();

  const body = [
    '第一章 浏览器测试',
    '这是 WebNR Chromium E2E 使用的本地 TXT。',
    ...Array.from({ length: 80 }, (_, index) => `第 ${index + 1} 段：浏览器阅读路径需要真实渲染、保存和重新打开。`),
  ].join('\n\n');

  await page.locator('#novel-file').setInputFiles({
    name: 'browser-smoke.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from(body, 'utf8'),
  });

  await expect(page.getByRole('heading', { level: 1, name: 'browser-smoke' })).toBeVisible();
  await expect(page.getByText('第一章 浏览器测试', { exact: false })).toBeVisible();

  await page.getByRole('button', { name: 'Back' }).click();
  await expect(page.getByRole('button', { name: 'Open browser-smoke' })).toBeVisible();

  await page.reload();
  const storedBook = page.getByRole('button', { name: 'Open browser-smoke' });
  await expect(storedBook).toBeVisible();
  await storedBook.focus();
  await page.keyboard.press('Enter');

  await expect(page.getByRole('heading', { level: 1, name: 'browser-smoke' })).toBeVisible();
  await expect(page.getByText('这是 WebNR Chromium E2E 使用的本地 TXT。', { exact: false })).toBeVisible();
});

test('imports a CORS-allowed text URL through the same browser flow', async ({ page }) => {
  const remoteUrl = 'https://reader-fixture.example/remote-story.txt';
  await page.route(remoteUrl, route =>
    route.fulfill({
      status: 200,
      contentType: 'text/plain; charset=utf-8',
      headers: { 'access-control-allow-origin': '*' },
      body: '第一章 URL 导入\n这段正文来自 Playwright 拦截的跨域测试响应。',
    })
  );

  await page.goto('/');
  await page.getByRole('button', { name: 'Import Novel' }).click();
  await page.locator('#novel-url').fill(remoteUrl);
  await page.getByRole('button', { name: 'Import', exact: true }).click();

  await expect(page.getByRole('heading', { level: 1, name: 'remote-story' })).toBeVisible();
  await expect(page.getByText('第一章 URL 导入', { exact: false })).toBeVisible();
  await expect(page).toHaveURL(/\/$/);
});

test('keeps unsupported files and invalid URL schemes recoverable', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Import Novel' }).click();

  await page.locator('#novel-file').setInputFiles({
    name: 'not-a-txt.epub',
    mimeType: 'application/epub+zip',
    buffer: Buffer.from('not actually an epub'),
  });
  await expect(page.locator('div[role="alert"]').filter({ hasText: 'WebNR currently supports local TXT files' })).toBeVisible();

  await page.locator('#novel-url').fill('ftp://example.test/book.txt');
  await page.getByRole('button', { name: 'Import', exact: true }).click();
  await expect(page.locator('div[role="alert"]').filter({ hasText: 'Invalid repository URL' })).toBeVisible();
});
