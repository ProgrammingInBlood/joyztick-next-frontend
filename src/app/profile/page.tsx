'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaTrophy, FaGamepad, FaUsers, FaStar, FaCog, FaEdit } from 'react-icons/fa';

// Mock data - In a real app, this would come from an API
const user = {
  id: 1,
  username: 'ProGamer123',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800',
  level: 42,
  xp: 8750,
  xpToNextLevel: 10000,
  joinDate: '2024-01-15',
  status: 'online',
  bio: 'Competitive gamer with a passion for FPS and strategy games. Always looking for new challenges and teammates!',
  location: 'New York, USA',
  socialLinks: {
    twitch: 'https://twitch.tv/progamer123',
    discord: 'ProGamer123#1234',
    twitter: 'https://twitter.com/progamer123',
  },
};

const stats = [
  { label: 'Games Played', value: '1,234' },
  { label: 'Win Rate', value: '68%' },
  { label: 'Tournament Wins', value: '15' },
  { label: 'Total Hours', value: '2,500' },
];

const achievements = [
  {
    id: 1,
    title: 'First Victory',
    description: 'Win your first tournament match',
    icon: '🏆',
    rarity: 'common',
    earnedDate: '2024-01-20',
  },
  {
    id: 2,
    title: 'Tournament Champion',
    description: 'Win a tournament',
    icon: '👑',
    rarity: 'rare',
    earnedDate: '2024-02-15',
  },
  {
    id: 3,
    title: 'Community Leader',
    description: 'Create a gaming community with 100+ members',
    icon: '👥',
    rarity: 'epic',
    earnedDate: '2024-03-01',
  },
  {
    id: 4,
    title: 'Dedicated Gamer',
    description: 'Play for 1000+ hours',
    icon: '⭐',
    rarity: 'legendary',
    earnedDate: '2024-03-10',
  },
];

const recentActivity = [
  {
    id: 1,
    type: 'tournament',
    title: 'Valorant Pro League',
    result: 'Victory',
    date: '2024-03-15',
    reward: '+500 XP',
  },
  {
    id: 2,
    type: 'achievement',
    title: 'Tournament Champion',
    result: 'Unlocked',
    date: '2024-03-14',
    reward: '+200 XP',
  },
  {
    id: 3,
    type: 'match',
    title: 'Ranked Match',
    result: 'Victory',
    date: '2024-03-13',
    reward: '+100 XP',
  },
];

const gameStats = [
  {
    game: 'Valorant',
    stats: {
      rank: 'Diamond II',
      matchesPlayed: 450,
      winRate: '65%',
      kd: '1.8',
      accuracy: '68%',
    },
  },
  {
    game: 'League of Legends',
    stats: {
      rank: 'Platinum I',
      matchesPlayed: 320,
      winRate: '58%',
      kda: '3.2',
      cs: '7.5',
    },
  },
  {
    game: 'CS:GO',
    stats: {
      rank: 'Global Elite',
      matchesPlayed: 464,
      winRate: '71%',
      kd: '2.1',
      accuracy: '72%',
    },
  },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'achievements' | 'stats'>('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'stats', label: 'Game Stats' },
  ] as const;

  return (
    <main className="min-h-screen bg-background-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] opacity-5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,rgba(145,71,255,0.1),transparent)]" />
        
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary-main md:h-48 md:w-48">
                <Image
                  src={user.avatar}
                  alt={user.username}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-semantic-success ring-2 ring-background-primary" />
            </motion.div>

            {/* User Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center md:text-left"
            >
              <div className="flex items-center gap-4">
                <h1 className="font-gaming text-4xl font-bold text-text-primary">
                  {user.username}
                </h1>
                <Link
                  href="/settings"
                  className="rounded-lg border border-neutral-gray300 bg-background-tertiary p-2 text-text-secondary transition-colors hover:border-primary-main hover:text-primary-main"
                >
                  <FaCog size={20} />
                </Link>
              </div>
              <p className="mt-2 text-text-secondary">{user.location}</p>
              <p className="mt-4 max-w-xl text-text-secondary">{user.bio}</p>

              {/* Level Progress */}
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <span className="font-gaming text-sm text-text-secondary">Level {user.level}</span>
                  <span className="text-sm text-text-secondary">{user.xp}/{user.xpToNextLevel} XP</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-background-tertiary">
                  <div
                    className="h-full rounded-full bg-primary-main"
                    style={{ width: `${(user.xp / user.xpToNextLevel) * 100}%` }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-4 text-center"
              >
                <div className="font-gaming text-2xl font-bold text-primary-main">{stat.value}</div>
                <div className="mt-1 text-sm text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          {/* Tabs */}
          <div className="mb-12 flex justify-center">
            <div className="inline-flex rounded-xl bg-background-tertiary p-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-lg px-6 py-2 font-gaming transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary-main text-white'
                      : 'text-text-secondary hover:text-primary-main'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Recent Activity */}
              <div className="lg:col-span-2 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
                >
                  <h2 className="font-gaming text-2xl font-bold text-text-primary">Recent Activity</h2>
                  <div className="mt-6 space-y-4">
                    {recentActivity.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-center justify-between rounded-lg bg-background-secondary p-4"
                      >
                        <div>
                          <div className="font-gaming text-lg text-text-primary">{activity.title}</div>
                          <div className="mt-1 text-sm text-text-secondary">
                            {activity.result} • {activity.date}
                          </div>
                        </div>
                        <div className="text-semantic-success">{activity.reward}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Latest Achievements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
                >
                  <h2 className="font-gaming text-2xl font-bold text-text-primary">Latest Achievements</h2>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {achievements.slice(0, 4).map((achievement) => (
                      <div
                        key={achievement.id}
                        className="rounded-lg bg-background-secondary p-4"
                      >
                        <div className="text-3xl">{achievement.icon}</div>
                        <div className="mt-2 font-gaming text-lg text-text-primary">{achievement.title}</div>
                        <div className="mt-1 text-sm text-text-secondary">{achievement.description}</div>
                        <div className="mt-2 text-xs text-primary-main">{achievement.earnedDate}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
                >
                  <h2 className="font-gaming text-2xl font-bold text-text-primary">Connect</h2>
                  <div className="mt-4 space-y-4">
                    {Object.entries(user.socialLinks).map(([platform, link]) => (
                      <Link
                        key={platform}
                        href={link}
                        className="flex items-center justify-between rounded-lg bg-background-secondary p-3 transition-colors hover:bg-background-primary"
                      >
                        <span className="capitalize text-text-primary">{platform}</span>
                        <span className="text-primary-main">View →</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Account Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
                >
                  <h2 className="font-gaming text-2xl font-bold text-text-primary">Account Info</h2>
                  <div className="mt-4 space-y-4">
                    <div>
                      <div className="text-sm text-text-secondary">Member Since</div>
                      <div className="mt-1 text-text-primary">{new Date(user.joinDate).toLocaleDateString()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-text-secondary">Status</div>
                      <div className="mt-1 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-semantic-success" />
                        <span className="capitalize text-text-primary">{user.status}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
                >
                  <div className="text-4xl">{achievement.icon}</div>
                  <div className="mt-4">
                    <div className="font-gaming text-xl font-bold text-text-primary">{achievement.title}</div>
                    <div className="mt-2 text-text-secondary">{achievement.description}</div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className={`rounded-full px-3 py-1 text-sm ${
                      achievement.rarity === 'legendary' ? 'bg-yellow-500/20 text-yellow-500' :
                      achievement.rarity === 'epic' ? 'bg-purple-500/20 text-purple-500' :
                      achievement.rarity === 'rare' ? 'bg-blue-500/20 text-blue-500' :
                      'bg-gray-500/20 text-gray-500'
                    }`}>
                      {achievement.rarity}
                    </span>
                    <span className="text-sm text-text-secondary">{achievement.earnedDate}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Game Stats Tab */}
          {activeTab === 'stats' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {gameStats.map((game) => (
                <div
                  key={game.game}
                  className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
                >
                  <h3 className="font-gaming text-2xl font-bold text-text-primary">{game.game}</h3>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {Object.entries(game.stats).map(([key, value]) => (
                      <div key={key} className="rounded-lg bg-background-secondary p-4">
                        <div className="text-sm text-text-secondary capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        <div className="mt-1 font-gaming text-xl text-primary-main">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
} 