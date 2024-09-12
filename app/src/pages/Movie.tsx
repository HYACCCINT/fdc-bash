import { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MdFavorite, MdFavoriteBorder, MdStar } from 'react-icons/md';
import {
  getMovieById,
  GetMovieByIdResponse,
  addFavoritedMovie,
  deleteFavoritedMovie,
  getIfFavoritedMovie,
  addReview,
  deleteReview,
} from '@movie/dataconnect';
import { onAuthStateChanged, User } from 'firebase/auth';
import { AuthContext } from '@/lib/firebase';
import NotFound from './NotFound';

export default function MoviePage() {
  const { id } = useParams() as { id: string };
  const auth = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [isFavorited, setIsFavorited] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);


  const [movie, setMovie] = useState<GetMovieByIdResponse['movie'] | null>(null);
  const [userReview, setUserReview] = useState<GetMovieByIdResponse['movie']['reviews'][0] | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      async function checkIfFavorited() {
        try {
          const response = await getIfFavoritedMovie({ movieId: id });
          setIsFavorited(!!response.data.favorite_movie);
        } catch (error) {
          console.error('Error checking if favorited:', error);
        }
      }
      if (user) {
        setAuthUser(user);
        checkIfFavorited();
      }
    });

    return () => unsubscribe();
  }, [id, auth]);

  useEffect(() => {
    if (id) {
      const fetchMovie = async () => {
        try {
          const response = await getMovieById({ id });
          setMovie(response.data.movie);
          const userReview = response.data.movie.reviews.find(review => review.user.id === authUser?.uid);
          setUserReview(userReview || null);
        } catch (error) {
          console.error('Error fetching movie:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchMovie();
    }
  }, [id, authUser]);

  async function handleFavoriteToggle(e: React.MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    if (!authUser) return;
    try {
      if (isFavorited) {
        await deleteFavoritedMovie({ movieId: id });
      } else {
        await addFavoritedMovie({ movieId: id });
      }
      setIsFavorited(!isFavorited);
    } catch (error) {
      console.error('Error updating favorite status:', error);
    }
  }

  async function handleReviewSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!authUser) return;
    try {
      await addReview({ movieId: id, rating, reviewText });
      setReviewText('');
      setRating(0);
      const updatedMovie = await getMovieById({ id });
      setMovie(updatedMovie.data.movie);
    } catch (error) {
      console.error('Error adding review:', error);
    }
  }

  async function handleReviewDelete(e: React.MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    if (!authUser || !userReview) return;
    try {
      await deleteReview({ movieId: id });
      setUserReview(null);
      const updatedMovie = await getMovieById({ id });
      setMovie(updatedMovie.data.movie);
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  }

  if (loading) return <p>Loading...</p>;
  if (!movie) return <NotFound />;

  return (
    <div className="container mx-auto p-4 bg-gray-900 min-h-screen text-white">
      <div className="flex flex-col md:flex-row mb-8">
        <img className="w-full md:w-1/3 object-cover rounded-lg shadow-md" src={movie.imageUrl} alt={movie.title} />
        <div className="md:ml-8 mt-4 md:mt-0 flex-1">
          <h1 className="text-5xl font-bold mb-2">{movie.title}</h1>
          <div className="flex items-center text-yellow-500 mb-4">
            <MdStar className="text-yellow-500" size={24} />
            <span className="ml-1 text-gray-400 text-lg">{movie.rating}</span>
          </div>
          <p className="text-lg mb-4 p-4 bg-gray-800 rounded-lg">{movie.description}</p>
          <div className="text-sm space-y-2">
            <p><span className="font-bold">Genre:</span> {movie.genre}</p>
            <p><span className="font-bold">Release Year:</span> {movie.releaseYear}</p>
            <p><span className="font-bold">Director:</span> {movie.metadata[0]?.director}</p>
            <p><span className="font-bold">Tags:</span> {movie.tags?.join(', ')}</p>
          </div>
          <div className="mt-4 flex space-x-4">
            <button
              className="flex items-center justify-center p-1 text-red-500 hover:text-red-600 transition-colors duration-200"
              aria-label="Favorite"
              onClick={handleFavoriteToggle}
            >
              {isFavorited ? <MdFavorite size={24} /> : <MdFavoriteBorder size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Main Actors</h2>
        <div className="flex overflow-x-auto space-x-4">
          {movie.mainActors.map((actor) => (
            <Link key={actor.id} to={`/actor/${actor.id}`}>
              <div className="flex-shrink-0 bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer w-32">
                <img className="w-full h-32 object-cover" src={actor.imageUrl} alt={actor.name} />
                <div className="p-2 text-center">
                  <h3 className="font-bold text-sm text-white">{actor.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Supporting Actors</h2>
        <div className="flex overflow-x-auto space-x-4">
          {movie.supportingActors.map((actor) => (
            <Link key={actor.id} to={`/actor/${actor.id}`}>
              <div className="flex-shrink-0 bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer w-32">
                <img className="w-full h-32 object-cover" src={actor.imageUrl} alt={actor.name} />
                <div className="p-2 text-center">
                  <h3 className="font-bold text-sm text-white">{actor.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">User Reviews</h2>
        {!userReview ? (
          <form onSubmit={handleReviewSubmit} className="mb-4 p-4 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Leave a Review</h3>
            <textarea
              className="w-full p-2 rounded-lg bg-gray-700 text-white mb-2"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review here..."
            />
            <div className="flex items-center mb-2">
              <label className="mr-2">Rating:</label>
              <input
                type="number"
                className="p-1 rounded-lg bg-gray-700 text-white"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                min="1"
                max="10"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Submit Review
            </button>
          </form>
        ) : null}

        {movie.reviews.map((review) => (
          <div key={review.id} className="mb-4 p-4 bg-gray-800 rounded-lg shadow-md">
            <p className="font-bold">{review.user.username}</p>
            <p className="text-sm">{review.reviewDate}</p>
            <p className="mt-2">{review.reviewText}</p>
            <div className="flex items-center text-yellow-500 mt-2">
              <MdStar className="text-yellow-500" size={20} />
              <span className="ml-1 text-gray-400">{review.rating}</span>
            </div>
            {userReview?.id === review.id && (
              <button
                className="mt-2 text-red-500 hover:text-red-600 transition-colors duration-200"
                onClick={handleReviewDelete}
              >
                Delete Review
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
