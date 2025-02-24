'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCookie, FaShieldAlt, FaUserShield, FaGlobe, FaChartBar, FaBullhorn } from 'react-icons/fa';

const cookieTypes = [
  {
    id: 'essential',
    icon: <FaShieldAlt className="text-3xl text-primary-main" />,
    title: 'Essential Cookies',
    description: 'Required for basic site functionality',
    examples: [
      'Authentication and security',
      'Session management',
      'User preferences',
      'Load balancing',
    ],
    canDisable: false,
  },
  {
    id: 'functional',
    icon: <FaUserShield className="text-3xl text-primary-main" />,
    title: 'Functional Cookies',
    description: 'Enhance your experience',
    examples: [
      'Language preferences',
      'Theme settings',
      'Game preferences',
      'Social media integration',
    ],
    canDisable: true,
  },
  {
    id: 'analytics',
    icon: <FaChartBar className="text-3xl text-primary-main" />,
    title: 'Analytics Cookies',
    description: 'Help us improve our services',
    examples: [
      'Usage patterns',
      'Performance metrics',
      'Error tracking',
      'User behavior analysis',
    ],
    canDisable: true,
  },
  {
    id: 'marketing',
    icon: <FaBullhorn className="text-3xl text-primary-main" />,
    title: 'Marketing Cookies',
    description: 'Support our marketing efforts',
    examples: [
      'Ad personalization',
      'Campaign tracking',
      'Referral tracking',
      'Social sharing',
    ],
    canDisable: true,
  },
  {
    id: 'third-party',
    icon: <FaGlobe className="text-3xl text-primary-main" />,
    title: 'Third-Party Cookies',
    description: 'Set by our partners and service providers',
    examples: [
      'Payment processing',
      'Social media features',
      'Analytics services',
      'Advertising networks',
    ],
    canDisable: true,
  },
];

const managementOptions = [
  {
    title: 'Browser Settings',
    description: 'Control cookies through your browser preferences',
    steps: [
      'Access browser settings',
      'Navigate to privacy/security section',
      'Manage cookie preferences',
      'Choose blocking options',
    ],
  },
  {
    title: 'Platform Controls',
    description: 'Use our built-in cookie management tools',
    steps: [
      'Visit cookie settings',
      'Select cookie categories',
      'Save preferences',
      'Update anytime',
    ],
  },
  {
    title: 'Third-Party Tools',
    description: 'Additional tools for enhanced privacy',
    steps: [
      'Install privacy extensions',
      'Configure tracking protection',
      'Use ad blockers',
      'Enable Do Not Track',
    ],
  },
];

export default function CookiesPage() {
  const lastUpdated = '2024-03-15';

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
              Cookie Policy
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Learn how we use cookies to enhance your gaming experience.
            </p>
            <p className="mt-2 text-sm text-text-secondary">
              Last Updated: {new Date(lastUpdated).toLocaleDateString()}
            </p>
          </motion.div>
        </section>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 rounded-xl border border-neutral-gray300 bg-background-tertiary p-8"
        >
          <h2 className="font-gaming text-2xl font-bold text-text-primary">About Cookies</h2>
          <p className="mt-4 text-text-secondary">
            Cookies are small text files that are placed on your device when you visit our website.
            They help us provide you with a better experience by remembering your preferences,
            analyzing how you use our platform, and delivering personalized content.
          </p>
          <div className="mt-6 flex items-center gap-2 rounded-lg bg-primary-main/10 p-4 text-primary-main">
            <FaCookie className="text-xl" />
            <p className="text-sm">
              You can control how cookies are used through your browser settings and our cookie preferences.
            </p>
          </div>
        </motion.section>

        {/* Cookie Types */}
        <section className="mb-16">
          <h2 className="mb-8 font-gaming text-2xl font-bold text-text-primary">Types of Cookies</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
              >
                <div className="mb-4">{type.icon}</div>
                <h3 className="mb-2 font-gaming text-xl text-text-primary">{type.title}</h3>
                <p className="mb-4 text-text-secondary">{type.description}</p>
                <ul className="mb-4 space-y-2">
                  {type.examples.map((example, exIndex) => (
                    <li key={exIndex} className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-main" />
                      <span className="text-text-secondary">{example}</span>
                    </li>
                  ))}
                </ul>
                <div className={`rounded-full px-3 py-1 text-center text-sm ${
                  type.canDisable
                    ? 'bg-semantic-success/20 text-semantic-success'
                    : 'bg-semantic-error/20 text-semantic-error'
                }`}>
                  {type.canDisable ? 'Can be disabled' : 'Required'}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Cookie Management */}
        <section className="mb-16">
          <h2 className="mb-8 font-gaming text-2xl font-bold text-text-primary">
            Managing Your Cookies
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {managementOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
              >
                <h3 className="mb-2 font-gaming text-xl text-text-primary">{option.title}</h3>
                <p className="mb-4 text-text-secondary">{option.description}</p>
                <ol className="space-y-2">
                  {option.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-2">
                      <span className="font-gaming text-primary-main">{stepIndex + 1}.</span>
                      <span className="text-text-secondary">{step}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Cookie Preferences */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 rounded-xl border border-neutral-gray300 bg-background-tertiary p-8 text-center"
        >
          <h2 className="font-gaming text-2xl font-bold text-text-primary">Cookie Preferences</h2>
          <p className="mt-2 text-text-secondary">
            You can update your cookie preferences at any time
          </p>
          <button className="mt-6 rounded-lg bg-primary-main px-6 py-3 font-gaming text-white transition-all hover:bg-primary-light">
            Manage Preferences
          </button>
        </motion.section>

        {/* Additional Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-8 text-center"
        >
          <h2 className="font-gaming text-2xl font-bold text-text-primary">Additional Information</h2>
          <p className="mt-2 text-text-secondary">
            Learn more about our privacy practices and terms of service
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/privacy"
              className="rounded-lg bg-background-secondary px-6 py-3 font-gaming text-text-primary transition-all hover:bg-background-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="rounded-lg bg-background-secondary px-6 py-3 font-gaming text-text-primary transition-all hover:bg-background-primary"
            >
              Terms of Service
            </Link>
            <Link
              href="/help"
              className="rounded-lg bg-background-secondary px-6 py-3 font-gaming text-text-primary transition-all hover:bg-background-primary"
            >
              Help Center
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
} 