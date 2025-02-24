'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { FaExclamationTriangle, FaUserShield, FaGamepad, FaBug, FaComments, FaChevronDown } from 'react-icons/fa';

const reportTypes = [
  {
    id: 'user',
    icon: <FaUserShield className="text-3xl text-primary-main" />,
    title: 'User Report',
    description: 'Report inappropriate behavior or suspicious activity',
    fields: [
      { name: 'username', label: 'Username', type: 'text', required: true },
      { name: 'incident_date', label: 'Incident Date', type: 'date', required: true },
      { name: 'reason', label: 'Reason', type: 'select', required: true, options: [
        'Harassment',
        'Cheating',
        'Inappropriate Content',
        'Spam',
        'Other',
      ]},
      { name: 'description', label: 'Description', type: 'textarea', required: true },
      { name: 'evidence', label: 'Evidence (URLs or Screenshots)', type: 'textarea', required: false },
    ],
  },
  {
    id: 'bug',
    icon: <FaBug className="text-3xl text-primary-main" />,
    title: 'Bug Report',
    description: 'Report technical issues or bugs',
    fields: [
      { name: 'page', label: 'Where did you find the bug?', type: 'text', required: true },
      { name: 'browser', label: 'Browser & Version', type: 'text', required: true },
      { name: 'steps', label: 'Steps to Reproduce', type: 'textarea', required: true },
      { name: 'expected', label: 'Expected Behavior', type: 'textarea', required: true },
      { name: 'actual', label: 'Actual Behavior', type: 'textarea', required: true },
      { name: 'screenshots', label: 'Screenshots (if applicable)', type: 'textarea', required: false },
    ],
  },
  {
    id: 'tournament',
    icon: <FaGamepad className="text-3xl text-primary-main" />,
    title: 'Tournament Issue',
    description: 'Report problems with tournaments',
    fields: [
      { name: 'tournament_id', label: 'Tournament ID/Name', type: 'text', required: true },
      { name: 'match_id', label: 'Match ID (if applicable)', type: 'text', required: false },
      { name: 'issue_type', label: 'Issue Type', type: 'select', required: true, options: [
        'Match Results',
        'Technical Problems',
        'Rule Violation',
        'Prize Distribution',
        'Other',
      ]},
      { name: 'description', label: 'Description', type: 'textarea', required: true },
      { name: 'evidence', label: 'Evidence', type: 'textarea', required: false },
    ],
  },
  {
    id: 'feedback',
    icon: <FaComments className="text-3xl text-primary-main" />,
    title: 'General Feedback',
    description: 'Share suggestions or feedback',
    fields: [
      { name: 'category', label: 'Category', type: 'select', required: true, options: [
        'Feature Request',
        'UI/UX',
        'Performance',
        'Content',
        'Other',
      ]},
      { name: 'subject', label: 'Subject', type: 'text', required: true },
      { name: 'feedback', label: 'Feedback', type: 'textarea', required: true },
      { name: 'impact', label: 'Expected Impact', type: 'textarea', required: false },
    ],
  },
];

export default function ReportPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Implement report submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({});
      setSelectedType(null);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
              Report an Issue
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Help us maintain a safe and enjoyable gaming environment
            </p>
          </motion.div>
        </section>

        {/* Report Types */}
        <section className="mb-16">
          <h2 className="mb-8 font-gaming text-2xl font-bold text-text-primary">Select Report Type</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {reportTypes.map((type) => (
              <motion.button
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setSelectedType(selectedType === type.id ? null : type.id)}
                className={`w-full rounded-xl border ${
                  selectedType === type.id
                    ? 'border-primary-main bg-primary-main/10'
                    : 'border-neutral-gray300 bg-background-tertiary hover:border-primary-main/50'
                } p-6 text-left transition-all`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {type.icon}
                    <h3 className="font-gaming text-xl text-text-primary">{type.title}</h3>
                  </div>
                  <FaChevronDown
                    className={`text-text-secondary transition-transform ${
                      selectedType === type.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <p className="text-text-secondary">{type.description}</p>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Report Form */}
        {selectedType && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-8">
              <h2 className="mb-8 font-gaming text-2xl font-bold text-text-primary">
                {reportTypes.find(t => t.id === selectedType)?.title} Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {reportTypes
                  .find(t => t.id === selectedType)
                  ?.fields.map((field) => (
                    <div key={field.name}>
                      <label
                        htmlFor={field.name}
                        className="block text-sm font-medium text-text-primary"
                      >
                        {field.label}
                        {field.required && <span className="text-semantic-error"> *</span>}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          id={field.name}
                          name={field.name}
                          required={field.required}
                          value={formData[field.name] || ''}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          rows={4}
                          className="mt-2 block w-full rounded-lg border border-neutral-gray300 bg-background-secondary px-4 py-2 text-text-primary outline-none transition-colors focus:border-primary-main focus:ring-2 focus:ring-primary-main/20"
                        />
                      ) : field.type === 'select' ? (
                        <select
                          id={field.name}
                          name={field.name}
                          required={field.required}
                          value={formData[field.name] || ''}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          className="mt-2 block w-full rounded-lg border border-neutral-gray300 bg-background-secondary px-4 py-2 text-text-primary outline-none transition-colors focus:border-primary-main focus:ring-2 focus:ring-primary-main/20"
                        >
                          <option value="">Select {field.label}</option>
                          {field.options?.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          required={field.required}
                          value={formData[field.name] || ''}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          className="mt-2 block w-full rounded-lg border border-neutral-gray300 bg-background-secondary px-4 py-2 text-text-primary outline-none transition-colors focus:border-primary-main focus:ring-2 focus:ring-primary-main/20"
                        />
                      )}
                    </div>
                  ))}

                <div className="flex items-center justify-between pt-6">
                  <button
                    type="button"
                    onClick={() => setSelectedType(null)}
                    className="rounded-lg border border-neutral-gray300 bg-transparent px-6 py-3 font-gaming text-text-primary transition-all hover:bg-background-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-lg bg-primary-main px-6 py-3 font-gaming text-white transition-all hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Report'}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="mt-4 rounded-lg bg-semantic-success/10 p-4 text-center text-semantic-success">
                    Report submitted successfully! We will review it shortly.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 rounded-lg bg-semantic-error/10 p-4 text-center text-semantic-error">
                    Failed to submit report. Please try again later.
                  </div>
                )}
              </form>
            </div>
          </motion.section>
        )}

        {/* Additional Help */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 rounded-xl border border-neutral-gray300 bg-background-tertiary p-8 text-center"
        >
          <h2 className="font-gaming text-2xl font-bold text-text-primary">Need More Help?</h2>
          <p className="mt-2 text-text-secondary">
            Check our help center or contact support for assistance
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/help"
              className="rounded-lg bg-primary-main px-6 py-3 font-gaming text-white transition-all hover:bg-primary-light"
            >
              Help Center
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-neutral-gray300 bg-transparent px-6 py-3 font-gaming text-text-primary transition-all hover:bg-background-secondary"
            >
              Contact Support
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
} 