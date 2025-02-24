'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaTrophy, FaUserPlus, FaGamepad, FaBell, FaCheck, FaTimes } from 'react-icons/fa';

type Notification = {
  id: number;
  type: string;
  timestamp: string;
  read: boolean;
  user?: {
    username: string;
    avatar: string;
  };
  title?: string;
  description?: string;
  icon?: string;
  game?: string;
  level?: number;
};

// Mock data - In a real app, this would come from an API
const notifications: Notification[] = [
  {
    id: 1,
    type: 'friend_request',
    user: {
      username: 'NinjaWarrior',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800',
    },
    timestamp: '2 minutes ago',
    read: false,
  },
  {
    id: 2,
    type: 'tournament',
    title: 'Valorant Pro League',
    description: 'Tournament starts in 1 hour',
    timestamp: '30 minutes ago',
    read: false,
  },
  {
    id: 3,
    type: 'achievement',
    title: 'First Victory',
    description: 'Won your first tournament match',
    icon: '🏆',
    timestamp: '2 hours ago',
    read: true,
  },
  {
    id: 4,
    type: 'game_invite',
    user: {
      username: 'GameMaster',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800',
    },
    game: 'CS:GO',
    timestamp: '3 hours ago',
    read: true,
  },
  {
    id: 5,
    type: 'level_up',
    level: 42,
    description: 'Congratulations! You reached level 42',
    timestamp: '1 day ago',
    read: true,
  },
];

type NotificationType = 'all' | 'unread' | 'friend_requests' | 'tournaments' | 'achievements';

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState<NotificationType>('all');

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'unread', label: 'Unread' },
    { id: 'friend_requests', label: 'Friend Requests' },
    { id: 'tournaments', label: 'Tournaments' },
    { id: 'achievements', label: 'Achievements' },
  ] as const;

  const filteredNotifications = notifications.filter(notification => {
    if (activeTab === 'unread') return !notification.read;
    if (activeTab === 'friend_requests') return notification.type === 'friend_request';
    if (activeTab === 'tournaments') return notification.type === 'tournament';
    if (activeTab === 'achievements') return notification.type === 'achievement';
    return true;
  });

  const NotificationIcon = ({ type }: { type: string }) => {
    switch (type) {
      case 'friend_request':
        return <FaUserPlus className="text-primary-main" />;
      case 'tournament':
        return <FaTrophy className="text-primary-main" />;
      case 'achievement':
        return <div className="text-2xl">{notifications.find(n => n.type === type)?.icon}</div>;
      case 'game_invite':
        return <FaGamepad className="text-primary-main" />;
      case 'level_up':
        return <FaBell className="text-primary-main" />;
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-background-primary">
      <div className="mx-auto max-w-4xl px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-gaming text-4xl font-bold text-text-primary">Notifications</h1>
          <p className="mt-2 text-text-secondary">Stay updated with your gaming activity</p>
        </motion.div>

        {/* Tabs */}
        <div className="mb-8 flex gap-2 overflow-x-auto">
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

        {/* Notifications List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-center gap-4 rounded-xl border border-neutral-gray300 bg-background-tertiary p-4 ${
                  !notification.read ? 'ring-2 ring-primary-main/20' : ''
                }`}
              >
                {/* Icon or Avatar */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background-secondary">
                  {notification.type === 'friend_request' || notification.type === 'game_invite' ? (
                    <div className="relative h-full w-full overflow-hidden rounded-full">
                      <Image
                        src={notification.user?.avatar || '/images/default-avatar.jpg'}
                        alt={notification.user?.username || 'User avatar'}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <NotificationIcon type={notification.type} />
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 items-center justify-between">
                  <div>
                    {/* Friend Request */}
                    {notification.type === 'friend_request' && (
                      <div>
                        <p className="text-text-primary">
                          <span className="font-gaming">{notification.user?.username}</span> sent you a friend request
                        </p>
                        <div className="mt-2 flex gap-2">
                          <button className="rounded-lg bg-semantic-success px-3 py-1 text-sm text-white transition-opacity hover:opacity-90">
                            <FaCheck />
                          </button>
                          <button className="rounded-lg bg-semantic-error px-3 py-1 text-sm text-white transition-opacity hover:opacity-90">
                            <FaTimes />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Tournament */}
                    {notification.type === 'tournament' && (
                      <div>
                        <p className="text-text-primary">
                          <span className="font-gaming">{notification.title}</span>
                        </p>
                        <p className="text-sm text-text-secondary">{notification.description}</p>
                      </div>
                    )}

                    {/* Achievement */}
                    {notification.type === 'achievement' && (
                      <div>
                        <p className="text-text-primary">
                          Achievement Unlocked: <span className="font-gaming">{notification.title}</span>
                        </p>
                        <p className="text-sm text-text-secondary">{notification.description}</p>
                      </div>
                    )}

                    {/* Game Invite */}
                    {notification.type === 'game_invite' && (
                      <div>
                        <p className="text-text-primary">
                          <span className="font-gaming">{notification.user?.username}</span> invited you to play {notification.game}
                        </p>
                        <div className="mt-2">
                          <button className="rounded-lg bg-primary-main px-3 py-1 text-sm text-white transition-opacity hover:opacity-90">
                            Join Game
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Level Up */}
                    {notification.type === 'level_up' && (
                      <div>
                        <p className="text-text-primary">
                          <span className="font-gaming">Level {notification.level}!</span>
                        </p>
                        <p className="text-sm text-text-secondary">{notification.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Timestamp */}
                  <div className="text-sm text-text-secondary">{notification.timestamp}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-8 text-center">
              <p className="text-text-secondary">No notifications found</p>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
} 