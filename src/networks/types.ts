export interface Game {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  metacritic_platforms: MetacriticPlatform[];
  released: string;
  tba: boolean;
  updated: string;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  reactions: { [key: string]: number };
  added: number;
  added_by_status: { [key: string]: number };
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: number;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: number;
  youtube_count: number;
  reviews_text_count: number;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  esrb_rating: ESRBRating;
  platforms: Platform[];
  parent_platforms: ParentPlatform[];
  genres: Genre[];
  stores: Store[];
  developers: Developer[];
  publishers: Publisher[];
  tags: Tag[];
}

export interface Platform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
  released_at?: string;
  requirements?: {
    minimum?: string;
    recommended?: string;
  };
}

export interface ParentPlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}

export interface ESRBRating {
  id: number;
  name: string;
  slug: string;
}

export interface Store {
  id: number;
  url: string;
  store: {
    id: number;
    name: string;
    slug: string;
    domain: string;
    games_count: number;
    image_background: string;
  };
}

export interface Developer {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface Publisher {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

export interface MetacriticPlatform {
  metascore: number;
  url: string;
  platform: {
    platform: number;
    name: string;
    slug: string;
  };
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface GameQueryParams {
  page?: number;
  page_size?: number;
  search?: string;
  ordering?: string;
  platforms?: string;
  genres?: string;
  tags?: string;
  dates?: string;
  metacritic?: string;
  parent_platforms?: string;
  exclude_additions?: boolean;
  exclude_parents?: boolean;
  exclude_game_series?: boolean;
  developers?: string;
  publishers?: string;
  stores?: string;
  creators?: string;
  exclude_stores?: string;
} 