'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGavel, FaUserShield, FaGamepad, FaExclamationTriangle, FaBalanceScale, FaHandshake } from 'react-icons/fa';

const sections = [
  {
    id: 'acceptance',
    icon: <FaHandshake className="text-3xl text-primary-main" />,
    title: 'Terms Acceptance',
    content: [
      'By accessing or using Joyztick, you agree to be bound by these Terms of Service.',
      'If you disagree with any part of the terms, you may not access our services.',
      'We reserve the right to modify these terms at any time.',
      'Continued use of the platform after changes constitutes acceptance of new terms.',
    ],
  },
  {
    id: 'eligibility',
    icon: <FaUserShield className="text-3xl text-primary-main" />,
    title: 'User Eligibility',
    content: [
      'You must be at least 13 years old to use our services.',
      'If under 18, you need parental consent to use certain features.',
      'You must provide accurate and complete information when creating an account.',
      'You are responsible for maintaining the security of your account.',
    ],
  },
  {
    id: 'conduct',
    icon: <FaGamepad className="text-3xl text-primary-main" />,
    title: 'User Conduct',
    content: [
      'Follow our Community Guidelines at all times.',
      'Do not engage in cheating or exploitative behavior.',
      'Respect the intellectual property rights of others.',
      'Do not use our services for illegal or unauthorized purposes.',
    ],
  },
  {
    id: 'content',
    icon: <FaGavel className="text-3xl text-primary-main" />,
    title: 'Content Rules',
    content: [
      'You retain ownership of content you create.',
      'We have the right to remove content that violates our policies.',
      'Do not post inappropriate, offensive, or harmful content.',
      'We may use your content for platform promotion and improvement.',
    ],
  },
  {
    id: 'liability',
    icon: <FaBalanceScale className="text-3xl text-primary-main" />,
    title: 'Limitation of Liability',
    content: [
      'Services are provided "as is" without warranties.',
      'We are not liable for any damages arising from use of our services.',
      'We do not guarantee uninterrupted or error-free service.',
      'Users assume all risks associated with platform use.',
    ],
  },
  {
    id: 'termination',
    icon: <FaExclamationTriangle className="text-3xl text-primary-main" />,
    title: 'Account Termination',
    content: [
      'We may suspend or terminate accounts for violations.',
      'Users may terminate their accounts at any time.',
      'Some obligations survive account termination.',
      'We may retain certain data as required by law.',
    ],
  },
];

const importantNotices = [
  {
    title: 'Dispute Resolution',
    content: 'Any disputes will be resolved through arbitration rather than court action.',
  },
  {
    title: 'Governing Law',
    content: 'These terms are governed by the laws of the jurisdiction where we operate.',
  },
  {
    title: 'Severability',
    content: 'If any provision is found invalid, other terms remain in full effect.',
  },
];

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Please read these terms carefully before using our platform.
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
            These Terms of Service ("Terms") govern your access to and use of Joyztick's website,
            services, and applications (the "Services"). Please read these Terms carefully before
            using our platform. By using our Services, you agree to be bound by these Terms.
          </p>
          <div className="mt-6 flex items-center gap-2 rounded-lg bg-primary-main/10 p-4 text-primary-main">
            <FaExclamationTriangle className="text-xl" />
            <p className="text-sm">
              This is a legally binding agreement between you and Joyztick.
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
            className="mb-16 rounded-xl border border-neutral-gray300 bg-background-tertiary p-8"
          >
            <div className="mb-6 flex items-center gap-4">
              {section.icon}
              <h2 className="font-gaming text-2xl font-bold text-text-primary">{section.title}</h2>
            </div>
            <ul className="space-y-4">
              {section.content.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-main" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        ))}

        {/* Important Notices */}
        <section className="mb-16">
          <h2 className="mb-8 font-gaming text-2xl font-bold text-text-primary">
            Important Legal Notices
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {importantNotices.map((notice, index) => (
              <motion.div
                key={notice.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
              >
                <h3 className="mb-2 font-gaming text-lg text-text-primary">{notice.title}</h3>
                <p className="text-text-secondary">{notice.content}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 rounded-xl border border-neutral-gray300 bg-background-tertiary p-8 text-center"
        >
          <h2 className="font-gaming text-2xl font-bold text-text-primary">Questions?</h2>
          <p className="mt-2 text-text-secondary">
            If you have any questions about these Terms of Service, please contact our legal team.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-primary-main px-6 py-3 font-gaming text-white transition-all hover:bg-primary-light"
            >
              Contact Us
            </Link>
            <Link
              href="/help"
              className="rounded-lg border border-neutral-gray300 bg-transparent px-6 py-3 font-gaming text-text-primary transition-all hover:bg-background-secondary"
            >
              Help Center
            </Link>
          </div>
        </motion.section>

        {/* Additional Links */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-8 text-center"
        >
          <h2 className="font-gaming text-2xl font-bold text-text-primary">Related Policies</h2>
          <p className="mt-2 text-text-secondary">
            Review our other important policies and guidelines
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/privacy"
              className="rounded-lg bg-background-secondary px-6 py-3 font-gaming text-text-primary transition-all hover:bg-background-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              className="rounded-lg bg-background-secondary px-6 py-3 font-gaming text-text-primary transition-all hover:bg-background-primary"
            >
              Cookie Policy
            </Link>
            <Link
              href="/guidelines"
              className="rounded-lg bg-background-secondary px-6 py-3 font-gaming text-text-primary transition-all hover:bg-background-primary"
            >
              Community Guidelines
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
} 