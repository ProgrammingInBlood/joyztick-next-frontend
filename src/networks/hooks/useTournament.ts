import { useQuery } from '@tanstack/react-query';

interface Prize {
  place: string;
  amount: string;
}

interface Team {
  name: string;
  seed: number;
  status: string;
}

interface Stream {
  platform: string;
  url: string;
}

export interface Tournament {
  id: number;
  title: string;
  game: string;
  image: string;
  startDate: string;
  endDate: string;
  prizePool: {
    total: string;
    breakdown: Prize[];
  };
  participants: {
    current: number;
    max: number;
    teams: Team[];
  };
  status: string;
  nextMatch: string;
  format: {
    type: string;
    rounds: string[];
    currentRound: string;
  };
  rules: string[];
  streams: Stream[];
  discord: string;
}

async function fetchTournament(id: string): Promise<Tournament> {
  const response = await fetch(`/api/tournaments/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch tournament');
  }
  return response.json();
}

export function useTournament(id: string) {
  return useQuery({
    queryKey: ['tournament', id],
    queryFn: () => fetchTournament(id),
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
} 