'use client';

import { useState } from 'react';
import { useGames } from '@/networks/hooks/useGames';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GamesPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useGames({
    page,
    page_size: 20,
    ordering: '-metacritic,-rating',
    metacritic: '80,100',
    parent_platforms: '1,2,3',
    exclude_additions: true,
  });

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-primary-main"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-semantic-error">Error loading games</h2>
          <p className="mt-2 text-text-secondary">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background-primary px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="font-gaming text-4xl font-bold text-primary-main md:text-5xl">
            Discover Games
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Explore the latest and greatest games from our collection
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {data?.results.map((game) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-background-tertiary"
            >
              <Link href={`/games/${game.slug}`}>
                <div className="absolute inset-0">
                  <Image
                    src={game.background_image}
                    alt={game.name}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="font-gaming text-xl font-bold text-white group-hover:text-primary-main">
                    {game.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm text-gray-300">{game.rating.toFixed(1)}</span>
                    </div>
                    {game.metacritic && (
                      <div className="rounded bg-semantic-success/20 px-2 py-1">
                        <span className="text-sm text-semantic-success">{game.metacritic}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="rounded-lg bg-background-tertiary px-4 py-2 font-gaming text-text-primary transition-all hover:bg-primary-main hover:text-white disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={!data?.next}
            className="rounded-lg bg-background-tertiary px-4 py-2 font-gaming text-text-primary transition-all hover:bg-primary-main hover:text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
} 