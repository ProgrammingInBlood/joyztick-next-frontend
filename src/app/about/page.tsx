'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGamepad, FaUsers, FaTrophy, FaCode } from 'react-icons/fa';

const features = [
  {
    icon: <FaGamepad size={24} />,
    title: 'Gaming First',
    description: 'Built by a gamer, for gamers. Understanding what makes gaming communities thrive.',
  },
  {
    icon: <FaUsers size={24} />,
    title: 'Community Driven',
    description: 'The platform is shaped by the feedback and needs of our vibrant gaming community.',
  },
  {
    icon: <FaTrophy size={24} />,
    title: 'Competitive Spirit',
    description: 'Fostering healthy competition and celebrating gaming achievements.',
  },
  {
    icon: <FaCode size={24} />,
    title: 'Innovation Focus',
    description: 'Constantly evolving with cutting-edge features and technologies.',
  },
];

const stats = [
  { value: '500K+', label: 'Active Users' },
  { value: '50+', label: 'Countries' },
  { value: '100+', label: 'Games' },
  { value: '1M+', label: 'Matches Played' },
];

export default function AboutPage() {
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
            About <span className="bg-gradient-to-r from-primary-main to-primary-light bg-clip-text text-transparent">Joyztick</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
            On a mission to create the ultimate gaming community platform where players can connect,
            compete, and celebrate their passion for gaming.
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-xl border border-neutral-gray300 bg-background-tertiary/50 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 text-primary-main">{feature.icon}</div>
                <h3 className="font-gaming text-xl font-bold text-text-primary">{feature.title}</h3>
                <p className="mt-2 text-text-secondary">{feature.description}</p>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-main/5 to-primary-light/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-background-secondary px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-gaming text-4xl font-bold text-primary-main">{stat.value}</div>
                <div className="mt-2 text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-background-primary px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative overflow-hidden rounded-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800"
                alt="Gaming Community"
                width={800}
                height={600}
                className="rounded-xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-main/20 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col justify-center"
            >
              <h2 className="font-gaming text-3xl font-bold text-text-primary md:text-4xl">
                The Vision
              </h2>
              <p className="mt-6 text-text-secondary">
                Joyztick envisions a future where gaming transcends entertainment to become a powerful force
                for connection, learning, and growth. The platform is designed to break down barriers
                and create meaningful connections through shared gaming experiences.
              </p>
              <p className="mt-4 text-text-secondary">
                By fostering an inclusive environment and providing cutting-edge tools for gamers,
                Joyztick is more than just a platform - it's a global gaming ecosystem
                where everyone can thrive.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="bg-background-secondary px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="font-gaming text-3xl font-bold text-text-primary md:text-4xl">
              The Journey
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
              Started as a passion project by a dedicated gamer and developer, Joyztick has grown into
              a thriving community platform. Every feature and improvement is driven by real feedback
              from our amazing gaming community.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 