import { getDataConnect, queryRef, executeQuery, mutationRef, executeMutation } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'movie-connector',
  service: 'fdc-quickstart-web',
  location: 'us-central1'
};

export function createMovieRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return mutationRef(dcInstance, 'CreateMovie', inputVars);
}
export function createMovie(dcOrVars, vars) {
  return executeMutation(createMovieRef(dcOrVars, vars));
}
export function addFavoritedMovieRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return mutationRef(dcInstance, 'AddFavoritedMovie', inputVars);
}
export function addFavoritedMovie(dcOrVars, vars) {
  return executeMutation(addFavoritedMovieRef(dcOrVars, vars));
}
export function deleteFavoritedMovieRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return mutationRef(dcInstance, 'DeleteFavoritedMovie', inputVars);
}
export function deleteFavoritedMovie(dcOrVars, vars) {
  return executeMutation(deleteFavoritedMovieRef(dcOrVars, vars));
}
export function addFavoritedActorRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return mutationRef(dcInstance, 'AddFavoritedActor', inputVars);
}
export function addFavoritedActor(dcOrVars, vars) {
  return executeMutation(addFavoritedActorRef(dcOrVars, vars));
}
export function deleteFavoritedActorRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return mutationRef(dcInstance, 'DeleteFavoritedActor', inputVars);
}
export function deleteFavoritedActor(dcOrVars, vars) {
  return executeMutation(deleteFavoritedActorRef(dcOrVars, vars));
}
export function addReviewRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return mutationRef(dcInstance, 'AddReview', inputVars);
}
export function addReview(dcOrVars, vars) {
  return executeMutation(addReviewRef(dcOrVars, vars));
}
export function deleteReviewRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return mutationRef(dcInstance, 'DeleteReview', inputVars);
}
export function deleteReview(dcOrVars, vars) {
  return executeMutation(deleteReviewRef(dcOrVars, vars));
}
export function upsertUserRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return mutationRef(dcInstance, 'UpsertUser', inputVars);
}
export function upsertUser(dcOrVars, vars) {
  return executeMutation(upsertUserRef(dcOrVars, vars));
}
export function updateMovieRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return mutationRef(dcInstance, 'UpdateMovie', inputVars);
}
export function updateMovie(dcOrVars, vars) {
  return executeMutation(updateMovieRef(dcOrVars, vars));
}
export function deleteMovieRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return mutationRef(dcInstance, 'DeleteMovie', inputVars);
}
export function deleteMovie(dcOrVars, vars) {
  return executeMutation(deleteMovieRef(dcOrVars, vars));
}
export function deleteUnpopularMoviesRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return mutationRef(dcInstance, 'DeleteUnpopularMovies', inputVars);
}
export function deleteUnpopularMovies(dcOrVars, vars) {
  return executeMutation(deleteUnpopularMoviesRef(dcOrVars, vars));
}
export function listMoviesRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return queryRef(dcInstance, 'ListMovies', inputVars);
}
export function listMovies(dcOrVars, vars) {
  return executeQuery(listMoviesRef(dcOrVars, vars));
}
export function listMoviesByGenreRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return queryRef(dcInstance, 'ListMoviesByGenre', inputVars);
}
export function listMoviesByGenre(dcOrVars, vars) {
  return executeQuery(listMoviesByGenreRef(dcOrVars, vars));
}
export function getMovieByIdRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return queryRef(dcInstance, 'GetMovieById', inputVars);
}
export function getMovieById(dcOrVars, vars) {
  return executeQuery(getMovieByIdRef(dcOrVars, vars));
}
export function getActorByIdRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return queryRef(dcInstance, 'GetActorById', inputVars);
}
export function getActorById(dcOrVars, vars) {
  return executeQuery(getActorByIdRef(dcOrVars, vars));
}
export function getCurrentUserRef(dc) {
  const { dc: dcInstance} = validateArgs(dc, undefined);
  return queryRef(dcInstance, 'GetCurrentUser');
}
export function getCurrentUser(dc) {
  return executeQuery(getCurrentUserRef(dc));
}
export function getIfFavoritedMovieRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return queryRef(dcInstance, 'GetIfFavoritedMovie', inputVars);
}
export function getIfFavoritedMovie(dcOrVars, vars) {
  return executeQuery(getIfFavoritedMovieRef(dcOrVars, vars));
}
export function getIfFavoritedActorRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return queryRef(dcInstance, 'GetIfFavoritedActor', inputVars);
}
export function getIfFavoritedActor(dcOrVars, vars) {
  return executeQuery(getIfFavoritedActorRef(dcOrVars, vars));
}
export function searchAllRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return queryRef(dcInstance, 'SearchAll', inputVars);
}
export function searchAll(dcOrVars, vars) {
  return executeQuery(searchAllRef(dcOrVars, vars));
}
export function searchMovieDescriptionUsingL2similarityRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return queryRef(dcInstance, 'SearchMovieDescriptionUsingL2Similarity', inputVars);
}
export function searchMovieDescriptionUsingL2similarity(dcOrVars, vars) {
  return executeQuery(searchMovieDescriptionUsingL2similarityRef(dcOrVars, vars));
}
export function listMoviesByPartialTitleRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return queryRef(dcInstance, 'ListMoviesByPartialTitle', inputVars);
}
export function listMoviesByPartialTitle(dcOrVars, vars) {
  return executeQuery(listMoviesByPartialTitleRef(dcOrVars, vars));
}
export function listMoviesByTagRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return queryRef(dcInstance, 'ListMoviesByTag', inputVars);
}
export function listMoviesByTag(dcOrVars, vars) {
  return executeQuery(listMoviesByTagRef(dcOrVars, vars));
}
export function moviesByReleaseYearRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return queryRef(dcInstance, 'MoviesByReleaseYear', inputVars);
}
export function moviesByReleaseYear(dcOrVars, vars) {
  return executeQuery(moviesByReleaseYearRef(dcOrVars, vars));
}
export function searchMovieOrRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return queryRef(dcInstance, 'SearchMovieOr', inputVars);
}
export function searchMovieOr(dcOrVars, vars) {
  return executeQuery(searchMovieOrRef(dcOrVars, vars));
}
export function searchMovieAndRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return queryRef(dcInstance, 'SearchMovieAnd', inputVars);
}
export function searchMovieAnd(dcOrVars, vars) {
  return executeQuery(searchMovieAndRef(dcOrVars, vars));
}
export function getFavoriteActorsRef(dc) {
  const { dc: dcInstance} = validateArgs(dc, undefined);
  return queryRef(dcInstance, 'GetFavoriteActors');
}
export function getFavoriteActors(dc) {
  return executeQuery(getFavoriteActorsRef(dc));
}
export function getUserFavoriteMoviesRef(dc) {
  const { dc: dcInstance} = validateArgs(dc, undefined);
  return queryRef(dcInstance, 'GetUserFavoriteMovies');
}
export function getUserFavoriteMovies(dc) {
  return executeQuery(getUserFavoriteMoviesRef(dc));
}
function validateArgs(dcOrVars, vars, validateVars) {
  let dcInstance;
  let realVars;
  // TODO; Check what happens if this is undefined.
  if(dcOrVars && 'dataConnectOptions' in dcOrVars) {
      dcInstance = dcOrVars;
      realVars = vars;
  } else {
      dcInstance = getDataConnect(connectorConfig);
      realVars = dcOrVars;
  }
  if(!dcInstance || (!realVars && validateVars)) {
      throw new Error('You didn\t pass in the vars!');
  }
  return { dc: dcInstance, vars: realVars };
}