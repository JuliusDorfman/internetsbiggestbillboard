'use client';

import { useState } from 'react';

interface VideoPlayerProps {
  videoId: string;
  start?: number;
}

export default function VideoPlayer({ videoId, start = 0 }: VideoPlayerProps) {
  const [started, setStarted] = useState(false);

  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&start=${start}`;

  if (!started) {
    return (
      <div
        onClick={() => setStarted(true)}
        style={{
          background: '#000',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <div style={{ color: '#fff', fontSize: '24px', textAlign: 'center' }}>
          <div style={{ fontSize: '64px', marginBottom: '16px' }}>▶</div>
          <div>Tap to Pay!</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#000', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <iframe
        src={src}
        style={{ width: '100vw', height: '56.25vw', maxHeight: '100vh', maxWidth: '177.78vh', border: 'none' }}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
}