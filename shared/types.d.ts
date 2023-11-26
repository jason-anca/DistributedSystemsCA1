
export type Movie = {
  movieId: number;
  genre_ids: number[];
  original_language: string;
  overview: string;
  popularity: number;
  release_date: string;
  title: string
  video: boolean;
  vote_average: number;
  vote_count: number
}

export type SignUpBody = {
  username: string;
  password: string;
  email: string
}

export type ConfirmSignUpBody = {
  username: string;
  code: string;
}

export type SignInBody = {
  username: string;
  password: string;
}

export type MovieReview = {
  movieId: number;
  reviewerName: string;
  reviewDate: string;
  reviewRating: number;
  descriptionText: string;
}
