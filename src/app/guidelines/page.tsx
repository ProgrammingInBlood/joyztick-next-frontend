'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHandshake, FaShieldAlt, FaExclamationTriangle, FaGavel, FaUserFriends, FaTrophy } from 'react-icons/fa';

const guidelines = [
  {
    id: 'respect',
    icon: <FaHandshake className="text-3xl text-primary-main" />,
    title: 'Respect & Inclusivity',
    description: 'Create a welcoming environment for all gamers.',
    rules: [
      'Treat all members with respect regardless of their background',
      'No hate speech, discrimination, or harassment',
      'Be mindful of cultural differences',
      'Use appropriate language and tone',
    ],
  },
  {
    id: 'safety',
    icon: <FaShieldAlt className="text-3xl text-primary-main" />,
    title: 'Safety & Privacy',
    description: 'Protect yourself and others online.',
    rules: [
      'Never share personal information',
      'Report suspicious behavior',
      'Protect your account credentials',
      'Be cautious with external links',
    ],
  },
  {
    id: 'fair-play',
    icon: <FaTrophy className="text-3xl text-primary-main" />,
    title: 'Fair Play',
    description: 'Maintain competitive integrity.',
    rules: [
      'No cheating or exploiting bugs',
      'Follow tournament rules strictly',
      'Report match results honestly',
      'Accept wins and losses gracefully',
    ],
  },
  {
    id: 'content',
    icon: <FaGavel className="text-3xl text-primary-main" />,
    title: 'Content Standards',
    description: 'Keep content appropriate and engaging.',
    rules: [
      'No inappropriate or explicit content',
      'Respect intellectual property rights',
      'Keep discussions relevant to gaming',
      'No spam or excessive self-promotion',
    ],
  },
  {
    id: 'community',
    icon: <FaUserFriends className="text-3xl text-primary-main" />,
    title: 'Community Engagement',
    description: 'Build positive relationships.',
    rules: [
      'Help new members feel welcome',
      'Contribute constructively to discussions',
      'Share knowledge and experiences',
      "Celebrate others' achievements",
    ],
  },
  {
    id: 'enforcement',
    icon: <FaExclamationTriangle className="text-3xl text-primary-main" />,
    title: 'Rule Enforcement',
    description: 'Understanding consequences.',
    rules: [
      'Violations may result in warnings',
      'Serious breaches lead to account suspension',
      'Multiple violations cause permanent bans',
      'Appeals process available for actions taken',
    ],
  },
];

const violations = [
  {
    level: 'Minor',
    examples: ['Mild inappropriate language', 'Off-topic discussions', 'Spam messages'],
    consequences: 'Warning or temporary chat restriction',
  },
  {
    level: 'Moderate',
    examples: ['Harassment', 'Unsportsmanlike behavior', 'Intentional disruption'],
    consequences: 'Temporary account suspension (1-7 days)',
  },
  {
    level: 'Severe',
    examples: ['Hate speech', 'Cheating', 'Threats'],
    consequences: 'Extended suspension or permanent ban',
  },
];

export default function GuidelinesPage() {
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
              Community Guidelines
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Our standards for creating a positive and inclusive gaming community.
            </p>
          </motion.div>
        </section>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 rounded-xl border border-neutral-gray300 bg-background-tertiary p-8"
        >
          <h2 className="font-gaming text-2xl font-bold text-text-primary">Our Commitment</h2>
          <p className="mt-4 text-text-secondary">
            At Joyztick, we&apos;re committed to fostering a safe, inclusive, and enjoyable environment for all gamers.
            These guidelines help ensure our community remains a positive space where players can connect,
            compete, and share their passion for gaming.
          </p>
          <div className="mt-6 flex items-center gap-2 rounded-lg bg-primary-main/10 p-4 text-primary-main">
            <FaHandshake className="text-xl" />
            <p className="text-sm">
              By using Joyztick, you agree to follow these guidelines and help maintain our community standards.
            </p>
          </div>
        </motion.section>

        {/* Guidelines Grid */}
        <section className="mb-16">
          <h2 className="mb-8 font-gaming text-2xl font-bold text-text-primary">Core Guidelines</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {guidelines.map((guideline) => (
              <motion.div
                key={guideline.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
              >
                <div className="mb-4">{guideline.icon}</div>
                <h3 className="mb-2 font-gaming text-xl text-text-primary">{guideline.title}</h3>
                <p className="mb-4 text-text-secondary">{guideline.description}</p>
                <ul className="space-y-2">
                  {guideline.rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-main" />
                      <span className="text-text-secondary">{rule}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Violations and Consequences */}
        <section className="mb-16">
          <h2 className="mb-8 font-gaming text-2xl font-bold text-text-primary">
            Violations & Consequences
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {violations.map((violation) => (
              <motion.div
                key={violation.level}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-xl border p-6 ${
                  violation.level === 'Minor'
                    ? 'border-yellow-500/20 bg-yellow-500/5'
                    : violation.level === 'Moderate'
                    ? 'border-orange-500/20 bg-orange-500/5'
                    : 'border-semantic-error/20 bg-semantic-error/5'
                }`}
              >
                <h3 className={`mb-4 font-gaming text-xl ${
                  violation.level === 'Minor'
                    ? 'text-yellow-500'
                    : violation.level === 'Moderate'
                    ? 'text-orange-500'
                    : 'text-semantic-error'
                }`}>
                  {violation.level} Violations
                </h3>
                <div className="mb-4">
                  <h4 className="mb-2 font-medium text-text-primary">Examples:</h4>
                  <ul className="list-inside list-disc space-y-1 text-text-secondary">
                    {violation.examples.map((example, index) => (
                      <li key={index}>{example}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-medium text-text-primary">Consequences:</h4>
                  <p className="text-text-secondary">{violation.consequences}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Appeal Process */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 rounded-xl border border-neutral-gray300 bg-background-tertiary p-8"
        >
          <h2 className="font-gaming text-2xl font-bold text-text-primary">Appeal Process</h2>
          <p className="mt-4 text-text-secondary">
            If you believe a moderation action was taken in error, you can submit an appeal.
            Our support team will review your case and respond within 48 hours.
          </p>
          <div className="mt-6">
            <Link
              href="/help"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-main px-6 py-3 font-gaming text-white transition-all hover:bg-primary-light"
            >
              Submit an Appeal
            </Link>
          </div>
        </motion.section>

        {/* Contact Support */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-8 text-center"
        >
          <h2 className="font-gaming text-2xl font-bold text-text-primary">Questions?</h2>
          <p className="mt-2 text-text-secondary">
            If you&apos;re unsure about our guidelines or need to report a violation,
            our support team is here to help.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/help"
              className="rounded-lg bg-primary-main px-6 py-3 font-gaming text-white transition-all hover:bg-primary-light"
            >
              Contact Support
            </Link>
            <Link
              href="/report"
              className="rounded-lg border border-neutral-gray300 bg-transparent px-6 py-3 font-gaming text-text-primary transition-all hover:bg-background-secondary"
            >
              Report Violation
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
} 