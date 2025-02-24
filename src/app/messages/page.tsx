'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaSearch, FaPaperPlane, FaSmile, FaImage, FaEllipsisV } from 'react-icons/fa';

// Mock data - In a real app, this would come from an API
const conversations = [
  {
    id: 1,
    user: {
      id: 1,
      username: 'NinjaWarrior',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800',
      status: 'online',
    },
    lastMessage: {
      text: 'Ready for the tournament tomorrow?',
      timestamp: '10:30 AM',
      unread: true,
    },
  },
  {
    id: 2,
    user: {
      id: 2,
      username: 'PixelQueen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800',
      status: 'offline',
    },
    lastMessage: {
      text: 'Great game! We should play again sometime',
      timestamp: 'Yesterday',
      unread: false,
    },
  },
  {
    id: 3,
    user: {
      id: 3,
      username: 'GameMaster',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800',
      status: 'online',
    },
    lastMessage: {
      text: 'Check out this new strategy I found',
      timestamp: 'Yesterday',
      unread: true,
    },
  },
];

const messages = [
  {
    id: 1,
    senderId: 1,
    text: 'Hey! Are you ready for the tournament tomorrow?',
    timestamp: '10:30 AM',
  },
  {
    id: 2,
    senderId: 'me',
    text: 'Almost! Just practicing a few more matches',
    timestamp: '10:31 AM',
  },
  {
    id: 3,
    senderId: 1,
    text: 'Nice! Want to do some practice rounds together?',
    timestamp: '10:32 AM',
  },
  {
    id: 4,
    senderId: 'me',
    text: 'Sure! Give me 5 minutes to finish this match',
    timestamp: '10:35 AM',
  },
  {
    id: 5,
    senderId: 1,
    text: "I'll set up a custom lobby",
    timestamp: '10:36 AM',
  },
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [messageText, setMessageText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    // TODO: Implement message sending
    setMessageText('');
  };

  const filteredConversations = conversations.filter(conversation =>
    conversation.user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-background-primary">
      <div className="mx-auto flex h-[calc(100vh-5rem)] max-w-7xl flex-col px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-gaming text-4xl font-bold text-text-primary">Messages</h1>
          <p className="mt-2 text-text-secondary">Chat with your gaming friends</p>
        </motion.div>

        <div className="grid flex-1 gap-8 overflow-hidden rounded-xl border border-neutral-gray300 bg-background-tertiary lg:grid-cols-[320px,1fr]">
          {/* Conversations List */}
          <div className="border-r border-neutral-gray300">
            {/* Search */}
            <div className="border-b border-neutral-gray300 p-4">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-neutral-gray300 bg-background-secondary pl-10 pr-4 py-2 text-text-primary outline-none transition-colors focus:border-primary-main focus:ring-2 focus:ring-primary-main/20"
                />
              </div>
            </div>

            {/* Conversations */}
            <div className="h-[calc(100vh-20rem)] overflow-y-auto">
              {filteredConversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`flex w-full items-center gap-4 border-b border-neutral-gray300 p-4 transition-colors hover:bg-background-secondary ${
                    selectedConversation.id === conversation.id ? 'bg-background-secondary' : ''
                  }`}
                >
                  <div className="relative">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={conversation.user.avatar}
                        alt={conversation.user.username}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className={`absolute bottom-0 right-0 h-3 w-3 rounded-full ${
                      conversation.user.status === 'online' ? 'bg-semantic-success' : 'bg-text-secondary'
                    } ring-2 ring-background-primary`} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <span className="font-gaming text-text-primary">{conversation.user.username}</span>
                      <span className="text-xs text-text-secondary">{conversation.lastMessage.timestamp}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary line-clamp-1">{conversation.lastMessage.text}</span>
                      {conversation.lastMessage.unread && (
                        <span className="h-2 w-2 rounded-full bg-primary-main" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex flex-col">
            {/* Chat Header */}
            <div className="flex items-center justify-between border-b border-neutral-gray300 p-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={selectedConversation.user.avatar}
                      alt={selectedConversation.user.username}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full ${
                    selectedConversation.user.status === 'online' ? 'bg-semantic-success' : 'bg-text-secondary'
                  } ring-2 ring-background-primary`} />
                </div>
                <div>
                  <div className="font-gaming text-lg text-text-primary">
                    {selectedConversation.user.username}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {selectedConversation.user.status === 'online' ? 'Online' : 'Offline'}
                  </div>
                </div>
              </div>
              <button className="rounded-lg p-2 text-text-secondary transition-colors hover:bg-background-secondary hover:text-text-primary">
                <FaEllipsisV />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[70%] rounded-xl p-3 ${
                      message.senderId === 'me'
                        ? 'bg-primary-main text-white'
                        : 'bg-background-secondary text-text-primary'
                    }`}>
                      <div>{message.text}</div>
                      <div className={`mt-1 text-right text-xs ${
                        message.senderId === 'me' ? 'text-white/80' : 'text-text-secondary'
                      }`}>
                        {message.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="border-t border-neutral-gray300 p-4">
              <div className="flex items-center gap-4">
                <button className="text-text-secondary transition-colors hover:text-primary-main">
                  <FaSmile size={20} />
                </button>
                <button className="text-text-secondary transition-colors hover:text-primary-main">
                  <FaImage size={20} />
                </button>
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 rounded-lg border border-neutral-gray300 bg-background-secondary px-4 py-2 text-text-primary outline-none transition-colors focus:border-primary-main focus:ring-2 focus:ring-primary-main/20"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!messageText.trim()}
                  className="rounded-lg bg-primary-main p-2 text-white transition-all hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <FaPaperPlane size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 