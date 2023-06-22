import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between p-24">
      
      <span>Welcome to Mixtape</span>
        <Image src="https://placehold.co/600x400/png" width={600} height={200} alt={''} />
      
      <iframe src="https://open.spotify.com/embed/playlist/6L8xX3Z0gHHCLdSLyef7lU?utm_source=generator&theme=0" width="100%" height="880" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    </main>
  )
}
