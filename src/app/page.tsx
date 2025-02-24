'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const glowVariant = {
  initial: { opacity: 0.5, scale: 1 },
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.2, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background-primary px-4 pt-20">
        {/* Simplified Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] opacity-5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,rgba(145,71,255,0.1),transparent)]" />

        {/* Single Optimized Glowing Orb */}
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_0deg,rgba(145,71,255,0.15),rgba(119,44,232,0.15),rgba(145,71,255,0.15))] blur-[120px] opacity-30" />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto max-w-6xl text-center"
        >
          <motion.div 
            variants={fadeIn}
            className="relative inline-block"
          >
            <div className="relative">
              <h1 className="text-center font-gaming text-6xl font-bold tracking-wider text-white md:text-7xl lg:text-8xl">
                Welcome to{" "}
                <span className="relative mt-4 block">
                  <span className="relative z-10 inline-flex items-center gap-4 bg-gradient-to-r from-primary-main to-primary-light bg-clip-text text-transparent">
                    Joyztick
                    <div className="relative h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20">
        <Image
                        src="/logos/logo-with-only-icon-white.svg"
                        alt="Joyztick Icon"
                        fill
                        className="object-contain"
          priority
                      />
                      <div className="absolute inset-0 rounded-full bg-primary-main/20 blur-lg" />
                    </div>
                  </span>
                  <div className="absolute -bottom-2 left-0 h-[6px] w-full rounded-full bg-gradient-to-r from-primary-main/40 to-primary-light/40 blur-sm" />
                  <span className="absolute -right-12 -top-8 text-4xl">⚡</span>
                </span>
              </h1>
            </div>
          </motion.div>

          <motion.p 
            variants={fadeIn}
            className="mx-auto mt-12 max-w-2xl text-center text-xl text-text-primary/90 md:text-2xl"
          >
            Your Ultimate Gaming Community Platform
          </motion.p>

          <motion.div 
            variants={fadeIn}
            className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8"
          >
            <Link
              href="/signup"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-primary-main to-primary-light px-8 py-4 font-gaming text-lg font-semibold text-white transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-main to-primary-light" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-main via-primary-light to-primary-main opacity-50" />
              <span className="relative z-10">Join the Adventure</span>
            </Link>
            <Link
              href="/explore"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-primary-main bg-background-primary/50 px-8 py-4 font-gaming text-lg font-semibold text-primary-main backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary-light hover:text-primary-light"
            >
              Explore Games
            </Link>
          </motion.div>
        </motion.div>

        {/* Simplified Scroll Indicator */}
        <div className="absolute bottom-12 left-0 right-0 mx-auto w-full text-center">
          <div className="flex flex-col items-center gap-2 text-text-secondary">
            <span className="text-sm font-gaming">Scroll to Explore</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="h-6 w-6 animate-bounce"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </section>

      {/* Mobile Apps Section */}
      <section className="relative overflow-hidden bg-background-primary px-4 py-24">
        {/* Background Effects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_40px,rgba(145,71,255,0.05)_40px,rgba(145,71,255,0.05)_80px)]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-main/5 to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-gaming text-4xl font-bold bg-gradient-to-r from-primary-main to-primary-light bg-clip-text text-transparent md:text-5xl">
              Take Joyztick Everywhere
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
              Stay connected with your gaming community on the go
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 flex flex-col items-center justify-center gap-12 md:flex-row md:gap-16"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative h-[100px] w-[300px] overflow-hidden rounded-2xl bg-gradient-to-br from-background-primary/80 to-background-secondary/80 p-[1px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-main/20 to-primary-light/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-background-primary p-4">
                <Image
                  src="/images/download-on-the-app-store-apple-logo.svg"
                  alt="App Store"
                  width={280}
                  height={90}
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                  priority
                />
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                >
                  <div className="flex flex-col items-center">
                    <span className="font-gaming text-2xl text-primary-main">Coming Soon</span>
                    <span className="mt-1 text-sm text-text-secondary">iOS App Store</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative h-[100px] w-[300px] overflow-hidden rounded-2xl bg-gradient-to-br from-background-primary/80 to-background-secondary/80 p-[1px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-main/20 to-primary-light/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-background-primary p-4">
            <Image
                  src="/images/google-play-badge-logo.svg"
                  alt="Play Store"
                  width={280}
                  height={90}
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                  priority
                />
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                >
                  <div className="flex flex-col items-center">
                    <span className="font-gaming text-2xl text-primary-main">Coming Soon</span>
                    <span className="mt-1 text-sm text-text-secondary">Google Play Store</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-text-secondary">
              Get notified when we launch! <Link href="/notify" className="text-primary-main hover:text-primary-light">Join the waitlist →</Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative overflow-hidden bg-background-secondary px-4 py-24">
        {/* Background Effects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_20px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-main/5 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-7xl"
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-main/5 to-primary-light/5 transition-all duration-300 group-hover:from-primary-main/10 group-hover:to-primary-light/10" />
                <div className="relative space-y-2 rounded-xl border border-primary-main/20 bg-background-tertiary/50 p-6 text-center backdrop-blur-sm transition-all duration-300 group-hover:border-primary-main/40">
                  <div className="font-gaming text-4xl font-bold bg-gradient-to-r from-primary-main to-primary-light bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-sm text-text-secondary">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative overflow-hidden bg-background-primary px-4 py-24">
        {/* Background Effects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_40px,rgba(145,71,255,0.05)_40px,rgba(145,71,255,0.05)_80px)]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-main/5 to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-gaming text-4xl font-bold bg-gradient-to-r from-primary-main to-primary-light bg-clip-text text-transparent md:text-5xl">
              Why Choose Joyztick?
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Experience gaming like never before
            </p>
          </motion.div>
          
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 to-primary-light/5 transition-all duration-300 group-hover:from-primary-main/10 group-hover:to-primary-light/10" />
                <div className="relative space-y-4 rounded-xl border border-primary-main/20 bg-background-tertiary/50 p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-primary-main/40">
                  <div className="relative h-12 w-12">
                    <span className="absolute inset-0 text-4xl">{feature.icon}</span>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-primary-main/20 blur-lg"
                    />
                  </div>
                  <h3 className="font-gaming text-xl font-semibold text-text-primary group-hover:bg-gradient-to-r group-hover:from-primary-main group-hover:to-primary-light group-hover:bg-clip-text group-hover:text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="relative overflow-hidden bg-background-secondary px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-gaming text-4xl font-bold text-primary-main md:text-5xl">
              Popular Games
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
              Join thousands of players in these trending games
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {games.map((game, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-background-tertiary"
              >
                <div className="absolute inset-0">
          <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="font-gaming text-xl font-bold text-white group-hover:text-primary-main">
                    {game.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-semantic-success animate-pulse" />
                    <p className="text-sm text-gray-300">{game.players} Active Players</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="relative overflow-hidden bg-background-primary px-4 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_20px]"
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-gaming text-4xl font-bold text-primary-main md:text-5xl">
                Join Our Growing Community
              </h2>
              <p className="mt-6 text-lg text-text-secondary">
                Connect with millions of gamers worldwide. Share your gaming moments, join tournaments,
                and make new friends who share your passion for gaming.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                {communityLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 rounded-xl bg-background-tertiary px-6 py-3 font-gaming text-text-primary transition-all duration-300 hover:bg-primary-main hover:text-white"
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {communityImages.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`relative aspect-square overflow-hidden rounded-xl ${
                    index === 1 ? 'mt-8' : ''
                  }`}
        >
          <Image
                    src={image}
                    alt="Community"
                    fill
                    className="object-cover transition-all duration-500 hover:scale-110"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative overflow-hidden bg-background-secondary px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <h2 className="font-gaming text-4xl font-bold text-primary-main md:text-5xl">
            Stay in the Game
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Subscribe to our newsletter for the latest updates, gaming news, and exclusive offers
          </p>
          <form className="mt-8 flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-neutral-gray300 bg-background-tertiary px-6 py-4 text-text-primary outline-none transition-all duration-300 focus:border-primary-main focus:ring-2 focus:ring-primary-main/20"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="rounded-xl bg-primary-main px-8 py-4 font-gaming font-semibold text-white transition-all duration-300 hover:bg-primary-light hover:shadow-lg hover:shadow-primary-main/20"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </section>
    </main>
  )
}

const features = [
  {
    icon: '🎮',
    title: 'Game Together',
    description: 'Find gaming partners and join communities that share your interests',
  },
  {
    icon: '🏆',
    title: 'Compete & Win',
    description: 'Participate in tournaments and climb the leaderboards',
  },
  {
    icon: '💬',
    title: 'Connect & Chat',
    description: 'Real-time chat and voice communication with fellow gamers',
  },
  {
    icon: '📊',
    title: 'Track Progress',
    description: 'Monitor your gaming stats and achievements across different games',
  },
  {
    icon: '🎯',
    title: 'Custom Matches',
    description: 'Create and join custom game sessions with your preferred rules',
  },
  {
    icon: '🌟',
    title: 'Events & Updates',
    description: 'Stay updated with the latest gaming events and community news',
  },
]

const stats = [
  { value: '1M+', label: 'Active Players' },
  { value: '50K+', label: 'Daily Matches' },
  { value: '100+', label: 'Game Titles' },
  { value: '10K+', label: 'Communities' },
]

const games = [
  {
    title: 'Valorant',
    players: '200K+',
    image: 'https://media.rawg.io/media/games/b11/b11127b9ee3c3701bd15b9af3286d20e.jpg',
  },
  {
    title: 'League of Legends',
    players: '300K+',
    image: 'https://media.rawg.io/media/games/78b/78bc81e247fc7e77af700cbd632a9297.jpg',
  },
  {
    title: 'CS:GO 2',
    players: '250K+',
    image: 'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
  },
  {
    title: 'Apex Legends',
    players: '150K+',
    image: 'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
  },
]

const communityLinks = [
  {
    icon: '🎮',
    label: 'Join Discord',
    href: '/discord',
  },
  {
    icon: '🌟',
    label: 'Forums',
    href: '/forums',
  },
]

const communityImages = [
  'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800',
  'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800',
  'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=800',
  'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800',
]
