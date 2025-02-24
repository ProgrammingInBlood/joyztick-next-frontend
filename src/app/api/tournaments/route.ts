import { NextResponse } from 'next/server';

// Mock data - In a real app, this would come from a database
const tournaments = [
  {
    id: 1,
    title: 'Valorant Pro League',
    game: 'Valorant',
    image: 'https://media.rawg.io/media/games/b11/b11127b9ee3c3701bd15b9af3286d20e.jpg',
    startDate: '2024-03-15',
    prizePool: '$25,000',
    participants: {
      current: 64,
      max: 128,
    },
    status: 'Registration Open',
  },
  {
    id: 2,
    title: 'League of Legends Championship',
    game: 'League of Legends',
    image: 'https://media.rawg.io/media/games/78b/78bc81e247fc7e77af700cbd632a9297.jpg',
    startDate: '2024-04-01',
    prizePool: '$50,000',
    participants: {
      current: 32,
      max: 64,
    },
    status: 'Coming Soon',
  },
  {
    id: 3,
    title: 'CS:GO Masters',
    game: 'Counter-Strike: Global Offensive',
    image: 'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
    startDate: '2024-03-20',
    prizePool: '$30,000',
    participants: {
      current: 48,
      max: 64,
    },
    status: 'Registration Closing Soon',
  },
];

export async function GET() {
  try {
    return NextResponse.json(tournaments);
  } catch (error) {
    console.error('Error fetching tournaments:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 