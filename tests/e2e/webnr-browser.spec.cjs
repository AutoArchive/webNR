/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('node:fs');
const path = require('node:path');
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
  await expect(page.locator('body')).not.toContainText('Google Analytics records page views');
  await expect(page.locator('body')).not.toContainText('Privacy first');

  const manifestAvailable = await page.evaluate(async () => {
    const response = await fetch('/manifest.json');
    return response.ok;
  });
  expect(manifestAvailable).toBe(true);

  await expect.poll(
    () => page.evaluate(async () => Boolean(await navigator.serviceWorker.getRegistration())),
    { timeout: 12_000 }
  ).toBe(true);

  await page.getByRole('button', { name: 'Import Novel' }).click();
  await expect(page.getByRole('heading', { name: 'Upload File' })).toBeVisible();
  await expect(page.locator('body')).not.toContainText('Google Analytics records page views');
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

test('inspects versioned Legado fixtures locally without executing source rules', async ({ page }) => {
  const declarative = fs.readFileSync(
    path.join(process.cwd(), 'tests/fixtures/legado/2026-08-30.1/01-declarative.json')
  );
  const restricted = fs.readFileSync(
    path.join(process.cwd(), 'tests/fixtures/legado/2026-08-30.1/03-script-bridge.json')
  );

  await page.goto('/');
  await page.getByRole('button', { name: 'Import Novel' }).click();

  await page.locator('#legado-definition-file').setInputFiles({
    name: '01-declarative.json',
    mimeType: 'application/json',
    buffer: declarative,
  });

  await expect(page.getByText('Inspected 1 source locally.')).toBeVisible();
  await expect(page.getByRole('heading', { level: 3, name: 'WebNR Fixture — Declarative' })).toBeVisible();
  await expect(page.getByText(/L2 · declarative rules required/)).toBeVisible();
  await expect(page.getByText(/Unknown but preserved: fixtureExtension/)).toBeVisible();

  await page.locator('#legado-definition-file').setInputFiles({
    name: '03-script-bridge.json',
    mimeType: 'application/json',
    buffer: restricted,
  });

  await expect(page.getByRole('heading', { level: 3, name: 'WebNR Fixture — Script and Bridge' })).toBeVisible();
  await expect(page.getByText(/L5 · Bridge \/ WebView required/)).toBeVisible();
});
