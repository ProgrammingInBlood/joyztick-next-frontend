'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaSearch, FaCalendar } from 'react-icons/fa';

const featuredPosts = [
  {
    id: 1,
    title: 'The Future of Competitive Gaming',
    excerpt: 'Exploring emerging trends and technologies shaping the competitive gaming landscape.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800',
    author: {
      name: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800',
    },
    date: '2024-03-15',
    readTime: '5 min',
    category: 'Industry Insights',
    featured: true,
  },
  {
    id: 2,
    title: 'Building a Positive Gaming Community',
    excerpt: 'Tips and strategies for fostering an inclusive and supportive gaming environment.',
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800',
    },
    date: '2024-03-14',
    readTime: '4 min',
    category: 'Community',
    featured: true,
  },
  {
    id: 3,
    title: 'Tournament Organization Guide',
    excerpt: 'Everything you need to know about hosting successful gaming tournaments.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800',
    author: {
      name: 'Mike Wilson',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800',
    },
    date: '2024-03-13',
    readTime: '7 min',
    category: 'Tournaments',
    featured: true,
  },
];

const recentPosts = [
  {
    id: 4,
    title: 'Essential Tips for New Streamers',
    excerpt: 'Get started with streaming and build your audience with these proven tips.',
    image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&w=800',
    author: {
      name: 'Emily Zhang',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800',
    },
    date: '2024-03-12',
    readTime: '6 min',
    category: 'Streaming',
  },
  {
    id: 5,
    title: 'Improving Your Gaming Setup',
    excerpt: 'Optimize your gaming environment for better performance and comfort.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800',
    author: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=800',
    },
    date: '2024-03-11',
    readTime: '5 min',
    category: 'Setup Guide',
  },
  {
    id: 6,
    title: 'Mental Health in Gaming',
    excerpt: 'Maintaining balance and wellbeing while pursuing competitive gaming.',
    image: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&w=800',
    author: {
      name: 'Rachel Torres',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800',
    },
    date: '2024-03-10',
    readTime: '8 min',
    category: 'Wellness',
  },
];

const categories = [
  { name: 'All', count: 42 },
  { name: 'Industry Insights', count: 12 },
  { name: 'Community', count: 8 },
  { name: 'Tournaments', count: 15 },
  { name: 'Streaming', count: 7 },
  { name: 'Setup Guide', count: 5 },
  { name: 'Wellness', count: 4 },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = [...featuredPosts, ...recentPosts].filter(post =>
    (activeCategory === 'All' || post.category === activeCategory) &&
    (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
              Blog
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Insights, updates, and stories from the Joyztick community
            </p>
          </motion.div>
        </section>

        {/* Search and Categories */}
        <section className="mb-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative md:w-96">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-neutral-gray300 bg-background-tertiary pl-12 pr-4 py-3 text-text-primary outline-none transition-colors focus:border-primary-main focus:ring-2 focus:ring-primary-main/20"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`rounded-full px-4 py-2 text-sm transition-all ${
                    activeCategory === category.name
                      ? 'bg-primary-main text-white'
                      : 'bg-background-tertiary text-text-secondary hover:text-primary-main'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {activeCategory === 'All' && searchQuery === '' && (
          <section className="mb-16">
            <h2 className="mb-8 font-gaming text-2xl font-bold text-text-primary">Featured</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group overflow-hidden rounded-xl border border-neutral-gray300 bg-background-tertiary"
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background-tertiary to-transparent" />
                      <div className="absolute bottom-4 left-4 rounded-full bg-primary-main px-3 py-1 text-sm text-white">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full">
                          <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-sm">
                          <div className="font-medium text-text-primary">{post.author.name}</div>
                          <div className="text-text-secondary">{post.readTime} read</div>
                        </div>
                      </div>
                      <h3 className="mt-4 font-gaming text-xl text-text-primary group-hover:text-primary-main">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-text-secondary line-clamp-2">{post.excerpt}</p>
                      <div className="mt-4 flex items-center gap-4 text-sm text-text-secondary">
                        <div className="flex items-center gap-1">
                          <FaCalendar />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className="mb-8 font-gaming text-2xl font-bold text-text-primary">
            {searchQuery ? 'Search Results' : activeCategory === 'All' ? 'Recent Posts' : activeCategory}
          </h2>
          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group overflow-hidden rounded-xl border border-neutral-gray300 bg-background-tertiary"
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background-tertiary to-transparent" />
                      <div className="absolute bottom-4 left-4 rounded-full bg-primary-main px-3 py-1 text-sm text-white">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full">
                          <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-sm">
                          <div className="font-medium text-text-primary">{post.author.name}</div>
                          <div className="text-text-secondary">{post.readTime} read</div>
                        </div>
                      </div>
                      <h3 className="mt-4 font-gaming text-xl text-text-primary group-hover:text-primary-main">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-text-secondary line-clamp-2">{post.excerpt}</p>
                      <div className="mt-4 flex items-center gap-4 text-sm text-text-secondary">
                        <div className="flex items-center gap-1">
                          <FaCalendar />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-8 text-center">
              <p className="text-text-secondary">No articles found matching your criteria</p>
            </div>
          )}
        </section>

        {/* Newsletter */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 rounded-xl border border-neutral-gray300 bg-background-tertiary p-8 text-center"
        >
          <h2 className="font-gaming text-2xl font-bold text-text-primary">Stay Updated</h2>
          <p className="mt-2 text-text-secondary">
            Subscribe to our newsletter for the latest gaming insights and updates
          </p>
          <form className="mx-auto mt-6 flex max-w-md gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-neutral-gray300 bg-background-secondary px-4 py-2 text-text-primary outline-none transition-colors focus:border-primary-main focus:ring-2 focus:ring-primary-main/20"
            />
            <button
              type="submit"
              className="rounded-lg bg-primary-main px-6 py-2 font-gaming text-white transition-all hover:bg-primary-light"
            >
              Subscribe
            </button>
          </form>
        </motion.section>
      </div>
    </main>
  );
} 