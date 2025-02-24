'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaTrophy, FaUsers, FaCalendar } from 'react-icons/fa';
import { useTournaments } from '@/networks/hooks/useTournaments';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function TournamentsPage() {
  const { data: tournaments, isLoading, error } = useTournaments();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background-primary">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background-primary">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary">Error</h1>
          <p className="mt-2 text-text-secondary">Failed to load tournaments</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 rounded-lg bg-primary-main px-4 py-2 text-white transition-colors hover:bg-primary-dark"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-32 pb-16">
        <div className="absolute inset-0">
          <Image
            src="/images/tournaments-hero.jpg"
            alt="Tournaments"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-primary/80 via-background-primary/50 to-background-primary" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mx-auto max-w-7xl"
        >
          <h1 className="font-gaming text-4xl font-bold text-text-primary md:text-6xl">
            Tournaments
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary">
            Join competitive gaming tournaments, showcase your skills, and win amazing prizes.
            From amateur leagues to pro competitions, there's something for everyone.
          </p>
        </motion.div>
      </section>

      {/* Tournaments List */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tournaments?.map((tournament, index) => (
              <motion.div
                key={tournament.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/tournaments/${tournament.id}`}>
                  <div className="group relative overflow-hidden rounded-xl border border-neutral-gray300 bg-background-tertiary transition-transform hover:scale-[1.02]">
                    {/* Tournament Image */}
                    <div className="relative h-48">
                      <Image
                        src={tournament.image}
                        alt={tournament.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background-tertiary to-transparent" />
                    </div>

                    {/* Tournament Info */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h2 className="font-gaming text-xl font-bold text-text-primary">
                          {tournament.title}
                        </h2>
                        <p className="mt-1 text-primary-main">{tournament.game}</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-text-secondary">
                          <FaCalendar size={16} />
                          <span>{new Date(tournament.startDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-text-secondary">
                          <FaTrophy size={16} />
                          <span>{tournament.prizePool}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-text-secondary">
                          <FaUsers size={16} />
                          <span>{tournament.participants.current}/{tournament.participants.max} Teams</span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <span className="inline-block rounded-full bg-primary-main/10 px-4 py-1 text-sm font-medium text-primary-main">
                          {tournament.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 