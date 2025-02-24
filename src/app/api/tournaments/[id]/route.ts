import { NextResponse } from 'next/server';

// Mock data - In a real app, this would come from a database
const tournaments = [
  {
    id: 1,
    title: 'Valorant Pro League',
    game: 'Valorant',
    image: 'https://media.rawg.io/media/games/b11/b11127b9ee3c3701bd15b9af3286d20e.jpg',
    startDate: '2024-03-15',
    endDate: '2024-03-20',
    prizePool: {
      total: '$25,000',
      breakdown: [
        { place: '1st', amount: '$12,500' },
        { place: '2nd', amount: '$7,500' },
        { place: '3rd', amount: '$3,000' },
        { place: '4th', amount: '$2,000' },
      ],
    },
    participants: {
      current: 64,
      max: 128,
      teams: [
        { name: 'Team Liquid', seed: 1, status: 'qualified' },
        { name: 'Cloud9', seed: 2, status: 'qualified' },
        { name: 'Fnatic', seed: 3, status: 'qualified' },
        { name: 'Sentinels', seed: 4, status: 'qualified' },
      ],
    },
    status: 'Group Stage',
    nextMatch: '2024-03-17 18:00 UTC',
    format: {
      type: 'Double Elimination',
      rounds: ['Group Stage', 'Quarter Finals', 'Semi Finals', 'Finals'],
      currentRound: 'Group Stage',
    },
    rules: [
      'All participants must be at least 16 years old',
      'Teams must have 5 active players and 1 substitute',
      'All matches are best of 3, finals are best of 5',
      'Default game settings must be used',
      'Anti-cheat software is required',
    ],
    streams: [
      { platform: 'Twitch', url: 'https://twitch.tv/tournament' },
      { platform: 'YouTube', url: 'https://youtube.com/tournament' },
    ],
    discord: 'https://discord.gg/tournament',
  },
  // Add more tournaments as needed
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const tournament = tournaments.find(t => t.id === parseInt(params.id));
    
    if (!tournament) {
      return NextResponse.json(
        { error: 'Tournament not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(tournament);
  } catch (error) {
    console.error('Error fetching tournament:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 