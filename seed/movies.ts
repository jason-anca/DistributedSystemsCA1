import { Movie, MovieReview } from '../shared/types'

export const movies: Movie[] = [
  {
    movieId: 1234,
    genre_ids: [28, 14, 32],
    original_language: 'en',
    overview:
      "Every six years, an ancient order of jiu-jitsu fighters joins forces to battle a vicious race of alien invaders. But when a celebrated war hero goes down in defeat, the fate of the planet and mankind hangs in the balance.",
    popularity: 2633.943,
    release_date: "2020-11-20",
    title: "Title 1234",
    video: false,
    vote_average: 5.9,
    vote_count: 111,
  },
  {
    movieId: 4567,
    genre_ids: [28, 14, 32],
    original_language: 'fr',
    overview:
      "Every six years, an ancient order of jiu-jitsu fighters joins forces to battle a vicious race of alien invaders. But when a celebrated war hero goes down in defeat, the fate of the planet and mankind hangs in the balance.",
    popularity: 2633.943,
    release_date: "2020-11-20",
    title: "Title 1234",
    video: false,
    vote_average: 5.9,
    vote_count: 111,
  },
  {
    movieId: 2345,
    genre_ids: [28, 14, 32],
    original_language: 'en',
    overview:
      "Every six years, an ancient order of jiu-jitsu fighters joins forces to battle a vicious race of alien invaders. But when a celebrated war hero goes down in defeat, the fate of the planet and mankind hangs in the balance.",
    popularity: 2633.943,
    release_date: "2020-11-21",
    title: "Title 2345",
    video: false,
    vote_average: 5.9,
    vote_count: 111,
  },
  {
    movieId: 3456,
    genre_ids: [28, 14, 32],
    original_language: 'en',
    overview:
      "Every six years, an ancient order of jiu-jitsu fighters joins forces to battle a vicious race of alien invaders. But when a celebrated war hero goes down in defeat, the fate of the planet and mankind hangs in the balance.",
    popularity: 2633.943,
    release_date: "2020-11-21",
    title: "Title 3456",
    video: false,
    vote_average: 5.9,
    vote_count: 111,
  },
];

export const movieReviews: MovieReview[] = [
  {
    movieId: 1234,
    reviewerName: "JoeBloggs",
    reviewDate: "2023-11-26",
    reviewRating: 100,
    descriptionText: "This is great movie for children. very good and nice."
  },
  {
    movieId: 1234,
    reviewerName: "JoeCloggs",
    reviewDate: "2023-11-25",
    reviewRating: 0,
    descriptionText: "Terrible."
  },
  {
    movieId: 1234,
    reviewerName: "JaneDoe",
    reviewDate: "2023-11-25",
    reviewRating: 30,
    descriptionText: "Not Great."
  },
  {
    movieId: 1234,
    reviewerName: "DaneJoe",
    reviewDate: "2023-11-25",
    reviewRating: 50,
    descriptionText: "Not Bad, Not Good."
  }
];