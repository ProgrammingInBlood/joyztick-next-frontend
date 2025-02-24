'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGoogle, FaDiscord, FaTwitch } from 'react-icons/fa';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement login logic
    setTimeout(() => setIsLoading(false), 1000);
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
              Welcome Back!
            </h1>
            <p className="mt-2 text-text-secondary">
              Sign in to continue your gaming journey
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full rounded-lg border border-neutral-gray300 bg-background-secondary px-4 py-2 text-text-primary outline-none transition-colors focus:border-primary-main focus:ring-2 focus:ring-primary-main/20"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-primary">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full rounded-lg border border-neutral-gray300 bg-background-secondary px-4 py-2 text-text-primary outline-none transition-colors focus:border-primary-main focus:ring-2 focus:ring-primary-main/20"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-neutral-gray300 bg-background-secondary text-primary-main focus:ring-2 focus:ring-primary-main/20"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-text-secondary">
                  Remember me
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm text-primary-main hover:text-primary-light"
              >
                Forgot password?
              </Link>
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
                'Sign in'
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
            Don't have an account?{' '}
            <Link href="/signup" className="font-semibold text-primary-main hover:text-primary-light">
              Sign up
            </Link>
          </p>
        </motion.div>
      </div>
    </main>
  );
} 