'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaShieldAlt, FaDatabase, FaCookie, FaUserShield, FaGlobe, FaEnvelope } from 'react-icons/fa';

const sections = [
  {
    id: 'information-collection',
    icon: <FaDatabase className="text-3xl text-primary-main" />,
    title: 'Information We Collect',
    content: [
      {
        subtitle: 'Account Information',
        details: [
          'Username and password',
          'Email address',
          'Date of birth',
          'Profile information (avatar, bio)',
        ],
      },
      {
        subtitle: 'Gaming Activity',
        details: [
          'Game preferences and history',
          'Tournament participation',
          'In-game achievements',
          'Interaction with other users',
        ],
      },
      {
        subtitle: 'Technical Data',
        details: [
          'IP address',
          'Device information',
          'Browser type',
          'Operating system',
        ],
      },
    ],
  },
  {
    id: 'data-usage',
    icon: <FaShieldAlt className="text-3xl text-primary-main" />,
    title: 'How We Use Your Data',
    content: [
      {
        subtitle: 'Service Provision',
        details: [
          'Account management',
          'Game matchmaking',
          'Tournament organization',
          'Community features',
        ],
      },
      {
        subtitle: 'Platform Improvement',
        details: [
          'Feature development',
          'Performance optimization',
          'Bug fixing',
          'User experience enhancement',
        ],
      },
      {
        subtitle: 'Communication',
        details: [
          'Service updates',
          'Security alerts',
          'Marketing (with consent)',
          'Support responses',
        ],
      },
    ],
  },
  {
    id: 'data-sharing',
    icon: <FaGlobe className="text-3xl text-primary-main" />,
    title: 'Information Sharing',
    content: [
      {
        subtitle: 'Third-Party Services',
        details: [
          'Payment processors',
          'Analytics providers',
          'Cloud services',
          'Anti-cheat systems',
        ],
      },
      {
        subtitle: 'Legal Requirements',
        details: [
          'Court orders',
          'Legal obligations',
          'Government requests',
          'Rights protection',
        ],
      },
    ],
  },
  {
    id: 'data-security',
    icon: <FaUserShield className="text-3xl text-primary-main" />,
    title: 'Data Security',
    content: [
      {
        subtitle: 'Protection Measures',
        details: [
          'Encryption protocols',
          'Access controls',
          'Regular security audits',
          'Incident response plans',
        ],
      },
      {
        subtitle: 'User Controls',
        details: [
          'Privacy settings',
          'Data export options',
          'Account deletion',
          'Communication preferences',
        ],
      },
    ],
  },
  {
    id: 'cookies',
    icon: <FaCookie className="text-3xl text-primary-main" />,
    title: 'Cookies & Tracking',
    content: [
      {
        subtitle: 'Cookie Types',
        details: [
          'Essential cookies',
          'Functionality cookies',
          'Analytics cookies',
          'Marketing cookies',
        ],
      },
      {
        subtitle: 'User Choice',
        details: [
          'Cookie preferences',
          'Opt-out options',
          'Third-party tracking',
          'Do Not Track signals',
        ],
      },
    ],
  },
];

const contactInfo = {
  email: 'privacy@joyztick.com',
  address: '123 Gaming Street, E-Sports City, GC 12345',
  response_time: '48 hours',
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Your privacy matters to us. Learn how we collect, use, and protect your information.
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
          <h2 className="font-gaming text-2xl font-bold text-text-primary">Introduction</h2>
          <p className="mt-4 text-text-secondary">
            This Privacy Policy explains how Joyztick ("we", "our", or "us") collects, uses, shares,
            and protects your personal information when you use our gaming platform and services.
            By using Joyztick, you agree to the collection and use of information in accordance with this policy.
          </p>
          <div className="mt-6 flex items-center gap-2 rounded-lg bg-primary-main/10 p-4 text-primary-main">
            <FaShieldAlt className="text-xl" />
            <p className="text-sm">
              We are committed to protecting your privacy and handling your data with transparency.
            </p>
          </div>
        </motion.section>

        {/* Main Content */}
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4">
              {section.icon}
              <h2 className="font-gaming text-2xl font-bold text-text-primary">{section.title}</h2>
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {section.content.map((subsection, subIndex) => (
                <div
                  key={subIndex}
                  className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
                >
                  <h3 className="mb-4 font-gaming text-xl text-text-primary">{subsection.subtitle}</h3>
                  <ul className="space-y-2">
                    {subsection.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-main" />
                        <span className="text-text-secondary">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* Contact Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 rounded-xl border border-neutral-gray300 bg-background-tertiary p-8"
        >
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-3xl text-primary-main" />
            <h2 className="font-gaming text-2xl font-bold text-text-primary">Contact Us</h2>
          </div>
          <p className="mt-4 text-text-secondary">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <div className="mt-6 space-y-4">
            <div>
              <div className="font-medium text-text-primary">Email:</div>
              <div className="text-text-secondary">{contactInfo.email}</div>
            </div>
            <div>
              <div className="font-medium text-text-primary">Address:</div>
              <div className="text-text-secondary">{contactInfo.address}</div>
            </div>
            <div>
              <div className="font-medium text-text-primary">Response Time:</div>
              <div className="text-text-secondary">We aim to respond within {contactInfo.response_time}</div>
            </div>
          </div>
        </motion.section>

        {/* Additional Links */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-8 text-center"
        >
          <h2 className="font-gaming text-2xl font-bold text-text-primary">Related Information</h2>
          <p className="mt-2 text-text-secondary">
            Learn more about how we protect your privacy and data
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/terms"
              className="rounded-lg bg-primary-main px-6 py-3 font-gaming text-white transition-all hover:bg-primary-light"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="rounded-lg border border-neutral-gray300 bg-transparent px-6 py-3 font-gaming text-text-primary transition-all hover:bg-background-secondary"
            >
              Cookie Policy
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
} 