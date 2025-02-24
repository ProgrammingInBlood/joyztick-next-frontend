import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'Games', href: '/games' },
  { name: 'Community', href: '/community' },
  { name: 'Tournaments', href: '/tournaments' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-background-primary/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logos/logo-with-text-white.svg"
            alt="Joyztick"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-gaming text-text-primary transition-colors hover:text-primary-main"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden font-gaming text-text-primary transition-colors hover:text-primary-main md:block"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-primary-main px-4 py-2 font-gaming text-white transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary-main/20"
          >
            Sign up
          </Link>
          <button className="rounded-lg border border-neutral-gray300 p-2 text-text-primary transition-colors hover:bg-background-tertiary md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
} 