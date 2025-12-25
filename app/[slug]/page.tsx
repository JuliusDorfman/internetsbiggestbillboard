// src/app/[slug]/page.tsx



import { videos } from './songs';
import VideoPlayer from './videoplayer';

export function generateStaticParams() {
  return Object.keys(videos).map((slug) => ({ slug }));
}

export default async function VideoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const video = videos[slug];

  if (!video) {
    return <div>not found</div>;
  }

  return <VideoPlayer videoId={video.id} start={video.start} />;
}

// const videos: Record<string, { id: string; start?: number }> = {
//   'spaghetti': { id: 'TvVtYaqCni8', start: 64 },
//   'blue-valentine': { id: 'EmeW6li6bbo', start: 146 },
//   'another-song': { id: 'dQw4w9WgXcQ', start: 0 },
// };

// // This tells Next.js which pages to generate at build time
// export function generateStaticParams() {
//   return Object.keys(videos).map((slug) => ({ slug }));
// }

// export default async function VideoPage({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params;
//   const video = videos[slug];
  
//   if (!video) {
//     return <div>not found</div>;
//   }

//   const src = `https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&start=${video.start || 0}`;

//   return (
//     <div style={{ background: '#000', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <iframe
//         src={src}
//         style={{ width: '100vw', height: '56.25vw', maxHeight: '100vh', maxWidth: '177.78vh', border: 'none' }}
//         allow="autoplay; encrypted-media"
//         allowFullScreen
//       />
//     </div>
//   );
// }