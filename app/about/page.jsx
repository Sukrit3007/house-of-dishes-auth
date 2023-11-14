import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'

const about = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg">Learn more about our story.</p>
      </header>

      <section className="text-center max-w-2xl">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          metus eu mauris accumsan tincidunt. Curabitur vitae neque non augue
          laoreet commodo et eu leo.
        </p>
        <p>
          Integer ac neque vel mi rhoncus ultricies. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Nullam vel metus eu mauris accumsan tincidunt.
        </p>
        <Button>
          <Link href={'/'}>GO TO HOME</Link>
        </Button>
      </section>

      <footer className="text-center py-4">
        <p className="text-sm">© 2023 Your Website. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default about
