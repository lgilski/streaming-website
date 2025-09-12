export type movieDetails = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: [string];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type movie = {
  backdrop_path: string;
  id: 967847;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  title: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type moviesList = {
  page: number;
  results: movie[];
  total_pages: number;
  total_results: number;
};

export type video = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};

export type movieVideos = {
  id: number;
  results: video[];
};

export type cast = {
  adult: false;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}[];

export type crew = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}[];

export type movieCredits = {
  cast: cast;
  crew: crew;
  id: number;
};

export type watchProviders = {
  link: string;
  buy: {
    logo_path: string;
    provider_id: number;
    provider_name: string;
    display_priority: number;
  }[];
  rent: {
    logo_path: string;
    provider_id: number;
    provider_name: string;
    display_priority: number;
  }[];
  flatrate: {
    logo_path: string;
    provider_id: number;
    provider_name: string;
    display_priority: number;
  }[];
};

export type moviesDataFromAPI = {
  page: number;
  results: movie[];
  total_pages: number;
  total_results: number;
};
