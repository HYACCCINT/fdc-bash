import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';
export const connectorConfig: ConnectorConfig;

export type TimestampString = string;

export type UUIDString = string;

export type Int64String = string;

export type DateString = string;


export interface Actor_Key {
  id: UUIDString;
  __typename?: 'Actor_Key';
}

export interface AddFavoritedActorResponse {
  favorite_actor_upsert: FavoriteActor_Key;
}

export interface AddFavoritedActorVariables {
  actorId: UUIDString;
}

export interface AddFavoritedMovieResponse {
  favorite_movie_upsert: FavoriteMovie_Key;
}

export interface AddFavoritedMovieVariables {
  movieId: UUIDString;
}

export interface AddReviewResponse {
  review_upsert: Review_Key;
}

export interface AddReviewVariables {
  movieId: UUIDString;
  rating: number;
  reviewText: string;
}

export interface CreateMovieResponse {
  movie_insert: Movie_Key;
}

export interface CreateMovieVariables {
  title: string;
  releaseYear: number;
  genre: string;
  rating?: number | null;
  description?: string | null;
  imageUrl: string;
  tags?: string[] | null;
}

export interface DeleteFavoritedActorResponse {
  favorite_actor_delete?: FavoriteActor_Key | null;
}

export interface DeleteFavoritedActorVariables {
  actorId: UUIDString;
}

export interface DeleteFavoritedMovieResponse {
  favorite_movie_delete?: FavoriteMovie_Key | null;
}

export interface DeleteFavoritedMovieVariables {
  movieId: UUIDString;
}

export interface DeleteMovieResponse {
  movie_delete?: Movie_Key | null;
}

export interface DeleteMovieVariables {
  id: UUIDString;
}

export interface DeleteReviewResponse {
  review_delete?: Review_Key | null;
}

export interface DeleteReviewVariables {
  movieId: UUIDString;
}

export interface DeleteUnpopularMoviesResponse {
  movie_deleteMany: number;
}

export interface DeleteUnpopularMoviesVariables {
  minRating: number;
}

export interface FavoriteActor_Key {
  userId: string;
  actorId: UUIDString;
  __typename?: 'FavoriteActor_Key';
}

export interface FavoriteMovie_Key {
  userId: string;
  movieId: UUIDString;
  __typename?: 'FavoriteMovie_Key';
}

export interface GetActorByIdResponse {
  actor?: {
    id: UUIDString;
    name: string;
    imageUrl: string;
    mainActors: ({
      id: UUIDString;
      title: string;
      genre?: string | null;
      tags?: string[] | null;
      imageUrl: string;
    } & Movie_Key)[];
      supportingActors: ({
        id: UUIDString;
        title: string;
        genre?: string | null;
        tags?: string[] | null;
        imageUrl: string;
      } & Movie_Key)[];
  } & Actor_Key;
}

export interface GetActorByIdVariables {
  id: UUIDString;
}

export interface GetCurrentUserResponse {
  user?: {
    id: string;
    username: string;
    reviews: ({
      id: UUIDString;
      rating?: number | null;
      reviewDate: DateString;
      reviewText?: string | null;
      movie: {
        id: UUIDString;
        title: string;
      } & Movie_Key;
    })[];
      favoriteMovies: ({
        movie: {
          id: UUIDString;
          title: string;
          genre?: string | null;
          imageUrl: string;
          releaseYear?: number | null;
          rating?: number | null;
          description?: string | null;
          tags?: string[] | null;
          metadata: ({
            director?: string | null;
          })[];
        } & Movie_Key;
      })[];
        favoriteActors: ({
          actor: {
            id: UUIDString;
            name: string;
            imageUrl: string;
          } & Actor_Key;
        })[];
  } & User_Key;
}

export interface GetFavoriteActorsResponse {
  user?: {
    favorite_actors_on_user: ({
      actor: {
        id: UUIDString;
        name: string;
        imageUrl: string;
      } & Actor_Key;
    })[];
  };
}

export interface GetIfFavoritedActorResponse {
  favorite_actor?: {
    actorId: UUIDString;
  };
}

export interface GetIfFavoritedActorVariables {
  actorId: UUIDString;
}

export interface GetIfFavoritedMovieResponse {
  favorite_movie?: {
    movieId: UUIDString;
  };
}

export interface GetIfFavoritedMovieVariables {
  movieId: UUIDString;
}

export interface GetMovieByIdResponse {
  movie?: {
    id: UUIDString;
    title: string;
    imageUrl: string;
    releaseYear?: number | null;
    genre?: string | null;
    rating?: number | null;
    description?: string | null;
    tags?: string[] | null;
    metadata: ({
      director?: string | null;
    })[];
      mainActors: ({
        id: UUIDString;
        name: string;
        imageUrl: string;
      } & Actor_Key)[];
        supportingActors: ({
          id: UUIDString;
          name: string;
          imageUrl: string;
        } & Actor_Key)[];
          reviews: ({
            id: UUIDString;
            reviewText?: string | null;
            reviewDate: DateString;
            rating?: number | null;
            user: {
              id: string;
              username: string;
            } & User_Key;
          })[];
  } & Movie_Key;
}

export interface GetMovieByIdVariables {
  id: UUIDString;
}

export interface GetUserFavoriteMoviesResponse {
  user?: {
    favorite_movies_on_user: ({
      movie: {
        id: UUIDString;
        title: string;
        genre?: string | null;
        imageUrl: string;
        releaseYear?: number | null;
        rating?: number | null;
        description?: string | null;
      } & Movie_Key;
    })[];
  };
}

export interface ListMoviesByGenreResponse {
  mostPopular: ({
    id: UUIDString;
    title: string;
    imageUrl: string;
    rating?: number | null;
    tags?: string[] | null;
  } & Movie_Key)[];
    mostRecent: ({
      id: UUIDString;
      title: string;
      imageUrl: string;
      rating?: number | null;
      tags?: string[] | null;
    } & Movie_Key)[];
}

export interface ListMoviesByGenreVariables {
  genre: string;
}

export interface ListMoviesByPartialTitleResponse {
  movies: ({
    id: UUIDString;
    title: string;
    genre?: string | null;
    rating?: number | null;
    imageUrl: string;
  } & Movie_Key)[];
}

export interface ListMoviesByPartialTitleVariables {
  input: string;
}

export interface ListMoviesByTagResponse {
  movies: ({
    id: UUIDString;
    title: string;
    imageUrl: string;
    genre?: string | null;
    rating?: number | null;
  } & Movie_Key)[];
}

export interface ListMoviesByTagVariables {
  tag: string;
}

export interface ListMoviesResponse {
  movies: ({
    id: UUIDString;
    title: string;
    imageUrl: string;
    releaseYear?: number | null;
    genre?: string | null;
    rating?: number | null;
    tags?: string[] | null;
    description?: string | null;
  } & Movie_Key)[];
}

export interface ListMoviesVariables {
  orderByRating?: {
  };
    orderByReleaseYear?: {
    };
      limit?: number | null;
}

export interface MovieActor_Key {
  movieId: UUIDString;
  actorId: UUIDString;
  __typename?: 'MovieActor_Key';
}

export interface MovieMetadata_Key {
  id: UUIDString;
  __typename?: 'MovieMetadata_Key';
}

export interface Movie_Key {
  id: UUIDString;
  __typename?: 'Movie_Key';
}

export interface MoviesByReleaseYearResponse {
  movies: ({
    id: UUIDString;
    rating?: number | null;
    title: string;
    imageUrl: string;
  } & Movie_Key)[];
}

export interface MoviesByReleaseYearVariables {
  min?: number | null;
  max?: number | null;
}

export interface Review_Key {
  userId: string;
  movieId: UUIDString;
  __typename?: 'Review_Key';
}

export interface SearchAllResponse {
  moviesMatchingTitle: ({
    id: UUIDString;
    title: string;
    genre?: string | null;
    rating?: number | null;
    imageUrl: string;
  } & Movie_Key)[];
    moviesMatchingDescription: ({
      id: UUIDString;
      title: string;
      genre?: string | null;
      rating?: number | null;
      imageUrl: string;
    } & Movie_Key)[];
      actorsMatchingName: ({
        id: UUIDString;
        name: string;
        imageUrl: string;
      } & Actor_Key)[];
        reviewsMatchingText: ({
          id: UUIDString;
          rating?: number | null;
          reviewText?: string | null;
          reviewDate: DateString;
          movie: {
            id: UUIDString;
            title: string;
          } & Movie_Key;
            user: {
              id: string;
              username: string;
            } & User_Key;
        })[];
}

export interface SearchAllVariables {
  input?: string | null;
  minYear: number;
  maxYear: number;
  minRating: number;
  maxRating: number;
  genre: string;
}

export interface SearchMovieAndResponse {
  movies: ({
    id: UUIDString;
    rating?: number | null;
    title: string;
    imageUrl: string;
  } & Movie_Key)[];
}

export interface SearchMovieAndVariables {
  minRating?: number | null;
  maxRating?: number | null;
  genre?: string | null;
  tag?: string | null;
  input?: string | null;
}

export interface SearchMovieDescriptionUsingL2similarityResponse {
  movies_descriptionEmbedding_similarity: ({
    id: UUIDString;
    title: string;
    description?: string | null;
    tags?: string[] | null;
    rating?: number | null;
    imageUrl: string;
  } & Movie_Key)[];
}

export interface SearchMovieDescriptionUsingL2similarityVariables {
  query: string;
}

export interface SearchMovieOrResponse {
  movies: ({
    id: UUIDString;
    rating?: number | null;
    title: string;
    imageUrl: string;
  } & Movie_Key)[];
}

export interface SearchMovieOrVariables {
  minRating?: number | null;
  maxRating?: number | null;
  genre?: string | null;
  tag?: string | null;
  input?: string | null;
}

export interface UpdateMovieResponse {
  movie_update?: Movie_Key | null;
}

export interface UpdateMovieVariables {
  id: UUIDString;
  title?: string | null;
  releaseYear?: number | null;
  genre?: string | null;
  rating?: number | null;
  description?: string | null;
  imageUrl?: string | null;
  tags?: string[] | null;
}

export interface UpsertUserResponse {
  user_upsert: User_Key;
}

export interface UpsertUserVariables {
  username: string;
}

export interface User_Key {
  id: string;
  __typename?: 'User_Key';
}



/* Allow users to create refs without passing in DataConnect */
export function createMovieRef(vars: CreateMovieVariables): MutationRef<CreateMovieResponse, CreateMovieVariables>;
/* Allow users to pass in custom DataConnect instances */
export function createMovieRef(dc: DataConnect, vars: CreateMovieVariables): MutationRef<CreateMovieResponse,CreateMovieVariables>;

export function createMovie(vars: CreateMovieVariables): MutationPromise<CreateMovieResponse, CreateMovieVariables>;
export function createMovie(dc: DataConnect, vars: CreateMovieVariables): MutationPromise<CreateMovieResponse,CreateMovieVariables>;


/* Allow users to create refs without passing in DataConnect */
export function addFavoritedMovieRef(vars: AddFavoritedMovieVariables): MutationRef<AddFavoritedMovieResponse, AddFavoritedMovieVariables>;
/* Allow users to pass in custom DataConnect instances */
export function addFavoritedMovieRef(dc: DataConnect, vars: AddFavoritedMovieVariables): MutationRef<AddFavoritedMovieResponse,AddFavoritedMovieVariables>;

export function addFavoritedMovie(vars: AddFavoritedMovieVariables): MutationPromise<AddFavoritedMovieResponse, AddFavoritedMovieVariables>;
export function addFavoritedMovie(dc: DataConnect, vars: AddFavoritedMovieVariables): MutationPromise<AddFavoritedMovieResponse,AddFavoritedMovieVariables>;


/* Allow users to create refs without passing in DataConnect */
export function deleteFavoritedMovieRef(vars: DeleteFavoritedMovieVariables): MutationRef<DeleteFavoritedMovieResponse, DeleteFavoritedMovieVariables>;
/* Allow users to pass in custom DataConnect instances */
export function deleteFavoritedMovieRef(dc: DataConnect, vars: DeleteFavoritedMovieVariables): MutationRef<DeleteFavoritedMovieResponse,DeleteFavoritedMovieVariables>;

export function deleteFavoritedMovie(vars: DeleteFavoritedMovieVariables): MutationPromise<DeleteFavoritedMovieResponse, DeleteFavoritedMovieVariables>;
export function deleteFavoritedMovie(dc: DataConnect, vars: DeleteFavoritedMovieVariables): MutationPromise<DeleteFavoritedMovieResponse,DeleteFavoritedMovieVariables>;


/* Allow users to create refs without passing in DataConnect */
export function addFavoritedActorRef(vars: AddFavoritedActorVariables): MutationRef<AddFavoritedActorResponse, AddFavoritedActorVariables>;
/* Allow users to pass in custom DataConnect instances */
export function addFavoritedActorRef(dc: DataConnect, vars: AddFavoritedActorVariables): MutationRef<AddFavoritedActorResponse,AddFavoritedActorVariables>;

export function addFavoritedActor(vars: AddFavoritedActorVariables): MutationPromise<AddFavoritedActorResponse, AddFavoritedActorVariables>;
export function addFavoritedActor(dc: DataConnect, vars: AddFavoritedActorVariables): MutationPromise<AddFavoritedActorResponse,AddFavoritedActorVariables>;


/* Allow users to create refs without passing in DataConnect */
export function deleteFavoritedActorRef(vars: DeleteFavoritedActorVariables): MutationRef<DeleteFavoritedActorResponse, DeleteFavoritedActorVariables>;
/* Allow users to pass in custom DataConnect instances */
export function deleteFavoritedActorRef(dc: DataConnect, vars: DeleteFavoritedActorVariables): MutationRef<DeleteFavoritedActorResponse,DeleteFavoritedActorVariables>;

export function deleteFavoritedActor(vars: DeleteFavoritedActorVariables): MutationPromise<DeleteFavoritedActorResponse, DeleteFavoritedActorVariables>;
export function deleteFavoritedActor(dc: DataConnect, vars: DeleteFavoritedActorVariables): MutationPromise<DeleteFavoritedActorResponse,DeleteFavoritedActorVariables>;


/* Allow users to create refs without passing in DataConnect */
export function addReviewRef(vars: AddReviewVariables): MutationRef<AddReviewResponse, AddReviewVariables>;
/* Allow users to pass in custom DataConnect instances */
export function addReviewRef(dc: DataConnect, vars: AddReviewVariables): MutationRef<AddReviewResponse,AddReviewVariables>;

export function addReview(vars: AddReviewVariables): MutationPromise<AddReviewResponse, AddReviewVariables>;
export function addReview(dc: DataConnect, vars: AddReviewVariables): MutationPromise<AddReviewResponse,AddReviewVariables>;


/* Allow users to create refs without passing in DataConnect */
export function deleteReviewRef(vars: DeleteReviewVariables): MutationRef<DeleteReviewResponse, DeleteReviewVariables>;
/* Allow users to pass in custom DataConnect instances */
export function deleteReviewRef(dc: DataConnect, vars: DeleteReviewVariables): MutationRef<DeleteReviewResponse,DeleteReviewVariables>;

export function deleteReview(vars: DeleteReviewVariables): MutationPromise<DeleteReviewResponse, DeleteReviewVariables>;
export function deleteReview(dc: DataConnect, vars: DeleteReviewVariables): MutationPromise<DeleteReviewResponse,DeleteReviewVariables>;


/* Allow users to create refs without passing in DataConnect */
export function upsertUserRef(vars: UpsertUserVariables): MutationRef<UpsertUserResponse, UpsertUserVariables>;
/* Allow users to pass in custom DataConnect instances */
export function upsertUserRef(dc: DataConnect, vars: UpsertUserVariables): MutationRef<UpsertUserResponse,UpsertUserVariables>;

export function upsertUser(vars: UpsertUserVariables): MutationPromise<UpsertUserResponse, UpsertUserVariables>;
export function upsertUser(dc: DataConnect, vars: UpsertUserVariables): MutationPromise<UpsertUserResponse,UpsertUserVariables>;


/* Allow users to create refs without passing in DataConnect */
export function updateMovieRef(vars: UpdateMovieVariables): MutationRef<UpdateMovieResponse, UpdateMovieVariables>;
/* Allow users to pass in custom DataConnect instances */
export function updateMovieRef(dc: DataConnect, vars: UpdateMovieVariables): MutationRef<UpdateMovieResponse,UpdateMovieVariables>;

export function updateMovie(vars: UpdateMovieVariables): MutationPromise<UpdateMovieResponse, UpdateMovieVariables>;
export function updateMovie(dc: DataConnect, vars: UpdateMovieVariables): MutationPromise<UpdateMovieResponse,UpdateMovieVariables>;


/* Allow users to create refs without passing in DataConnect */
export function deleteMovieRef(vars: DeleteMovieVariables): MutationRef<DeleteMovieResponse, DeleteMovieVariables>;
/* Allow users to pass in custom DataConnect instances */
export function deleteMovieRef(dc: DataConnect, vars: DeleteMovieVariables): MutationRef<DeleteMovieResponse,DeleteMovieVariables>;

export function deleteMovie(vars: DeleteMovieVariables): MutationPromise<DeleteMovieResponse, DeleteMovieVariables>;
export function deleteMovie(dc: DataConnect, vars: DeleteMovieVariables): MutationPromise<DeleteMovieResponse,DeleteMovieVariables>;


/* Allow users to create refs without passing in DataConnect */
export function deleteUnpopularMoviesRef(vars: DeleteUnpopularMoviesVariables): MutationRef<DeleteUnpopularMoviesResponse, DeleteUnpopularMoviesVariables>;
/* Allow users to pass in custom DataConnect instances */
export function deleteUnpopularMoviesRef(dc: DataConnect, vars: DeleteUnpopularMoviesVariables): MutationRef<DeleteUnpopularMoviesResponse,DeleteUnpopularMoviesVariables>;

export function deleteUnpopularMovies(vars: DeleteUnpopularMoviesVariables): MutationPromise<DeleteUnpopularMoviesResponse, DeleteUnpopularMoviesVariables>;
export function deleteUnpopularMovies(dc: DataConnect, vars: DeleteUnpopularMoviesVariables): MutationPromise<DeleteUnpopularMoviesResponse,DeleteUnpopularMoviesVariables>;


/* Allow users to create refs without passing in DataConnect */
export function listMoviesRef(vars?: ListMoviesVariables): QueryRef<ListMoviesResponse, ListMoviesVariables>;
/* Allow users to pass in custom DataConnect instances */
export function listMoviesRef(dc: DataConnect, vars?: ListMoviesVariables): QueryRef<ListMoviesResponse,ListMoviesVariables>;

export function listMovies(vars?: ListMoviesVariables): QueryPromise<ListMoviesResponse, ListMoviesVariables>;
export function listMovies(dc: DataConnect, vars?: ListMoviesVariables): QueryPromise<ListMoviesResponse,ListMoviesVariables>;


/* Allow users to create refs without passing in DataConnect */
export function listMoviesByGenreRef(vars: ListMoviesByGenreVariables): QueryRef<ListMoviesByGenreResponse, ListMoviesByGenreVariables>;
/* Allow users to pass in custom DataConnect instances */
export function listMoviesByGenreRef(dc: DataConnect, vars: ListMoviesByGenreVariables): QueryRef<ListMoviesByGenreResponse,ListMoviesByGenreVariables>;

export function listMoviesByGenre(vars: ListMoviesByGenreVariables): QueryPromise<ListMoviesByGenreResponse, ListMoviesByGenreVariables>;
export function listMoviesByGenre(dc: DataConnect, vars: ListMoviesByGenreVariables): QueryPromise<ListMoviesByGenreResponse,ListMoviesByGenreVariables>;


/* Allow users to create refs without passing in DataConnect */
export function getMovieByIdRef(vars: GetMovieByIdVariables): QueryRef<GetMovieByIdResponse, GetMovieByIdVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getMovieByIdRef(dc: DataConnect, vars: GetMovieByIdVariables): QueryRef<GetMovieByIdResponse,GetMovieByIdVariables>;

export function getMovieById(vars: GetMovieByIdVariables): QueryPromise<GetMovieByIdResponse, GetMovieByIdVariables>;
export function getMovieById(dc: DataConnect, vars: GetMovieByIdVariables): QueryPromise<GetMovieByIdResponse,GetMovieByIdVariables>;


/* Allow users to create refs without passing in DataConnect */
export function getActorByIdRef(vars: GetActorByIdVariables): QueryRef<GetActorByIdResponse, GetActorByIdVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getActorByIdRef(dc: DataConnect, vars: GetActorByIdVariables): QueryRef<GetActorByIdResponse,GetActorByIdVariables>;

export function getActorById(vars: GetActorByIdVariables): QueryPromise<GetActorByIdResponse, GetActorByIdVariables>;
export function getActorById(dc: DataConnect, vars: GetActorByIdVariables): QueryPromise<GetActorByIdResponse,GetActorByIdVariables>;


/* Allow users to create refs without passing in DataConnect */
export function getCurrentUserRef(): QueryRef<GetCurrentUserResponse, undefined>;/* Allow users to pass in custom DataConnect instances */
export function getCurrentUserRef(dc: DataConnect): QueryRef<GetCurrentUserResponse,undefined>;

export function getCurrentUser(): QueryPromise<GetCurrentUserResponse, undefined>;
export function getCurrentUser(dc: DataConnect): QueryPromise<GetCurrentUserResponse,undefined>;


/* Allow users to create refs without passing in DataConnect */
export function getIfFavoritedMovieRef(vars: GetIfFavoritedMovieVariables): QueryRef<GetIfFavoritedMovieResponse, GetIfFavoritedMovieVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getIfFavoritedMovieRef(dc: DataConnect, vars: GetIfFavoritedMovieVariables): QueryRef<GetIfFavoritedMovieResponse,GetIfFavoritedMovieVariables>;

export function getIfFavoritedMovie(vars: GetIfFavoritedMovieVariables): QueryPromise<GetIfFavoritedMovieResponse, GetIfFavoritedMovieVariables>;
export function getIfFavoritedMovie(dc: DataConnect, vars: GetIfFavoritedMovieVariables): QueryPromise<GetIfFavoritedMovieResponse,GetIfFavoritedMovieVariables>;


/* Allow users to create refs without passing in DataConnect */
export function getIfFavoritedActorRef(vars: GetIfFavoritedActorVariables): QueryRef<GetIfFavoritedActorResponse, GetIfFavoritedActorVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getIfFavoritedActorRef(dc: DataConnect, vars: GetIfFavoritedActorVariables): QueryRef<GetIfFavoritedActorResponse,GetIfFavoritedActorVariables>;

export function getIfFavoritedActor(vars: GetIfFavoritedActorVariables): QueryPromise<GetIfFavoritedActorResponse, GetIfFavoritedActorVariables>;
export function getIfFavoritedActor(dc: DataConnect, vars: GetIfFavoritedActorVariables): QueryPromise<GetIfFavoritedActorResponse,GetIfFavoritedActorVariables>;


/* Allow users to create refs without passing in DataConnect */
export function searchAllRef(vars: SearchAllVariables): QueryRef<SearchAllResponse, SearchAllVariables>;
/* Allow users to pass in custom DataConnect instances */
export function searchAllRef(dc: DataConnect, vars: SearchAllVariables): QueryRef<SearchAllResponse,SearchAllVariables>;

export function searchAll(vars: SearchAllVariables): QueryPromise<SearchAllResponse, SearchAllVariables>;
export function searchAll(dc: DataConnect, vars: SearchAllVariables): QueryPromise<SearchAllResponse,SearchAllVariables>;


/* Allow users to create refs without passing in DataConnect */
export function searchMovieDescriptionUsingL2similarityRef(vars: SearchMovieDescriptionUsingL2similarityVariables): QueryRef<SearchMovieDescriptionUsingL2similarityResponse, SearchMovieDescriptionUsingL2similarityVariables>;
/* Allow users to pass in custom DataConnect instances */
export function searchMovieDescriptionUsingL2similarityRef(dc: DataConnect, vars: SearchMovieDescriptionUsingL2similarityVariables): QueryRef<SearchMovieDescriptionUsingL2similarityResponse,SearchMovieDescriptionUsingL2similarityVariables>;

export function searchMovieDescriptionUsingL2similarity(vars: SearchMovieDescriptionUsingL2similarityVariables): QueryPromise<SearchMovieDescriptionUsingL2similarityResponse, SearchMovieDescriptionUsingL2similarityVariables>;
export function searchMovieDescriptionUsingL2similarity(dc: DataConnect, vars: SearchMovieDescriptionUsingL2similarityVariables): QueryPromise<SearchMovieDescriptionUsingL2similarityResponse,SearchMovieDescriptionUsingL2similarityVariables>;


/* Allow users to create refs without passing in DataConnect */
export function listMoviesByPartialTitleRef(vars: ListMoviesByPartialTitleVariables): QueryRef<ListMoviesByPartialTitleResponse, ListMoviesByPartialTitleVariables>;
/* Allow users to pass in custom DataConnect instances */
export function listMoviesByPartialTitleRef(dc: DataConnect, vars: ListMoviesByPartialTitleVariables): QueryRef<ListMoviesByPartialTitleResponse,ListMoviesByPartialTitleVariables>;

export function listMoviesByPartialTitle(vars: ListMoviesByPartialTitleVariables): QueryPromise<ListMoviesByPartialTitleResponse, ListMoviesByPartialTitleVariables>;
export function listMoviesByPartialTitle(dc: DataConnect, vars: ListMoviesByPartialTitleVariables): QueryPromise<ListMoviesByPartialTitleResponse,ListMoviesByPartialTitleVariables>;


/* Allow users to create refs without passing in DataConnect */
export function listMoviesByTagRef(vars: ListMoviesByTagVariables): QueryRef<ListMoviesByTagResponse, ListMoviesByTagVariables>;
/* Allow users to pass in custom DataConnect instances */
export function listMoviesByTagRef(dc: DataConnect, vars: ListMoviesByTagVariables): QueryRef<ListMoviesByTagResponse,ListMoviesByTagVariables>;

export function listMoviesByTag(vars: ListMoviesByTagVariables): QueryPromise<ListMoviesByTagResponse, ListMoviesByTagVariables>;
export function listMoviesByTag(dc: DataConnect, vars: ListMoviesByTagVariables): QueryPromise<ListMoviesByTagResponse,ListMoviesByTagVariables>;


/* Allow users to create refs without passing in DataConnect */
export function moviesByReleaseYearRef(vars?: MoviesByReleaseYearVariables): QueryRef<MoviesByReleaseYearResponse, MoviesByReleaseYearVariables>;
/* Allow users to pass in custom DataConnect instances */
export function moviesByReleaseYearRef(dc: DataConnect, vars?: MoviesByReleaseYearVariables): QueryRef<MoviesByReleaseYearResponse,MoviesByReleaseYearVariables>;

export function moviesByReleaseYear(vars?: MoviesByReleaseYearVariables): QueryPromise<MoviesByReleaseYearResponse, MoviesByReleaseYearVariables>;
export function moviesByReleaseYear(dc: DataConnect, vars?: MoviesByReleaseYearVariables): QueryPromise<MoviesByReleaseYearResponse,MoviesByReleaseYearVariables>;


/* Allow users to create refs without passing in DataConnect */
export function searchMovieOrRef(vars?: SearchMovieOrVariables): QueryRef<SearchMovieOrResponse, SearchMovieOrVariables>;
/* Allow users to pass in custom DataConnect instances */
export function searchMovieOrRef(dc: DataConnect, vars?: SearchMovieOrVariables): QueryRef<SearchMovieOrResponse,SearchMovieOrVariables>;

export function searchMovieOr(vars?: SearchMovieOrVariables): QueryPromise<SearchMovieOrResponse, SearchMovieOrVariables>;
export function searchMovieOr(dc: DataConnect, vars?: SearchMovieOrVariables): QueryPromise<SearchMovieOrResponse,SearchMovieOrVariables>;


/* Allow users to create refs without passing in DataConnect */
export function searchMovieAndRef(vars?: SearchMovieAndVariables): QueryRef<SearchMovieAndResponse, SearchMovieAndVariables>;
/* Allow users to pass in custom DataConnect instances */
export function searchMovieAndRef(dc: DataConnect, vars?: SearchMovieAndVariables): QueryRef<SearchMovieAndResponse,SearchMovieAndVariables>;

export function searchMovieAnd(vars?: SearchMovieAndVariables): QueryPromise<SearchMovieAndResponse, SearchMovieAndVariables>;
export function searchMovieAnd(dc: DataConnect, vars?: SearchMovieAndVariables): QueryPromise<SearchMovieAndResponse,SearchMovieAndVariables>;


/* Allow users to create refs without passing in DataConnect */
export function getFavoriteActorsRef(): QueryRef<GetFavoriteActorsResponse, undefined>;/* Allow users to pass in custom DataConnect instances */
export function getFavoriteActorsRef(dc: DataConnect): QueryRef<GetFavoriteActorsResponse,undefined>;

export function getFavoriteActors(): QueryPromise<GetFavoriteActorsResponse, undefined>;
export function getFavoriteActors(dc: DataConnect): QueryPromise<GetFavoriteActorsResponse,undefined>;


/* Allow users to create refs without passing in DataConnect */
export function getUserFavoriteMoviesRef(): QueryRef<GetUserFavoriteMoviesResponse, undefined>;/* Allow users to pass in custom DataConnect instances */
export function getUserFavoriteMoviesRef(dc: DataConnect): QueryRef<GetUserFavoriteMoviesResponse,undefined>;

export function getUserFavoriteMovies(): QueryPromise<GetUserFavoriteMoviesResponse, undefined>;
export function getUserFavoriteMovies(dc: DataConnect): QueryPromise<GetUserFavoriteMoviesResponse,undefined>;


