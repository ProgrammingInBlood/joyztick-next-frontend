'use client';

import { useRef, useEffect } from 'react';
import { useGames } from '@/networks/hooks/useGames';
import { Game } from '@/networks/types';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const ITEMS_PER_PAGE = 20;

export default function GamesPage() {
  const loadMoreRef = useRef(null);
  const isInView = useInView(loadMoreRef);
  
  const { 
    data,
    isLoading: isLoadingInitial,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGames({
    page_size: ITEMS_PER_PAGE,
    ordering: '-metacritic,-rating,-added',
    metacritic: '80,100',
  });

  useEffect(() => {
    const handleScroll = () => {
      if (loadMoreRef.current && !isFetchingNextPage && hasNextPage) {
        const element = loadMoreRef.current as HTMLElement;
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight;
        
        if (isVisible) {
          fetchNextPage();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const allGames = data?.pages?.flatMap(page => page.results) ?? [];

  const GameCard = ({ game }: { game: Game }) => (
    <Link href={`/games/${game.slug}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-background-tertiary"
        layout
      >
        <div className="absolute inset-0">
          <Image
            src={game.background_image}
            alt={game.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-all duration-500 group-hover:scale-110"
            loading="lazy"
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-gaming text-xl font-bold text-white group-hover:text-primary-main line-clamp-2">
            {game.name}
          </h3>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★</span>
              <span className="text-sm text-gray-300">{game.rating.toFixed(1)}</span>
            </div>
            {game.metacritic && (
              <div className="rounded bg-semantic-success/20 px-2 py-1">
                <span className="text-sm font-bold text-semantic-success">{game.metacritic}</span>
              </div>
            )}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {game.parent_platforms?.slice(0, 3).map(({ platform }: { platform: { id: number; name: string } }) => (
              <span
                key={platform.id}
                className="rounded-full bg-background-tertiary/80 px-2 py-1 text-xs text-gray-300 backdrop-blur-sm"
              >
                {platform.name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );

  if (isLoadingInitial && !allGames.length) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-20">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-primary-main"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-semantic-error">Error loading games</h2>
          <p className="mt-2 text-text-secondary">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background-primary px-4 pt-24">
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

        <motion.div 
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          layout
        >
          {allGames.map((game: Game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </motion.div>

        {/* Loading indicator */}
        {isFetchingNextPage && (
          <div className="flex justify-center py-8">
            <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-primary-main"></div>
          </div>
        )}

        {/* Infinite scroll trigger */}
        <div ref={loadMoreRef} className="mt-8 h-20 w-full" />
      </div>
    </main>
  );
} 