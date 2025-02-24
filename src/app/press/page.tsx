'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaDownload, FaEnvelope, FaTwitter, FaLinkedin } from 'react-icons/fa';

const pressReleases = [
  {
    id: 1,
    title: 'Joyztick Launches Next-Generation Gaming Community Platform',
    date: '2024-03-15',
    excerpt: 'Revolutionary platform combines competitive gaming, social features, and innovative tournament systems.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800',
    category: 'Launch',
  },
  {
    id: 2,
    title: 'Major Tournament Partnership Announcement',
    date: '2024-03-10',
    excerpt: 'Strategic partnership with leading esports organizations to host exclusive tournaments.',
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800',
    category: 'Partnership',
  },
  {
    id: 3,
    title: 'Joyztick Reaches 500,000 Active Users',
    date: '2024-03-05',
    excerpt: 'Milestone achievement showcases rapid growth and community engagement.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800',
    category: 'Milestone',
  },
];

const mediaResources = [
  {
    title: 'Brand Assets',
    description: 'Logos, icons, and brand guidelines',
    downloadUrl: '/downloads/brand-assets.zip',
    format: 'ZIP',
    size: '25 MB',
  },
  {
    title: 'Press Kit',
    description: 'Company information, fact sheet, and executive bios',
    downloadUrl: '/downloads/press-kit.pdf',
    format: 'PDF',
    size: '10 MB',
  },
  {
    title: 'Media Photos',
    description: 'High-resolution photos and screenshots',
    downloadUrl: '/downloads/media-photos.zip',
    format: 'ZIP',
    size: '50 MB',
  },
  {
    title: 'Platform Statistics',
    description: 'Latest user statistics and platform growth data',
    downloadUrl: '/downloads/statistics.pdf',
    format: 'PDF',
    size: '5 MB',
  },
];

const pressContacts = [
  {
    name: 'Sarah Johnson',
    role: 'Head of Communications',
    email: 'press@joyztick.com',
    social: {
      twitter: 'https://twitter.com/joyztick_sarah',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
    },
  },
  {
    name: 'Media Inquiries',
    role: 'Press Team',
    email: 'media@joyztick.com',
    response: '24 hours',
  },
];

const companyFacts = [
  {
    label: 'Founded',
    value: '2024',
  },
  {
    label: 'Active Users',
    value: '500K+',
  },
  {
    label: 'Countries',
    value: '50+',
  },
  {
    label: 'Team Size',
    value: '50+',
  },
];

export default function PressPage() {
  return (
    <main className="min-h-screen bg-background-primary">
      <div className="mx-auto max-w-7xl px-4 py-32">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-2xl"
          >
            <h1 className="font-gaming text-4xl font-bold text-text-primary md:text-5xl">
              Press Center
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Latest news, media resources, and press contacts for Joyztick
            </p>
          </motion.div>
        </section>

        {/* Company Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 rounded-xl border border-neutral-gray300 bg-background-tertiary p-8"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-gaming text-2xl font-bold text-text-primary">About Joyztick</h2>
              <p className="mt-4 text-text-secondary">
                Joyztick is a next-generation gaming community platform that brings together competitive
                gaming, social features, and innovative tournament systems. Our mission is to create
                the ultimate destination for gamers to connect, compete, and celebrate their passion
                for gaming.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {companyFacts.map((fact) => (
                  <div key={fact.label} className="rounded-lg bg-background-secondary p-4">
                    <div className="font-gaming text-2xl text-primary-main">{fact.value}</div>
                    <div className="text-sm text-text-secondary">{fact.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800"
                alt="Joyztick Platform"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Press Releases */}
        <section className="mb-16">
          <h2 className="mb-8 font-gaming text-2xl font-bold text-text-primary">Latest News</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pressReleases.map((release, index) => (
              <motion.article
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group overflow-hidden rounded-xl border border-neutral-gray300 bg-background-tertiary"
              >
                <div className="relative h-48">
                  <Image
                    src={release.image}
                    alt={release.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-tertiary to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-primary-main px-3 py-1 text-sm text-white">
                    {release.category}
                  </div>
                </div>
                <div className="p-6">
                  <time className="text-sm text-text-secondary">
                    {new Date(release.date).toLocaleDateString()}
                  </time>
                  <h3 className="mt-2 font-gaming text-xl text-text-primary">{release.title}</h3>
                  <p className="mt-2 text-text-secondary">{release.excerpt}</p>
                  <button className="mt-4 text-primary-main transition-colors hover:text-primary-light">
                    Read More →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Media Resources */}
        <section className="mb-16">
          <h2 className="mb-8 font-gaming text-2xl font-bold text-text-primary">Media Resources</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {mediaResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-main">
                  <FaDownload className="text-xl text-white" />
                </div>
                <h3 className="font-gaming text-lg text-text-primary">{resource.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{resource.description}</p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-text-secondary">{resource.format} • {resource.size}</span>
                  <button className="text-primary-main transition-colors hover:text-primary-light">
                    Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Press Contacts */}
        <section className="mb-16">
          <h2 className="mb-8 font-gaming text-2xl font-bold text-text-primary">Press Contacts</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {pressContacts.map((contact, index) => (
              <motion.div
                key={contact.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
              >
                <h3 className="font-gaming text-xl text-text-primary">{contact.name}</h3>
                <p className="mt-1 text-text-secondary">{contact.role}</p>
                <div className="mt-4 flex items-center gap-2">
                  <FaEnvelope className="text-primary-main" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-text-primary transition-colors hover:text-primary-main"
                  >
                    {contact.email}
                  </a>
                </div>
                {contact.social && (
                  <div className="mt-4 flex gap-4">
                    <a
                      href={contact.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary transition-colors hover:text-primary-main"
                    >
                      <FaTwitter size={20} />
                    </a>
                    <a
                      href={contact.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary transition-colors hover:text-primary-main"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                )}
                {contact.response && (
                  <p className="mt-4 text-sm text-text-secondary">
                    Response time: {contact.response}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Additional Resources */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-8 text-center"
        >
          <h2 className="font-gaming text-2xl font-bold text-text-primary">Additional Resources</h2>
          <p className="mt-2 text-text-secondary">
            Find more information about Joyztick in our other resources
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/about"
              className="rounded-lg bg-primary-main px-6 py-3 font-gaming text-white transition-all hover:bg-primary-light"
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className="rounded-lg border border-neutral-gray300 bg-transparent px-6 py-3 font-gaming text-text-primary transition-all hover:bg-background-secondary"
            >
              Blog
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
} 