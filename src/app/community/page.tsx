'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaDiscord, FaReddit, FaTwitch, FaYoutube, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Discord',
    icon: <FaDiscord size={24} />,
    href: 'https://discord.gg/joyztick',
    color: '#7289DA',
    members: '50K+',
  },
  {
    name: 'Reddit',
    icon: <FaReddit size={24} />,
    href: 'https://reddit.com/r/joyztick',
    color: '#FF4500',
    members: '25K+',
  },
  {
    name: 'Twitch',
    icon: <FaTwitch size={24} />,
    href: 'https://twitch.tv/joyztick',
    color: '#9146FF',
    members: '10K+',
  },
  {
    name: 'YouTube',
    icon: <FaYoutube size={24} />,
    href: 'https://youtube.com/joyztick',
    color: '#FF0000',
    members: '100K+',
  },
  {
    name: 'Twitter',
    icon: <FaTwitter size={24} />,
    href: 'https://twitter.com/joyztick',
    color: '#1DA1F2',
    members: '75K+',
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Valorant Tournament',
    date: '2024-04-15',
    time: '18:00 UTC',
    prize: '$10,000',
    image: 'https://media.rawg.io/media/games/b11/b11127b9ee3c3701bd15b9af3286d20e.jpg',
    participants: 128,
  },
  {
    id: 2,
    title: 'League of Legends Championship',
    date: '2024-04-20',
    time: '20:00 UTC',
    prize: '$15,000',
    image: 'https://media.rawg.io/media/games/78b/78bc81e247fc7e77af700cbd632a9297.jpg',
    participants: 256,
  },
  {
    id: 3,
    title: 'CS:GO 2 Masters',
    date: '2024-04-25',
    time: '19:00 UTC',
    prize: '$20,000',
    image: 'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
    participants: 192,
  },
];

const topPlayers = [
  {
    rank: 1,
    username: 'ProGamer123',
    points: 15000,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100',
  },
  {
    rank: 2,
    username: 'GameMaster',
    points: 14500,
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100',
  },
  {
    rank: 3,
    username: 'VictoryQueen',
    points: 14000,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100',
  },
  {
    rank: 4,
    username: 'LegendaryPlayer',
    points: 13500,
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100',
  },
  {
    rank: 5,
    username: 'GamingWizard',
    points: 13000,
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100',
  },
];

const forumCategories = [
  {
    name: 'General Discussion',
    description: 'Chat about anything gaming related',
    topics: 1250,
    posts: 8500,
  },
  {
    name: 'Game Strategies',
    description: 'Share tips and tricks for various games',
    topics: 850,
    posts: 6200,
  },
  {
    name: 'Technical Support',
    description: 'Get help with technical issues',
    topics: 450,
    posts: 3100,
  },
  {
    name: 'Tournaments',
    description: 'Discuss upcoming and ongoing tournaments',
    topics: 320,
    posts: 2800,
  },
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] opacity-5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,rgba(145,71,255,0.1),transparent)]" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mx-auto max-w-7xl text-center"
        >
          <h1 className="font-gaming text-4xl font-bold text-text-primary md:text-6xl">
            Join Our <span className="bg-gradient-to-r from-primary-main to-primary-light bg-clip-text text-transparent">Community</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
            Connect with millions of gamers worldwide. Share experiences, join tournaments,
            and be part of our growing gaming family.
          </p>
        </motion.div>
      </section>

      {/* Social Links */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {socialLinks.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-neutral-gray300 bg-background-tertiary p-6 transition-all hover:-translate-y-1 hover:border-primary-main"
                style={{ '--hover-color': platform.color } as React.CSSProperties}
              >
                <div className="flex items-center justify-between">
                  <div className="text-text-primary transition-colors group-hover:text-[var(--hover-color)]">
                    {platform.icon}
                  </div>
                  <div className="text-sm text-text-secondary">{platform.members} members</div>
                </div>
                <div className="mt-4">
                  <h3 className="font-gaming text-lg font-bold text-text-primary">{platform.name}</h3>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-background-secondary px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="font-gaming text-3xl font-bold text-text-primary md:text-4xl">
              Upcoming Events
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
              Join our exciting tournaments and events with amazing prizes
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-background-tertiary"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-tertiary to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-gaming text-xl font-bold text-text-primary">{event.title}</h3>
                  <div className="mt-4 space-y-2 text-sm text-text-secondary">
                    <div>Date: {new Date(event.date).toLocaleDateString()}</div>
                    <div>Time: {event.time}</div>
                    <div>Prize Pool: {event.prize}</div>
                    <div>Participants: {event.participants}</div>
                  </div>
                  <button className="mt-6 w-full rounded-lg bg-primary-main py-2 font-gaming text-white transition-all hover:bg-primary-light">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Forums */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="font-gaming text-3xl font-bold text-text-primary md:text-4xl">
              Community Forums
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
              Join the discussion and share your thoughts with fellow gamers
            </p>
          </motion.div>

          <div className="mt-12 space-y-4">
            {forumCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-xl border border-neutral-gray300 bg-background-tertiary p-6 transition-all hover:border-primary-main"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-gaming text-xl font-bold text-text-primary">{category.name}</h3>
                    <p className="mt-1 text-sm text-text-secondary">{category.description}</p>
                  </div>
                  <div className="text-right text-sm text-text-secondary">
                    <div>{category.topics} topics</div>
                    <div>{category.posts} posts</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="bg-background-secondary px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="font-gaming text-3xl font-bold text-text-primary md:text-4xl">
              Top Players
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
              Our highest-ranked community members
            </p>
          </motion.div>

          <div className="mt-12 overflow-hidden rounded-xl border border-neutral-gray300 bg-background-tertiary">
            {topPlayers.map((player, index) => (
              <motion.div
                key={player.rank}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between border-b border-neutral-gray300 p-6 last:border-0"
              >
                <div className="flex items-center gap-4">
                  <div className="font-gaming text-2xl font-bold text-primary-main">#{player.rank}</div>
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={player.avatar}
                      alt={player.username}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="font-gaming text-lg text-text-primary">{player.username}</div>
                </div>
                <div className="text-text-secondary">{player.points.toLocaleString()} points</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 