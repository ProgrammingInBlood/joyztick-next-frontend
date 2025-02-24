'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaShieldAlt, FaUserShield, FaLock, FaExclamationTriangle, FaHeadset, FaBook } from 'react-icons/fa';

const safetyTopics = [
  {
    id: 'account-security',
    icon: <FaLock className="text-3xl text-primary-main" />,
    title: 'Account Security',
    description: 'Keep your account safe with strong passwords and two-factor authentication.',
    tips: [
      'Use a unique, strong password',
      'Enable two-factor authentication',
      'Never share your account credentials',
      'Regularly review your account activity',
    ],
  },
  {
    id: 'online-behavior',
    icon: <FaUserShield className="text-3xl text-primary-main" />,
    title: 'Online Behavior',
    description: 'Guidelines for maintaining a positive gaming environment.',
    tips: [
      'Be respectful to other players',
      'Avoid sharing personal information',
      'Report inappropriate behavior',
      'Follow tournament rules and guidelines',
    ],
  },
  {
    id: 'privacy',
    icon: <FaShieldAlt className="text-3xl text-primary-main" />,
    title: 'Privacy Protection',
    description: 'Control your information and protect your privacy.',
    tips: [
      'Review your privacy settings',
      'Be cautious with friend requests',
      'Control who can see your activity',
      'Understand data collection practices',
    ],
  },
];

const reportingSteps = [
  {
    title: 'Identify the Issue',
    description: 'Determine what type of violation or concern you want to report.',
  },
  {
    title: 'Gather Evidence',
    description: 'Take screenshots or collect relevant information about the incident.',
  },
  {
    title: 'Submit Report',
    description: 'Use our reporting system to submit your complaint with evidence.',
  },
  {
    title: 'Follow Up',
    description: 'Track your report status and respond to any follow-up questions.',
  },
];

const resources = [
  {
    title: 'Community Guidelines',
    description: 'Learn about our standards for behavior and content.',
    link: '/guidelines',
    icon: <FaBook />,
  },
  {
    title: 'Support Center',
    description: 'Get help with safety and security issues.',
    link: '/help',
    icon: <FaHeadset />,
  },
  {
    title: 'Report Center',
    description: 'Report violations and security concerns.',
    link: '/report',
    icon: <FaExclamationTriangle />,
  },
];

export default function SafetyPage() {
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
              Safety Center
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Your safety is our top priority. Learn how to stay safe and secure while gaming.
            </p>
          </motion.div>
        </section>

        {/* Safety Topics */}
        <section className="mb-16">
          <h2 className="mb-8 font-gaming text-2xl font-bold text-text-primary">Safety Topics</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {safetyTopics.map((topic) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
              >
                <div className="mb-4">{topic.icon}</div>
                <h3 className="mb-2 font-gaming text-xl text-text-primary">{topic.title}</h3>
                <p className="mb-4 text-text-secondary">{topic.description}</p>
                <ul className="space-y-2">
                  {topic.tips.map((tip, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary-main" />
                      <span className="text-text-secondary">{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Reporting Process */}
        <section className="mb-16">
          <h2 className="mb-8 font-gaming text-2xl font-bold text-text-primary">How to Report</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {reportingSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-main font-gaming text-xl text-white">
                  {index + 1}
                </div>
                <h3 className="mb-2 font-gaming text-lg text-text-primary">{step.title}</h3>
                <p className="text-text-secondary">{step.description}</p>
                {index < reportingSteps.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-0.5 w-8 -translate-y-1/2 bg-neutral-gray300 lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <h2 className="mb-8 font-gaming text-2xl font-bold text-text-primary">Safety Resources</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={resource.link}
                  className="flex flex-col items-center rounded-xl border border-neutral-gray300 bg-background-tertiary p-6 text-center transition-all hover:border-primary-main hover:bg-background-secondary"
                >
                  <div className="mb-4 text-2xl text-primary-main">{resource.icon}</div>
                  <h3 className="mb-2 font-gaming text-lg text-text-primary">{resource.title}</h3>
                  <p className="text-text-secondary">{resource.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Emergency Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-semantic-error/20 bg-semantic-error/5 p-8 text-center"
        >
          <h2 className="font-gaming text-2xl font-bold text-semantic-error">Need Immediate Help?</h2>
          <p className="mt-2 text-text-secondary">
            If you encounter serious threats or emergencies, contact your local authorities immediately.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/help"
              className="rounded-lg bg-semantic-error px-6 py-3 font-gaming text-white transition-all hover:opacity-90"
            >
              Contact Support
            </Link>
            <Link
              href="/report"
              className="rounded-lg border border-semantic-error bg-transparent px-6 py-3 font-gaming text-semantic-error transition-all hover:bg-semantic-error hover:text-white"
            >
              Report an Issue
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
} 