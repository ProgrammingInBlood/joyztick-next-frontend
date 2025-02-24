'use client';

import { use } from 'react';
import { useGame } from '@/networks/hooks/useGames';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const { data: game, isLoading, error } = useGame(resolvedParams.slug);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-primary-main"></div>
      </div>
    );
  }

  if (error || !game) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-semantic-error">Error loading game details</h2>
          <p className="mt-2 text-text-secondary">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background-primary">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={game.background_image}
          alt={game.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-background-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="mx-auto max-w-7xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-gaming text-4xl font-bold text-white md:text-6xl"
            >
              {game.name}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Game Details */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Ratings */}
              <div className="flex gap-8">
                <div className="rounded-xl bg-background-tertiary p-6 text-center">
                  <div className="text-3xl font-bold text-primary-main">{game.rating}</div>
                  <div className="mt-2 text-sm text-text-secondary">User Rating</div>
                </div>
                {game.metacritic && (
                  <div className="rounded-xl bg-background-tertiary p-6 text-center">
                    <div className="text-3xl font-bold text-semantic-success">{game.metacritic}</div>
                    <div className="mt-2 text-sm text-text-secondary">Metacritic</div>
                  </div>
                )}
              </div>

              {/* Genres */}
              <div>
                <h2 className="font-gaming text-2xl font-bold text-text-primary">Genres</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {game.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="rounded-full bg-background-tertiary px-4 py-2 text-sm text-text-secondary"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Platforms */}
              <div>
                <h2 className="font-gaming text-2xl font-bold text-text-primary">Platforms</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {game.platforms.map((platform) => (
                    <span
                      key={platform.platform.id}
                      className="rounded-full bg-background-tertiary px-4 py-2 text-sm text-text-secondary"
                    >
                      {platform.platform.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-xl bg-background-tertiary p-6"
            >
              <h2 className="font-gaming text-2xl font-bold text-text-primary">Game Info</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="text-sm text-text-secondary">Release Date</div>
                  <div className="mt-1 text-text-primary">{game.released}</div>
                </div>
                <div>
                  <div className="text-sm text-text-secondary">Average Playtime</div>
                  <div className="mt-1 text-text-primary">{game.playtime} hours</div>
                </div>
                {game.esrb_rating && (
                  <div>
                    <div className="text-sm text-text-secondary">ESRB Rating</div>
                    <div className="mt-1 text-text-primary">{game.esrb_rating.name}</div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
} 