import { useQuery } from '@tanstack/react-query';

interface Tournament {
  id: number;
  title: string;
  game: string;
  image: string;
  startDate: string;
  prizePool: string;
  participants: {
    current: number;
    max: number;
  };
  status: string;
}

async function fetchTournaments(): Promise<Tournament[]> {
  const response = await fetch('/api/tournaments');
  if (!response.ok) {
    throw new Error('Failed to fetch tournaments');
  }
  return response.json();
}

export function useTournaments() {
  return useQuery({
    queryKey: ['tournaments'],
    queryFn: fetchTournaments,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
} 