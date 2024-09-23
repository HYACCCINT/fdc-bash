import { getMovieById, GetMovieByIdResponse } from '@movie/dataconnect';
import { addFavoritedMovie } from '@movie/dataconnect';
import { deleteFavoritedMovie } from '@movie/dataconnect';
import { getIfFavoritedMovie } from '@movie/dataconnect';
import { addReview } from '@movie/dataconnect';
import { deleteReview } from '@movie/dataconnect';
import { GetActorByIdResponse, getActorById } from '@movie/dataconnect';
import { searchAll, SearchAllResponse } from '@movie/dataconnect';
import { listMovies, ListMoviesResponse } from '@movie/dataconnect';
import { getCurrentUser, GetCurrentUserResponse } from '@movie/dataconnect';
import { searchMovieDescriptionUsingL2similarity, SearchMovieDescriptionUsingL2similarityResponse } from '@movie/dataconnect';

// Fetch top-rated movies
export const handleGetTopMovies = async (limit: number): Promise<ListMoviesResponse['movies'] | null> => {
  try {
    const response = await listMovies({ orderByRating: 'DESC', limit });
    return response.data.movies;
  } catch (error) {
    console.error('Error fetching top movies:', error);
    return null;
  }
};

// Fetch latest movies
export const handleGetLatestMovies = async (limit: number): Promise<ListMoviesResponse['movies'] | null> => {
  try {
    const response = await listMovies({ orderByReleaseYear: 'DESC', limit });
    return response.data.movies;
  } catch (error) {
    console.error('Error fetching latest movies:', error);
    return null;
  }
};

// Fetch movie details by ID
export const handleGetMovieById = async (movieId: string): Promise<GetMovieByIdResponse['movie'] | null> => {
    try {
      const response = await getMovieById({ id: movieId });
      if (response.data.movie) {
        return response.data.movie;
      }
      return null;
    } catch (error) {
      console.error('Error fetching movie:', error);
      return null;
    }
  };
  
  // Add a movie to user's favorites
  export const handleAddFavoritedMovie = async (movieId: string): Promise<void> => {
    try {
      await addFavoritedMovie({ movieId });
    } catch (error) {
      console.error('Error adding movie to favorites:', error);
      throw error;
    }
  };
  
  // Remove a movie from user's favorites
  export const handleDeleteFavoritedMovie = async (movieId: string): Promise<void> => {
    try {
      await deleteFavoritedMovie({ movieId });
    } catch (error) {
      console.error('Error removing movie from favorites:', error);
      throw error;
    }
  };
  
  // Check if the movie is favorited by the user
  export const handleGetIfFavoritedMovie = async (movieId: string): Promise<boolean> => {
    try {
      const response = await getIfFavoritedMovie({ movieId });
      return !!response.data.favorite_movie;
    } catch (error) {
      console.error('Error checking if movie is favorited:', error);
      return false;
    }
  };
  
  // Add a review to a movie
  export const handleAddReview = async (movieId: string, rating: number, reviewText: string): Promise<void> => {
    try {
      await addReview({ movieId, rating, reviewText });
    } catch (error) {
      console.error('Error adding review:', error);
      throw error;
    }
  };
  
  // Delete a review from a movie
  export const handleDeleteReview = async (movieId: string): Promise<void> => {
    try {
      await deleteReview({ movieId });
    } catch (error) {
      console.error('Error deleting review:', error);
      throw error;
    }
  };

// Calling generated SDK for GetActorById
export const handleGetActorById = async (actorId: string): Promise<GetActorByIdResponse['actor'] | null> => {
  try {
    const response = await getActorById({ id: actorId });
    if (response.data.actor) {
      return response.data.actor;
    }
    return null;
  } catch (error) {
    console.error('Error fetching actor:', error);
    return null;
  }
};

// Function to perform the search using the query and filters
export const handleSearchAll = async (
    searchQuery: string,
    minYear: number,
    maxYear: number,
    minRating: number,
    maxRating: number,
    genre: string
  ): Promise<SearchAllResponse | null> => {
    try {
      const response = await searchAll({
        input: searchQuery,
        minYear,
        maxYear,
        minRating,
        maxRating,
        genre,
      });
      
      return response.data;
    } catch (error) {
      console.error('Error performing search:', error);
      return null;
    }
  };

// Fetch current user profile
export const handleGetCurrentUser = async (): Promise<GetCurrentUserResponse['user'] | null> => {
    try {
      const response = await getCurrentUser();
      return response.data.user;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  };

// Perform vector-based search for movies based on description
export const searchMoviesByDescription = async (
    query: string
  ): Promise<SearchMovieDescriptionUsingL2similarityResponse['movies_descriptionEmbedding_similarity'] | null> => {
    try {
      const response = await searchMovieDescriptionUsingL2similarity({ query });
      return response.data.movies_descriptionEmbedding_similarity;
    } catch (error) {
      console.error('Error fetching movie descriptions:', error);
      return null;
    }
  };