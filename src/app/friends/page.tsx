'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaUserPlus, FaUserMinus, FaCheck, FaTimes, FaGamepad, FaSearch } from 'react-icons/fa';

// Mock data - In a real app, this would come from an API
const friends = [
  {
    id: 1,
    username: 'NinjaWarrior',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800',
    status: 'online',
    game: 'Playing Valorant',
    level: 42,
  },
  {
    id: 2,
    username: 'PixelQueen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800',
    status: 'offline',
    lastSeen: '2 hours ago',
    level: 38,
  },
  {
    id: 3,
    username: 'GameMaster',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800',
    status: 'online',
    game: 'In CS:GO Lobby',
    level: 55,
  },
];

const friendRequests = [
  {
    id: 1,
    username: 'LegendSlayer',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=800',
    mutualFriends: 3,
    level: 28,
  },
  {
    id: 2,
    username: 'StormRider',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=800',
    mutualFriends: 5,
    level: 31,
  },
];

const suggestions = [
  {
    id: 1,
    username: 'VictoryQueen',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800',
    mutualFriends: 8,
    level: 45,
    commonGames: ['Valorant', 'League of Legends'],
  },
  {
    id: 2,
    username: 'ProSniper',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800',
    mutualFriends: 4,
    level: 39,
    commonGames: ['CS:GO', 'Apex Legends'],
  },
  {
    id: 3,
    username: 'ShadowBlade',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800',
    mutualFriends: 6,
    level: 42,
    commonGames: ['Valorant', 'CS:GO'],
  },
];

type FriendsTab = 'all' | 'online' | 'requests' | 'suggestions';

export default function FriendsPage() {
  const [activeTab, setActiveTab] = useState<FriendsTab>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'all', label: 'All Friends' },
    { id: 'online', label: 'Online' },
    { id: 'requests', label: `Requests (${friendRequests.length})` },
    { id: 'suggestions', label: 'Suggestions' },
  ] as const;

  const filteredFriends = friends.filter(friend => 
    friend.username.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (activeTab === 'all' || (activeTab === 'online' && friend.status === 'online'))
  );

  return (
    <main className="min-h-screen bg-background-primary">
      <div className="mx-auto max-w-7xl px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-gaming text-4xl font-bold text-text-primary">Friends</h1>
          <p className="mt-2 text-text-secondary">Connect and play with your gaming buddies</p>
        </motion.div>

        {/* Search and Tabs */}
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
            <input
              type="text"
              placeholder="Search friends..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-neutral-gray300 bg-background-tertiary pl-10 pr-4 py-2 text-text-primary outline-none transition-colors focus:border-primary-main focus:ring-2 focus:ring-primary-main/20 sm:w-64"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap rounded-lg px-4 py-2 font-gaming transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary-main text-white'
                    : 'bg-background-tertiary text-text-secondary hover:text-primary-main'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Friends List */}
        {(activeTab === 'all' || activeTab === 'online') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {filteredFriends.length > 0 ? (
              filteredFriends.map((friend) => (
                <div
                  key={friend.id}
                  className="flex items-center justify-between rounded-xl border border-neutral-gray300 bg-background-tertiary p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <Image
                          src={friend.avatar}
                          alt={friend.username}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className={`absolute bottom-0 right-0 h-3 w-3 rounded-full ${
                        friend.status === 'online' ? 'bg-semantic-success' : 'bg-text-secondary'
                      } ring-2 ring-background-primary`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-gaming text-lg text-text-primary">{friend.username}</span>
                        <span className="rounded-full bg-background-secondary px-2 py-0.5 text-xs text-text-secondary">
                          Lvl {friend.level}
                        </span>
                      </div>
                      <div className="text-sm text-text-secondary">
                        {friend.status === 'online' ? friend.game : `Last seen ${friend.lastSeen}`}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {friend.status === 'online' && friend.game && (
                      <button className="rounded-lg bg-primary-main/10 px-3 py-1 text-sm text-primary-main transition-colors hover:bg-primary-main hover:text-white">
                        Join Game
                      </button>
                    )}
                    <button className="rounded-lg border border-semantic-error/50 bg-semantic-error/10 px-3 py-1 text-sm text-semantic-error transition-colors hover:bg-semantic-error hover:text-white">
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-8 text-center">
                <p className="text-text-secondary">No friends found</p>
              </div>
            )}
          </motion.div>
        )}

        {/* Friend Requests */}
        {activeTab === 'requests' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {friendRequests.map((request) => (
              <div
                key={request.id}
                className="flex items-center justify-between rounded-xl border border-neutral-gray300 bg-background-tertiary p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={request.avatar}
                      alt={request.username}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-gaming text-lg text-text-primary">{request.username}</span>
                      <span className="rounded-full bg-background-secondary px-2 py-0.5 text-xs text-text-secondary">
                        Lvl {request.level}
                      </span>
                    </div>
                    <div className="text-sm text-text-secondary">
                      {request.mutualFriends} mutual friends
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="rounded-lg bg-semantic-success px-3 py-1 text-sm text-white transition-opacity hover:opacity-90">
                    <FaCheck />
                  </button>
                  <button className="rounded-lg bg-semantic-error px-3 py-1 text-sm text-white transition-opacity hover:opacity-90">
                    <FaTimes />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Friend Suggestions */}
        {activeTab === 'suggestions' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.id}
                className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={suggestion.avatar}
                      alt={suggestion.username}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-gaming text-lg text-text-primary">{suggestion.username}</span>
                      <span className="rounded-full bg-background-secondary px-2 py-0.5 text-xs text-text-secondary">
                        Lvl {suggestion.level}
                      </span>
                    </div>
                    <div className="text-sm text-text-secondary">
                      {suggestion.mutualFriends} mutual friends
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {suggestion.commonGames.map((game) => (
                      <span
                        key={game}
                        className="flex items-center gap-1 rounded-full bg-background-secondary px-3 py-1 text-xs text-text-secondary"
                      >
                        <FaGamepad />
                        {game}
                      </span>
                    ))}
                  </div>
                  <button className="mt-4 w-full rounded-lg bg-primary-main py-2 font-gaming text-white transition-all hover:bg-primary-light">
                    Add Friend
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </main>
  );
} 