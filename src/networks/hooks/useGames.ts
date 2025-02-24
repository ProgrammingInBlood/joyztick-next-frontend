import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { rawgApi } from '../config';
import { Game, GameQueryParams, PaginatedResponse } from '../types';

const fetchGamesPage = async ({ pageParam = 1, ...params }: GameQueryParams & { pageParam?: number }): Promise<PaginatedResponse<Game>> => {
  const { data } = await rawgApi.get<PaginatedResponse<Game>>('/games', { 
    params: { ...params, page: pageParam }
  });
  return data;
};

export const useGames = (params: Omit<GameQueryParams, 'page'> = {}) => {
  return useInfiniteQuery<PaginatedResponse<Game>>({
    queryKey: ['games', params],
    queryFn: ({ pageParam }) => fetchGamesPage({ ...params, pageParam }),
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;
      const nextPage = Number(lastPage.next.split('page=')[1]?.split('&')[0]);
      return !isNaN(nextPage) ? nextPage : undefined;
    },
    initialPageParam: 1,
    enabled: true,
    refetchOnMount: 'always',
    refetchOnWindowFocus: false,
    gcTime: 0,
  });
};

export const useGame = (slug: string) => {
  return useQuery<Game>({
    queryKey: ['game', slug],
    queryFn: async () => {
      const { data } = await rawgApi.get<Game>(`/games/${slug}`);
      return data;
    },
    staleTime: 10 * 60 * 1000,
  });
}; 