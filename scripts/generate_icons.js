import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function createPNG(width, height) {
  // Simple uncompressed PNG generator using raw RGBA and Deflate
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8); // bit depth: 8
  ihdr.writeUInt8(6, 9); // color type: 6 (RGBA)
  ihdr.writeUInt8(0, 10); // compression method
  ihdr.writeUInt8(0, 11); // filter method
  ihdr.writeUInt8(0, 12); // interlace method

  function createChunk(type, data) {
    const len = data.length;
    const buf = Buffer.alloc(len + 12);
    buf.writeUInt32BE(len, 0);
    buf.write(type, 4, 4, 'ascii');
    data.copy(buf, 8);

    // CRC32
    let c = 0xffffffff;
    for (let i = 4; i < len + 8; i++) {
      c ^= buf[i];
      for (let j = 0; j < 8; j++) {
        c = (c >>> 1) ^ (c & 1 ? 0xedb88320 : 0);
      }
    }
    buf.writeInt32BE(~c, len + 8);
    return buf;
  }

  const ihdrChunk = createChunk('IHDR', ihdr);

  // Raw image data with filter byte 0 at start of each scanline
  const scanlineSize = 1 + width * 4;
  const rawData = Buffer.alloc(height * scanlineSize);

  for (let y = 0; y < height; y++) {
    const lineStart = y * scanlineSize;
    rawData[lineStart] = 0; // Filter: None
    const ny = y / height;

    for (let x = 0; x < width; x++) {
      const nx = x / width;
      const offset = lineStart + 1 + x * 4;

      // Dark futuristic violet-slate gradient background
      let r = Math.floor(15 + 20 * nx + 15 * ny);
      let g = Math.floor(23 + 25 * ny);
      let b = Math.floor(42 + 65 * nx + 70 * ny);
      let a = 255;

      // Center prompt icon accent
      const dx = nx - 0.5;
      const dy = ny - 0.5;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 0.35) {
        // Glowing core
        const intensity = Math.max(0, 1 - dist / 0.35);
        r = Math.min(255, Math.floor(r + 99 * intensity));
        g = Math.min(255, Math.floor(g + 102 * intensity));
        b = Math.min(255, Math.floor(b + 241 * intensity));
      }

      rawData[offset] = r;
      rawData[offset + 1] = g;
      rawData[offset + 2] = b;
      rawData[offset + 3] = a;
    }
  }

  const compressed = zlib.deflateSync(rawData);
  const idatChunk = createChunk('IDAT', compressed);
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const dir = path.resolve('public/icons');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(path.join(dir, 'icon-192.png'), createPNG(192, 192));
fs.writeFileSync(path.join(dir, 'icon-512.png'), createPNG(512, 512));
fs.writeFileSync(path.join(dir, 'icon-maskable-512.png'), createPNG(512, 512));
fs.writeFileSync(path.join(dir, 'apple-touch-icon.png'), createPNG(180, 180));
console.log('Successfully created PWA PNG icons!');
