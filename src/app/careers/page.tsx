'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaSearch, FaGamepad, FaCode, FaChartLine, FaUsers, FaLaptop, FaGlobe, FaHeart } from 'react-icons/fa';

const departments = [
  { name: 'All', count: 12 },
  { name: 'Engineering', count: 5 },
  { name: 'Product', count: 2 },
  { name: 'Design', count: 2 },
  { name: 'Marketing', count: 1 },
  { name: 'Community', count: 2 },
];

const locations = [
  { name: 'All', count: 12 },
  { name: 'Remote', count: 8 },
  { name: 'San Francisco', count: 2 },
  { name: 'London', count: 2 },
];

const jobs = [
  {
    id: 1,
    title: 'Senior Full Stack Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '5+ years',
    salary: '$130K - $180K',
    description: 'Join our core engineering team to build and scale our gaming platform.',
    icon: <FaCode />,
  },
  {
    id: 2,
    title: 'Product Manager, Tournaments',
    department: 'Product',
    location: 'San Francisco',
    type: 'Full-time',
    experience: '4+ years',
    salary: '$120K - $160K',
    description: 'Lead the development of our tournament platform and competitive features.',
    icon: <FaGamepad />,
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
    salary: '$90K - $130K',
    description: 'Create beautiful and intuitive experiences for our gaming community.',
    icon: <FaLaptop />,
  },
  {
    id: 4,
    title: 'Growth Marketing Manager',
    department: 'Marketing',
    location: 'London',
    type: 'Full-time',
    experience: '4+ years',
    salary: '$100K - $140K',
    description: 'Drive user acquisition and engagement through innovative marketing strategies.',
    icon: <FaChartLine />,
  },
  {
    id: 5,
    title: 'Community Manager',
    department: 'Community',
    location: 'Remote',
    type: 'Full-time',
    experience: '2+ years',
    salary: '$70K - $90K',
    description: 'Build and nurture our growing gaming community across all platforms.',
    icon: <FaUsers />,
  },
];

const benefits = [
  {
    icon: <FaGlobe className="text-3xl text-primary-main" />,
    title: 'Remote-First Culture',
    description: 'Work from anywhere in the world with flexible hours.',
  },
  {
    icon: <FaGamepad className="text-3xl text-primary-main" />,
    title: 'Gaming Perks',
    description: 'Free games, tournament credits, and gaming equipment.',
  },
  {
    icon: <FaHeart className="text-3xl text-primary-main" />,
    title: 'Health & Wellness',
    description: 'Comprehensive health coverage and wellness programs.',
  },
  {
    icon: <FaChartLine className="text-3xl text-primary-main" />,
    title: 'Growth & Development',
    description: 'Learning budget and career development opportunities.',
  },
];

const values = [
  {
    title: 'Player First',
    description: 'We build everything with our gaming community in mind.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800',
  },
  {
    title: 'Innovation',
    description: 'We push boundaries and embrace new technologies.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800',
  },
  {
    title: 'Inclusivity',
    description: 'We create a welcoming environment for all gamers.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800',
  },
];

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDepartment, setActiveDepartment] = useState('All');
  const [activeLocation, setActiveLocation] = useState('All');

  const filteredJobs = jobs.filter(job =>
    (activeDepartment === 'All' || job.department === activeDepartment) &&
    (activeLocation === 'All' || job.location === activeLocation) &&
    (job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     job.description.toLowerCase().includes(searchQuery.toLowerCase()))
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
              Join Our Team
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Help us build the future of gaming communities
            </p>
          </motion.div>
        </section>

        {/* Company Values */}
        <section className="mb-16">
          <h2 className="mb-8 font-gaming text-2xl font-bold text-text-primary">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-primary to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="font-gaming text-2xl text-white">{value.title}</h3>
                    <p className="mt-2 text-text-secondary">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Job Search */}
        <section className="mb-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative md:w-96">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-neutral-gray300 bg-background-tertiary pl-12 pr-4 py-3 text-text-primary outline-none transition-colors focus:border-primary-main focus:ring-2 focus:ring-primary-main/20"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept.name}
                    onClick={() => setActiveDepartment(dept.name)}
                    className={`rounded-full px-4 py-2 text-sm transition-all ${
                      activeDepartment === dept.name
                        ? 'bg-primary-main text-white'
                        : 'bg-background-tertiary text-text-secondary hover:text-primary-main'
                    }`}
                  >
                    {dept.name} ({dept.count})
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {locations.map((loc) => (
                  <button
                    key={loc.name}
                    onClick={() => setActiveLocation(loc.name)}
                    className={`rounded-full px-4 py-2 text-sm transition-all ${
                      activeLocation === loc.name
                        ? 'bg-primary-main text-white'
                        : 'bg-background-tertiary text-text-secondary hover:text-primary-main'
                    }`}
                  >
                    {loc.name} ({loc.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="mb-16">
          <h2 className="mb-8 font-gaming text-2xl font-bold text-text-primary">
            {searchQuery ? 'Search Results' : 'Open Positions'}
          </h2>
          {filteredJobs.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-xl border border-neutral-gray300 bg-background-tertiary p-6 transition-all hover:border-primary-main"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-main text-white">
                        {job.icon}
                      </div>
                      <div>
                        <h3 className="font-gaming text-xl text-text-primary">{job.title}</h3>
                        <p className="text-text-secondary">{job.department}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary-main">{job.location}</div>
                      <div className="text-sm text-text-secondary">{job.type}</div>
                    </div>
                  </div>
                  <p className="mb-4 text-text-secondary">{job.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1 text-sm text-text-secondary">
                      <div>Experience: {job.experience}</div>
                      <div>Salary: {job.salary}</div>
                    </div>
                    <button className="rounded-lg bg-primary-main px-6 py-2 font-gaming text-white transition-all hover:bg-primary-light">
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-8 text-center">
              <p className="text-text-secondary">No positions found matching your criteria</p>
            </div>
          )}
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="mb-8 font-gaming text-2xl font-bold text-text-primary">Benefits & Perks</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="font-gaming text-lg text-text-primary">{benefit.title}</h3>
                <p className="mt-2 text-text-secondary">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-8 text-center"
        >
          <h2 className="font-gaming text-2xl font-bold text-text-primary">Don&apos;t See Your Role?</h2>
          <p className="mt-2 text-text-secondary">
            We&apos;re always looking for talented people. Send us your resume and we&apos;ll keep you in mind for future opportunities.
          </p>
          <button className="mt-6 rounded-lg bg-primary-main px-6 py-3 font-gaming text-white transition-all hover:bg-primary-light">
            Send Resume
          </button>
        </motion.section>
      </div>
    </main>
  );
} 