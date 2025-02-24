export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  ratings_count: number;
  metacritic: number;
  playtime: number;
  platforms: Platform[];
  genres: Genre[];
  tags: Tag[];
  esrb_rating: ESRBRating;
}

export interface Platform {
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
}

export interface ESRBRating {
  id: number;
  name: string;
  slug: string;
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