'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaUser, FaBell, FaLock, FaGamepad, FaPalette, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';

// Mock data - In a real app, this would come from an API
const user = {
  username: 'ProGamer123',
  email: 'progamer123@example.com',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800',
  language: 'English',
  theme: 'Dark',
  notifications: {
    email: true,
    push: true,
    tournaments: true,
    friendRequests: true,
    messages: true,
    updates: false,
  },
  privacy: {
    profileVisibility: 'public',
    showOnlineStatus: true,
    showGameActivity: true,
    allowFriendRequests: true,
    allowMessages: 'friends',
  },
  gameSettings: {
    showFPS: true,
    crosshairColor: '#00ff00',
    sensitivity: 2.5,
    autoJoinVoice: true,
  },
};

type SettingsTab = 'profile' | 'notifications' | 'privacy' | 'gaming' | 'appearance' | 'language';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('profile');
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    // TODO: Implement settings update
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
    setIsLoading(false);
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <FaUser /> },
    { id: 'notifications', label: 'Notifications', icon: <FaBell /> },
    { id: 'privacy', label: 'Privacy', icon: <FaLock /> },
    { id: 'gaming', label: 'Gaming', icon: <FaGamepad /> },
    { id: 'appearance', label: 'Appearance', icon: <FaPalette /> },
    { id: 'language', label: 'Language', icon: <FaGlobe /> },
  ] as const;

  return (
    <main className="min-h-screen bg-background-primary">
      <div className="mx-auto max-w-7xl px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-gaming text-4xl font-bold text-text-primary">Settings</h1>
          <p className="mt-2 text-text-secondary">Manage your account preferences and settings</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[240px,1fr]">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-2"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary-main text-white'
                    : 'text-text-secondary hover:bg-background-tertiary hover:text-text-primary'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
          >
            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <div className="space-y-8">
                <h2 className="font-gaming text-2xl font-bold text-text-primary">Profile Settings</h2>
                
                {/* Avatar */}
                <div>
                  <label className="block text-sm font-medium text-text-primary">Avatar</label>
                  <div className="mt-2 flex items-center gap-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-full">
                      <Image
                        src={user.avatar}
                        alt={user.username}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <button className="rounded-lg bg-primary-main px-4 py-2 text-white transition-all hover:bg-primary-light">
                      Change Avatar
                    </button>
                  </div>
                </div>

                {/* Username */}
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-text-primary">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    defaultValue={user.username}
                    className="mt-2 block w-full rounded-lg border border-neutral-gray300 bg-background-secondary px-4 py-2 text-text-primary outline-none transition-colors focus:border-primary-main focus:ring-2 focus:ring-primary-main/20"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    defaultValue={user.email}
                    className="mt-2 block w-full rounded-lg border border-neutral-gray300 bg-background-secondary px-4 py-2 text-text-primary outline-none transition-colors focus:border-primary-main focus:ring-2 focus:ring-primary-main/20"
                  />
                </div>
              </div>
            )}

            {/* Notifications Settings */}
            {activeTab === 'notifications' && (
              <div className="space-y-8">
                <h2 className="font-gaming text-2xl font-bold text-text-primary">Notification Settings</h2>
                
                <div className="space-y-6">
                  {Object.entries(user.notifications).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-text-primary capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                        <div className="text-sm text-text-secondary">
                          Receive notifications for {key.toLowerCase()}
                        </div>
                      </div>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input
                          type="checkbox"
                          defaultChecked={value}
                          className="peer sr-only"
                        />
                        <div className="h-6 w-11 rounded-full bg-background-secondary after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-main peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-primary-main/20"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Privacy Settings */}
            {activeTab === 'privacy' && (
              <div className="space-y-8">
                <h2 className="font-gaming text-2xl font-bold text-text-primary">Privacy Settings</h2>
                
                <div className="space-y-6">
                  {Object.entries(user.privacy).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-text-primary capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                        <div className="text-sm text-text-secondary">
                          Control who can see your {key.toLowerCase()}
                        </div>
                      </div>
                      {typeof value === 'boolean' ? (
                        <label className="relative inline-flex cursor-pointer items-center">
                          <input
                            type="checkbox"
                            defaultChecked={value}
                            className="peer sr-only"
                          />
                          <div className="h-6 w-11 rounded-full bg-background-secondary after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-main peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-primary-main/20"></div>
                        </label>
                      ) : (
                        <select
                          defaultValue={value}
                          className="rounded-lg border border-neutral-gray300 bg-background-secondary px-4 py-2 text-text-primary outline-none transition-colors focus:border-primary-main focus:ring-2 focus:ring-primary-main/20"
                        >
                          <option value="public">Public</option>
                          <option value="friends">Friends Only</option>
                          <option value="private">Private</option>
                        </select>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gaming Settings */}
            {activeTab === 'gaming' && (
              <div className="space-y-8">
                <h2 className="font-gaming text-2xl font-bold text-text-primary">Gaming Settings</h2>
                
                <div className="space-y-6">
                  {Object.entries(user.gameSettings).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-text-primary capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                        <div className="text-sm text-text-secondary">
                          Configure your {key.toLowerCase()} settings
                        </div>
                      </div>
                      {typeof value === 'boolean' ? (
                        <label className="relative inline-flex cursor-pointer items-center">
                          <input
                            type="checkbox"
                            defaultChecked={value}
                            className="peer sr-only"
                          />
                          <div className="h-6 w-11 rounded-full bg-background-secondary after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-main peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-primary-main/20"></div>
                        </label>
                      ) : typeof value === 'number' ? (
                        <input
                          type="range"
                          min="0.1"
                          max="10"
                          step="0.1"
                          defaultValue={value}
                          className="h-2 w-48 cursor-pointer appearance-none rounded-lg bg-background-secondary"
                        />
                      ) : (
                        <input
                          type="color"
                          defaultValue={value}
                          className="h-10 w-10 cursor-pointer rounded-lg border-none bg-transparent"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Appearance Settings */}
            {activeTab === 'appearance' && (
              <div className="space-y-8">
                <h2 className="font-gaming text-2xl font-bold text-text-primary">Appearance Settings</h2>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary">Theme</label>
                  <select
                    defaultValue={user.theme}
                    className="mt-2 block w-full rounded-lg border border-neutral-gray300 bg-background-secondary px-4 py-2 text-text-primary outline-none transition-colors focus:border-primary-main focus:ring-2 focus:ring-primary-main/20"
                  >
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                    <option value="system">System</option>
                  </select>
                </div>
              </div>
            )}

            {/* Language Settings */}
            {activeTab === 'language' && (
              <div className="space-y-8">
                <h2 className="font-gaming text-2xl font-bold text-text-primary">Language Settings</h2>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary">Language</label>
                  <select
                    defaultValue={user.language}
                    className="mt-2 block w-full rounded-lg border border-neutral-gray300 bg-background-secondary px-4 py-2 text-text-primary outline-none transition-colors focus:border-primary-main focus:ring-2 focus:ring-primary-main/20"
                  >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                    <option value="it">Italiano</option>
                    <option value="pt">Português</option>
                    <option value="ru">Русский</option>
                    <option value="ja">日本語</option>
                    <option value="ko">한국어</option>
                    <option value="zh">中文</option>
                  </select>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="mt-8 flex items-center justify-end gap-4">
              {isSaved && (
                <span className="text-sm text-semantic-success">Settings saved successfully!</span>
              )}
              <button
                onClick={handleSave}
                disabled={isLoading}
                className="rounded-lg bg-primary-main px-6 py-2 font-gaming text-white transition-all hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 