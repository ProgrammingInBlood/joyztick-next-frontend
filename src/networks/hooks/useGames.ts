import { useQuery } from '@tanstack/react-query';
import { rawgApi } from '../config';
import { Game, GameQueryParams, PaginatedResponse } from '../types';

const fetchGames = async (params: GameQueryParams): Promise<PaginatedResponse<Game>> => {
  const { data } = await rawgApi.get<PaginatedResponse<Game>>('/games', { params });
  return data;
};

export const useGames = (params: GameQueryParams = {}) => {
  return useQuery({
    queryKey: ['games', params],
    queryFn: () => fetchGames(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useGame = (slug: string) => {
  return useQuery({
    queryKey: ['game', slug],
    queryFn: async () => {
      const { data } = await rawgApi.get<Game>(`/games/${slug}`);
      return data;
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}; 