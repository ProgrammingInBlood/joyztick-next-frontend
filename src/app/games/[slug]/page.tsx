'use client';

import { use, useState, useRef, useEffect } from 'react';
import { useGame } from '@/networks/hooks/useGames';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const { data: game, isLoading, error } = useGame(resolvedParams.slug);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      const contentHeight = descriptionRef.current.scrollHeight;
      setShowReadMore(contentHeight > 200);
    }
  }, [game?.description]);

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
    <main className="min-h-screen bg-background-primary pt-20">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full">
        {/* Main Background Image */}
        <Image
          src={game.background_image}
          alt={game.name}
          fill
          className="absolute inset-0 object-cover"
          sizes="100vw"
          quality={90}
          priority
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-background-primary/50 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative z-10 space-y-4"
            >
              <div className="flex flex-wrap items-center gap-4">
                {game.parent_platforms?.map(({ platform }) => (
                  <span key={platform.id} className="rounded-lg bg-background-tertiary/80 px-3 py-1 text-sm backdrop-blur-sm">
                    {platform.name}
                  </span>
                ))}
              </div>
              <h1 className="font-gaming text-4xl font-bold text-white md:text-6xl lg:text-7xl">
                {game.name}
              </h1>
              <div className="flex flex-wrap items-center gap-6">
                {game.released && (
                  <div className="text-lg text-text-secondary">
                    Released: <span className="text-white">{new Date(game.released).toLocaleDateString()}</span>
                  </div>
                )}
                {game.rating && (
                  <div className="flex items-center gap-2">
                    <span className="text-2xl text-yellow-500">★</span>
                    <span className="text-lg text-white">{game.rating.toFixed(1)}</span>
                    <span className="text-sm text-text-secondary">({game.ratings_count} ratings)</span>
                  </div>
                )}
                {game.metacritic && (
                  <div className="rounded-lg bg-semantic-success/20 px-3 py-1">
                    <span className="text-lg font-bold text-semantic-success">Metacritic: {game.metacritic}</span>
                  </div>
                )}
              </div>
            </motion.div>
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
              className="space-y-12"
            >
              {/* Description */}
              <div>
                <h2 className="font-gaming text-2xl font-bold text-text-primary">About</h2>
                <div className="relative">
                  <div 
                    ref={descriptionRef}
                    className={`mt-4 text-text-secondary transition-all duration-500 ease-in-out ${
                      !isDescriptionExpanded ? 'max-h-[200px]' : 'max-h-[2000px]'
                    } overflow-hidden`}
                    dangerouslySetInnerHTML={{ __html: game.description }}
                  />
                  <div className="relative">
                    {showReadMore && !isDescriptionExpanded && (
                      <div className="absolute -top-20 left-0 right-0 h-20 bg-gradient-to-t from-background-primary to-transparent" />
                    )}
                    {showReadMore && (
                      <button
                        onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                        className="relative z-10 mt-4 flex items-center gap-2 text-primary-main hover:text-primary-light"
                      >
                        <span>{isDescriptionExpanded ? 'Show Less' : 'Read More'}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isDescriptionExpanded ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Screenshots Grid */}
              <div>
                <h2 className="font-gaming text-2xl font-bold text-text-primary">Screenshots</h2>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={game.background_image}
                      alt={`${game.name} screenshot 1`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={game.background_image_additional || game.background_image}
                      alt={`${game.name} screenshot 2`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </div>
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

              {/* Tags */}
              <div>
                <h2 className="font-gaming text-2xl font-bold text-text-primary">Features</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {game.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="rounded-full border border-primary-main/20 bg-background-tertiary px-3 py-1 text-sm text-text-secondary"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Developers & Publishers */}
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h2 className="font-gaming text-2xl font-bold text-text-primary">Developers</h2>
                  <div className="mt-4 space-y-2">
                    {game.developers?.map((dev) => (
                      <div key={dev.id} className="text-text-secondary">
                        {dev.name}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="font-gaming text-2xl font-bold text-text-primary">Publishers</h2>
                  <div className="mt-4 space-y-2">
                    {game.publishers?.map((pub) => (
                      <div key={pub.id} className="text-text-secondary">
                        {pub.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Quick Stats */}
            <div className="rounded-xl bg-background-tertiary p-6">
              <h2 className="font-gaming text-2xl font-bold text-text-primary">Game Info</h2>
              <div className="mt-4 space-y-4">
                {game.website && (
                  <div>
                    <div className="text-sm text-text-secondary">Website</div>
                    <Link 
                      href={game.website}
                      target="_blank"
                      className="mt-1 text-primary-main hover:text-primary-light"
                    >
                      Visit Official Website →
                    </Link>
                  </div>
                )}
                <div>
                  <div className="text-sm text-text-secondary">Release Date</div>
                  <div className="mt-1 text-text-primary">
                    {new Date(game.released).toLocaleDateString()}
                  </div>
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
            </div>

            {/* Stores */}
            {game.stores && game.stores.length > 0 && (
              <div className="rounded-xl bg-background-tertiary p-6">
                <h2 className="font-gaming text-2xl font-bold text-text-primary">Available On</h2>
                <div className="mt-4 space-y-2">
                  {game.stores.map(({ store }) => (
                    <Link
                      key={store.id}
                      href={store.domain}
                      target="_blank"
                      className="flex items-center justify-between rounded-lg bg-background-secondary p-3 transition-colors hover:bg-background-secondary/80"
                    >
                      <span className="text-text-primary">{store.name}</span>
                      <span className="text-sm text-primary-main">Visit →</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Metacritic Platforms */}
            {game.metacritic_platforms && game.metacritic_platforms.length > 0 && (
              <div className="rounded-xl bg-background-tertiary p-6">
                <h2 className="font-gaming text-2xl font-bold text-text-primary">Metacritic Scores</h2>
                <div className="mt-4 space-y-2">
                  {game.metacritic_platforms.map((platform) => (
                    <div
                      key={platform.platform.platform}
                      className="flex items-center justify-between rounded-lg bg-background-secondary p-3"
                    >
                      <span className="text-text-secondary">{platform.platform.name}</span>
                      <span className={`font-bold ${
                        platform.metascore >= 90 ? 'text-semantic-success' :
                        platform.metascore >= 75 ? 'text-yellow-500' :
                        'text-semantic-error'
                      }`}>
                        {platform.metascore}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Social Stats */}
            <div className="rounded-xl bg-background-tertiary p-6">
              <h2 className="font-gaming text-2xl font-bold text-text-primary">Community</h2>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {game.reddit_count > 0 && (
                  <div className="rounded-lg bg-background-secondary p-3 text-center">
                    <div className="text-2xl font-bold text-primary-main">
                      {game.reddit_count.toLocaleString()}
                    </div>
                    <div className="text-sm text-text-secondary">Reddit Posts</div>
                  </div>
                )}
                {game.twitch_count > 0 && (
                  <div className="rounded-lg bg-background-secondary p-3 text-center">
                    <div className="text-2xl font-bold text-primary-main">
                      {game.twitch_count.toLocaleString()}
                    </div>
                    <div className="text-sm text-text-secondary">Twitch Viewers</div>
                  </div>
                )}
                {game.youtube_count > 0 && (
                  <div className="rounded-lg bg-background-secondary p-3 text-center">
                    <div className="text-2xl font-bold text-primary-main">
                      {game.youtube_count.toLocaleString()}
                    </div>
                    <div className="text-sm text-text-secondary">YouTube Videos</div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 