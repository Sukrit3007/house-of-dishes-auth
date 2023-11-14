import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold">Welcome to Your Website</h1>
      <p className="text-lg">Explore the beauty of black and white.</p>
    </header>

    <section className="text-center p-8">
      <h2 className="text-3xl font-bold mb-4">Featured Content</h2>
      <Button variant="destructive"><Link href='dashboard' >Dashboard</Link></Button>
      <Button ><Link href='about' >About</Link></Button>
      {/* Add your content here */}
    </section>

    <footer className="text-center p-4">
      <p className="text-sm">© 2023 Your Website. All rights reserved.</p>
    </footer>
  </div>
  )
}
