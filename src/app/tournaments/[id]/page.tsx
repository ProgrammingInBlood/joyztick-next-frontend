'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaTrophy, FaUsers, FaCalendar, FaClock, FaDiscord, FaTwitch } from 'react-icons/fa';
import { useTournament } from '@/networks/hooks/useTournament';
import LoadingSpinner from '@/components/LoadingSpinner';

const brackets = [
  {
    round: 'Quarter Finals',
    matches: [
      {
        id: 1,
        team1: { name: 'Team Liquid', score: 2 },
        team2: { name: 'NRG', score: 0 },
        status: 'completed',
        time: '2024-03-15 18:00 UTC',
      },
      {
        id: 2,
        team1: { name: 'Cloud9', score: 2 },
        team2: { name: '100 Thieves', score: 1 },
        status: 'completed',
        time: '2024-03-15 21:00 UTC',
      },
      {
        id: 3,
        team1: { name: 'Fnatic', score: null },
        team2: { name: 'Sentinels', score: null },
        status: 'upcoming',
        time: '2024-03-17 18:00 UTC',
      },
      {
        id: 4,
        team1: { name: 'G2', score: null },
        team2: { name: 'TSM', score: null },
        status: 'upcoming',
        time: '2024-03-17 21:00 UTC',
      },
    ],
  },
  // Add more rounds as needed
];

export default function TournamentDetailsPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'brackets' | 'participants'>('overview');
  const { data: tournament, isLoading, error } = useTournament(params.id);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'brackets', label: 'Brackets' },
    { id: 'participants', label: 'Participants' },
  ] as const;

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
          <p className="mt-2 text-text-secondary">Failed to load tournament details</p>
          <Link
            href="/tournaments"
            className="mt-4 inline-block rounded-lg bg-primary-main px-4 py-2 text-white transition-colors hover:bg-primary-dark"
          >
            Back to Tournaments
          </Link>
        </div>
      </div>
    );
  }

  if (!tournament) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background-primary">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary">Tournament Not Found</h1>
          <p className="mt-2 text-text-secondary">The tournament you're looking for doesn't exist</p>
          <Link
            href="/tournaments"
            className="mt-4 inline-block rounded-lg bg-primary-main px-4 py-2 text-white transition-colors hover:bg-primary-dark"
          >
            Back to Tournaments
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-32">
        <div className="absolute inset-0">
          <Image
            src={tournament.image}
            alt={tournament.title}
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
          <Link
            href="/tournaments"
            className="mb-6 inline-flex items-center text-text-secondary transition-colors hover:text-primary-main"
          >
            ← Back to Tournaments
          </Link>
          <h1 className="font-gaming text-4xl font-bold text-text-primary md:text-6xl">
            {tournament.title}
          </h1>
          <p className="mt-4 text-2xl text-primary-main">{tournament.game}</p>
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex items-center gap-2 text-text-secondary">
              <FaCalendar size={20} />
              <span>{new Date(tournament.startDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary">
              <FaUsers size={20} />
              <span>{tournament.participants.current}/{tournament.participants.max} Teams</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary">
              <FaTrophy size={20} />
              <span>{tournament.prizePool.total}</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary">
              <FaClock size={20} />
              <span>{tournament.status}</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          {/* Tabs */}
          <div className="mb-12 flex justify-center">
            <div className="inline-flex rounded-xl bg-background-tertiary p-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-lg px-6 py-2 font-gaming transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary-main text-white'
                      : 'text-text-secondary hover:text-primary-main'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Info */}
              <div className="lg:col-span-2 space-y-8">
                {/* Format */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
                >
                  <h2 className="font-gaming text-2xl font-bold text-text-primary">Tournament Format</h2>
                  <div className="mt-4 space-y-2">
                    <p className="text-text-secondary">Type: {tournament.format.type}</p>
                    <div className="flex flex-wrap gap-2">
                      {tournament.format.rounds.map((round) => (
                        <div
                          key={round}
                          className={`rounded-full px-4 py-1 text-sm ${
                            round === tournament.format.currentRound
                              ? 'bg-primary-main text-white'
                              : 'bg-background-secondary text-text-secondary'
                          }`}
                        >
                          {round}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Rules */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
                >
                  <h2 className="font-gaming text-2xl font-bold text-text-primary">Rules</h2>
                  <ul className="mt-4 list-inside list-disc space-y-2 text-text-secondary">
                    {tournament.rules.map((rule) => (
                      <li key={rule}>{rule}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Prize Pool */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
                >
                  <h2 className="font-gaming text-2xl font-bold text-text-primary">Prize Pool</h2>
                  <div className="mt-4 space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-main">{tournament.prizePool.total}</div>
                      <div className="text-sm text-text-secondary">Total Prize Pool</div>
                    </div>
                    <div className="space-y-2">
                      {tournament.prizePool.breakdown.map((prize) => (
                        <div key={prize.place} className="flex items-center justify-between">
                          <span className="text-text-secondary">{prize.place}</span>
                          <span className="font-bold text-text-primary">{prize.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
                >
                  <h2 className="font-gaming text-2xl font-bold text-text-primary">Watch & Connect</h2>
                  <div className="mt-4 space-y-4">
                    {tournament.streams.map((stream) => (
                      <Link
                        key={stream.platform}
                        href={stream.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-lg bg-background-secondary p-3 transition-colors hover:bg-background-primary"
                      >
                        <span className="flex items-center gap-2">
                          {stream.platform === 'Twitch' ? <FaTwitch /> : null}
                          {stream.platform}
                        </span>
                        <span className="text-primary-main">Watch →</span>
                      </Link>
                    ))}
                    <Link
                      href={tournament.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-lg bg-background-secondary p-3 transition-colors hover:bg-background-primary"
                    >
                      <span className="flex items-center gap-2">
                        <FaDiscord />
                        Discord
                      </span>
                      <span className="text-primary-main">Join →</span>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {/* Brackets Tab */}
          {activeTab === 'brackets' && (
            <div className="space-y-12">
              {brackets.map((round) => (
                <motion.div
                  key={round.round}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="mb-6 font-gaming text-2xl font-bold text-text-primary">{round.round}</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {round.matches.map((match) => (
                      <div
                        key={match.id}
                        className="rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
                      >
                        <div className="mb-4 flex items-center justify-between text-sm text-text-secondary">
                          <span>Match {match.id}</span>
                          <span>{new Date(match.time).toLocaleString()}</span>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="font-gaming text-lg text-text-primary">{match.team1.name}</span>
                            <span className="text-lg font-bold text-text-primary">
                              {match.team1.score !== null ? match.team1.score : '-'}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-gaming text-lg text-text-primary">{match.team2.name}</span>
                            <span className="text-lg font-bold text-text-primary">
                              {match.team2.score !== null ? match.team2.score : '-'}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 text-center">
                          {match.status === 'completed' ? (
                            <span className="text-sm text-semantic-success">Completed</span>
                          ) : (
                            <span className="text-sm text-primary-main">Upcoming</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Participants Tab */}
          {activeTab === 'participants' && (
            <div className="space-y-6">
              {tournament.participants.teams.map((team, index) => (
                <motion.div
                  key={team.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between rounded-xl border border-neutral-gray300 bg-background-tertiary p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background-secondary font-gaming text-lg font-bold text-primary-main">
                      #{team.seed}
                    </div>
                    <div>
                      <h3 className="font-gaming text-lg font-bold text-text-primary">{team.name}</h3>
                      <p className="text-sm text-text-secondary">Seed #{team.seed}</p>
                    </div>
                  </div>
                  <div className="rounded-full bg-semantic-success/20 px-4 py-1 text-sm text-semantic-success">
                    {team.status}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
} 