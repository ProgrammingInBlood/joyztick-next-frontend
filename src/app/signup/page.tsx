'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGoogle, FaDiscord, FaTwitch } from 'react-icons/fa';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    // TODO: Implement signup logic
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background-primary px-4 py-24">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-neutral-gray300 bg-background-tertiary/50 p-8 backdrop-blur-lg"
        >
          <div className="text-center">
            <Link href="/" className="inline-block">
              <Image
                src="/logos/logo-with-text-white.svg"
                alt="Joyztick"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <h1 className="mt-6 font-gaming text-3xl font-bold text-text-primary">
              Join the Adventure
            </h1>
            <p className="mt-2 text-text-secondary">
              Create your account and start gaming
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-text-primary">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-lg border ${
                  errors.username ? 'border-semantic-error' : 'border-neutral-gray300'
                } bg-background-secondary px-4 py-2 text-text-primary outline-none transition-colors focus:border-primary-main focus:ring-2 focus:ring-primary-main/20`}
                placeholder="Choose a username"
              />
              {errors.username && (
                <p className="mt-1 text-sm text-semantic-error">{errors.username}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-lg border ${
                  errors.email ? 'border-semantic-error' : 'border-neutral-gray300'
                } bg-background-secondary px-4 py-2 text-text-primary outline-none transition-colors focus:border-primary-main focus:ring-2 focus:ring-primary-main/20`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-semantic-error">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-primary">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-lg border ${
                  errors.password ? 'border-semantic-error' : 'border-neutral-gray300'
                } bg-background-secondary px-4 py-2 text-text-primary outline-none transition-colors focus:border-primary-main focus:ring-2 focus:ring-primary-main/20`}
                placeholder="Create a password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-semantic-error">{errors.password}</p>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-primary">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-lg border ${
                  errors.confirmPassword ? 'border-semantic-error' : 'border-neutral-gray300'
                } bg-background-secondary px-4 py-2 text-text-primary outline-none transition-colors focus:border-primary-main focus:ring-2 focus:ring-primary-main/20`}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-semantic-error">{errors.confirmPassword}</p>
              )}
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                required
                className="h-4 w-4 rounded border-neutral-gray300 bg-background-secondary text-primary-main focus:ring-2 focus:ring-primary-main/20"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-text-secondary">
                I agree to the{' '}
                <Link href="/terms" className="text-primary-main hover:text-primary-light">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-primary-main hover:text-primary-light">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="relative w-full rounded-lg bg-primary-main py-2 font-gaming text-white transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary-main/20 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                </div>
              ) : (
                'Create Account'
              )}
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-gray300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-background-tertiary px-2 text-text-secondary">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                className="flex items-center justify-center rounded-lg border border-neutral-gray300 bg-background-secondary p-3 text-text-primary transition-colors hover:bg-background-tertiary hover:text-primary-main"
              >
                <FaGoogle size={20} />
              </button>
              <button
                type="button"
                className="flex items-center justify-center rounded-lg border border-neutral-gray300 bg-background-secondary p-3 text-text-primary transition-colors hover:bg-background-tertiary hover:text-primary-main"
              >
                <FaDiscord size={20} />
              </button>
              <button
                type="button"
                className="flex items-center justify-center rounded-lg border border-neutral-gray300 bg-background-secondary p-3 text-text-primary transition-colors hover:bg-background-tertiary hover:text-primary-main"
              >
                <FaTwitch size={20} />
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-text-secondary">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-primary-main hover:text-primary-light">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </main>
  );
} 