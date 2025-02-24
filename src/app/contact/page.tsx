'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaDiscord, FaTwitter } from 'react-icons/fa';

const faqs = [
  {
    question: 'How do I join tournaments?',
    answer: 'You can join tournaments by registering an account and visiting our tournaments page. Select the tournament you want to participate in and click the "Register" button.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and various cryptocurrencies for tournament entries and premium features.',
  },
  {
    question: 'How can I report a bug or technical issue?',
    answer: 'You can report bugs through our community forums in the Technical Support section, or by contacting our support team directly through this contact form.',
  },
  {
    question: 'What are the requirements to stream on Joyztick?',
    answer: 'To stream on our platform, you need to have a verified account and meet our community guidelines. Visit our streaming guidelines page for more details.',
  },
  {
    question: 'How do I become a tournament organizer?',
    answer: 'Tournament organizers must have a proven track record in the gaming community and pass our verification process. Contact us through this form for more information.',
  },
];

const contactMethods = [
  {
    icon: <FaEnvelope size={24} />,
    name: 'Email',
    value: 'support@joyztick.com',
    description: 'Our support team typically responds within 24 hours',
  },
  {
    icon: <FaDiscord size={24} />,
    name: 'Discord',
    value: 'discord.gg/joyztick',
    description: 'Join our Discord for real-time support',
  },
  {
    icon: <FaTwitter size={24} />,
    name: 'Twitter',
    value: '@joyztick',
    description: 'Follow us for updates and support',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Implement actual form submission
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-background-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] opacity-5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,rgba(145,71,255,0.1),transparent)]" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mx-auto max-w-7xl text-center"
        >
          <h1 className="font-gaming text-4xl font-bold text-text-primary md:text-6xl">
            Get in <span className="bg-gradient-to-r from-primary-main to-primary-light bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
            Have questions or need support? We&apos;re here to help! Choose your preferred
            way to reach us below.
          </p>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
              >
                <div className="mb-4 text-primary-main">{method.icon}</div>
                <h3 className="font-gaming text-xl font-bold text-text-primary">{method.name}</h3>
                <p className="mt-2 text-primary-main">{method.value}</p>
                <p className="mt-2 text-sm text-text-secondary">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-background-secondary px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-8"
          >
            <h2 className="font-gaming text-2xl font-bold text-text-primary">Send us a message</h2>
            <p className="mt-2 text-text-secondary">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg border border-neutral-gray300 bg-background-primary px-4 py-2 text-text-primary focus:border-primary-main focus:outline-none focus:ring-2 focus:ring-primary-main/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg border border-neutral-gray300 bg-background-primary px-4 py-2 text-text-primary focus:border-primary-main focus:outline-none focus:ring-2 focus:ring-primary-main/20"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-primary">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg border border-neutral-gray300 bg-background-primary px-4 py-2 text-text-primary focus:border-primary-main focus:outline-none focus:ring-2 focus:ring-primary-main/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="mt-1 block w-full rounded-lg border border-neutral-gray300 bg-background-primary px-4 py-2 text-text-primary focus:border-primary-main focus:outline-none focus:ring-2 focus:ring-primary-main/20"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-primary-main px-8 py-3 font-gaming text-white transition-all hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="rounded-lg bg-green-500/10 p-4 text-center text-green-500">
                  Message sent successfully! We&apos;ll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="rounded-lg bg-red-500/10 p-4 text-center text-red-500">
                  Failed to send message. Please try again later.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="font-gaming text-3xl font-bold text-text-primary">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
              Find quick answers to common questions about our platform and services.
            </p>
          </motion.div>

          <div className="mt-12 space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
              >
                <h3 className="font-gaming text-lg font-bold text-text-primary">{faq.question}</h3>
                <p className="mt-2 text-text-secondary">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 