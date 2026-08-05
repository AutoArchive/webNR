import { createCanvas } from 'canvas';
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));

function drawBookIcon(size) {
  const canvas = createCanvas(size, size);
  const context = canvas.getContext('2d');

  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, size, size);

  const padding = size * 0.15;
  const bookWidth = size - padding * 2;
  const bookHeight = (size - padding * 2) * 0.8;

  context.fillStyle = '#4a90e2';
  context.beginPath();
  context.moveTo(padding, padding);
  context.lineTo(padding + bookWidth, padding);
  context.lineTo(padding + bookWidth, padding + bookHeight);
  context.lineTo(padding, padding + bookHeight);
  context.closePath();
  context.fill();

  context.fillStyle = '#357abd';
  context.beginPath();
  context.moveTo(padding, padding);
  context.lineTo(padding + size * 0.1, padding + size * 0.05);
  context.lineTo(padding + size * 0.1, padding + bookHeight + size * 0.05);
  context.lineTo(padding, padding + bookHeight);
  context.closePath();
  context.fill();

  context.strokeStyle = '#ffffff';
  context.lineWidth = size * 0.02;
  const lineGap = bookHeight / 4;
  for (let line = 1; line <= 3; line += 1) {
    context.beginPath();
    context.moveTo(padding + size * 0.2, padding + lineGap * line);
    context.lineTo(padding + bookWidth - size * 0.1, padding + lineGap * line);
    context.stroke();
  }

  return canvas;
}

const iconsDirectory = path.join(scriptDirectory, '../public/icons');
mkdirSync(iconsDirectory, { recursive: true });

for (const size of [192, 512]) {
  const canvas = drawBookIcon(size);
  const outputPath = path.join(iconsDirectory, `icon-${size}x${size}.png`);
  writeFileSync(outputPath, canvas.toBuffer('image/png'));
  console.log(`Generated ${size}x${size} icon at ${outputPath}`);
}
