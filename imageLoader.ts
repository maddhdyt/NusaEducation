'use client';

export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (src.startsWith('https://ik.imagekit.io')) {
    const separator = src.includes('?') ? '&' : '?';
    return `${src}${separator}tr=w-${width},q-${quality || 75},f-auto`;
  }
  return src;
}
