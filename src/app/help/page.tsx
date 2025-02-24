'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaSearch, FaGamepad, FaTrophy, FaUserFriends, FaCog, FaLock, FaHeadset, FaChevronDown } from 'react-icons/fa';

const categories = [
  {
    id: 'getting-started',
    icon: <FaGamepad />,
    title: 'Getting Started',
    description: 'Learn the basics of using Joyztick',
    articles: [
      {
        id: 1,
        title: 'How to create an account',
        content: 'Follow these steps to create your Joyztick account...',
      },
      {
        id: 2,
        title: 'Setting up your profile',
        content: 'Customize your profile by adding a photo, bio, and gaming preferences...',
      },
      {
        id: 3,
        title: 'Finding and adding friends',
        content: 'Connect with other gamers by searching for them or importing contacts...',
      },
    ],
  },
  {
    id: 'tournaments',
    icon: <FaTrophy />,
    title: 'Tournaments',
    description: 'Everything about participating in tournaments',
    articles: [
      {
        id: 4,
        title: 'How to join tournaments',
        content: 'Learn how to browse, register, and participate in gaming tournaments...',
      },
      {
        id: 5,
        title: 'Tournament rules and guidelines',
        content: 'Understand the rules, formats, and fair play guidelines...',
      },
      {
        id: 6,
        title: 'Prize claiming process',
        content: 'Steps to claim your tournament winnings and rewards...',
      },
    ],
  },
  {
    id: 'social',
    icon: <FaUserFriends />,
    title: 'Social Features',
    description: 'Learn about community features',
    articles: [
      {
        id: 7,
        title: 'Messaging system',
        content: 'How to use the chat and messaging features...',
      },
      {
        id: 8,
        title: 'Creating gaming sessions',
        content: 'Set up and manage gaming sessions with friends...',
      },
      {
        id: 9,
        title: 'Community guidelines',
        content: 'Our community standards and behavior guidelines...',
      },
    ],
  },
  {
    id: 'account',
    icon: <FaCog />,
    title: 'Account Settings',
    description: 'Manage your account preferences',
    articles: [
      {
        id: 10,
        title: 'Changing account settings',
        content: 'How to update your email, password, and other settings...',
      },
      {
        id: 11,
        title: 'Privacy settings',
        content: 'Control who can see your profile and activity...',
      },
      {
        id: 12,
        title: 'Notification preferences',
        content: 'Customize your email and push notification settings...',
      },
    ],
  },
  {
    id: 'security',
    icon: <FaLock />,
    title: 'Security',
    description: 'Keep your account safe',
    articles: [
      {
        id: 13,
        title: 'Two-factor authentication',
        content: 'Set up 2FA to protect your account...',
      },
      {
        id: 14,
        title: 'Suspicious activity',
        content: 'What to do if you notice suspicious account activity...',
      },
      {
        id: 15,
        title: 'Password best practices',
        content: 'Tips for creating and maintaining secure passwords...',
      },
    ],
  },
  {
    id: 'support',
    icon: <FaHeadset />,
    title: 'Support',
    description: 'Get help when you need it',
    articles: [
      {
        id: 16,
        title: 'Contact support',
        content: 'How to reach our support team...',
      },
      {
        id: 17,
        title: 'Report a problem',
        content: 'Steps to report technical issues or bugs...',
      },
      {
        id: 18,
        title: 'Feedback and suggestions',
        content: 'Share your ideas and feedback with us...',
      },
    ],
  },
];

const popularQuestions = [
  {
    id: 1,
    question: 'How do I join a tournament?',
    answer: 'To join a tournament, navigate to the Tournaments page, browse available tournaments, and click the &quot;Register&quot; button on the tournament you want to join. Make sure you meet the eligibility requirements and follow the registration process.',
  },
  {
    id: 2,
    question: 'How do I claim tournament prizes?',
    answer: "After winning a tournament, you&apos;ll receive a notification with instructions to claim your prize. Usually, this involves verifying your identity and providing payment information through our secure system.",
  },
  {
    id: 3,
    question: 'What payment methods do you accept?',
    answer: 'We accept major credit cards (Visa, Mastercard, American Express), PayPal, and various cryptocurrencies for tournament entries and premium features.',
  },
  {
    id: 4,
    question: 'How can I reset my password?',
    answer: 'Click the &quot;Forgot Password&quot; link on the login page, enter your email address, and follow the instructions sent to your email to reset your password.',
  },
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
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
              How can we help?
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Search our help center or browse categories below
            </p>
            <div className="mt-8 relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
              <input
                type="text"
                placeholder="Search help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-neutral-gray300 bg-background-tertiary pl-12 pr-4 py-3 text-text-primary outline-none transition-colors focus:border-primary-main focus:ring-2 focus:ring-primary-main/20"
              />
            </div>
          </motion.div>
        </section>

        {/* Popular Questions */}
        <section className="mb-16">
          <h2 className="mb-8 font-gaming text-2xl font-bold text-text-primary">Popular Questions</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {popularQuestions.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
              >
                <h3 className="font-gaming text-lg text-text-primary">{item.question}</h3>
                <p className="mt-2 text-text-secondary">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Help Categories */}
        <section>
          <h2 className="mb-8 font-gaming text-2xl font-bold text-text-primary">Help Categories</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
              >
                <div className="mb-4 flex items-center gap-3 text-primary-main">
                  {category.icon}
                  <h3 className="font-gaming text-xl text-text-primary">{category.title}</h3>
                </div>
                <p className="mb-6 text-text-secondary">{category.description}</p>
                <div className="space-y-2">
                  {category.articles.map((article) => (
                    <button
                      key={article.id}
                      onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
                      className="w-full"
                    >
                      <div className="flex items-center justify-between rounded-lg bg-background-secondary p-3 transition-colors hover:bg-background-primary">
                        <span className="text-left text-text-primary">{article.title}</span>
                        <FaChevronDown
                          className={`text-text-secondary transition-transform ${
                            expandedArticle === article.id ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                      {expandedArticle === article.id && (
                        <div className="mt-2 rounded-lg bg-background-primary p-4 text-left text-text-secondary">
                          {article.content}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Support */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 rounded-xl border border-neutral-gray300 bg-background-tertiary p-8 text-center"
        >
          <h2 className="font-gaming text-2xl font-bold text-text-primary">Still Need Help?</h2>
          <p className="mt-2 text-text-secondary">
            Can&apos;t find what you&apos;re looking for? Our support team is here to help.
          </p>
          <button className="mt-6 rounded-lg bg-primary-main px-6 py-3 font-gaming text-white transition-all hover:bg-primary-light">
            Contact Support
          </button>
        </motion.section>
      </div>
    </main>
  );
} 