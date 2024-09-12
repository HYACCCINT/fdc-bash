const { getDataConnect, queryRef, executeQuery, mutationRef, executeMutation } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'movie-connector',
  service: 'fdc-quickstart-web',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

function createMovieRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return mutationRef(dcInstance, 'CreateMovie', inputVars);
}
exports.createMovieRef = createMovieRef;
exports.createMovie = function createMovie(dcOrVars, vars) {
  return executeMutation(createMovieRef(dcOrVars, vars));
};

function addFavoritedMovieRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return mutationRef(dcInstance, 'AddFavoritedMovie', inputVars);
}
exports.addFavoritedMovieRef = addFavoritedMovieRef;
exports.addFavoritedMovie = function addFavoritedMovie(dcOrVars, vars) {
  return executeMutation(addFavoritedMovieRef(dcOrVars, vars));
};

function deleteFavoritedMovieRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return mutationRef(dcInstance, 'DeleteFavoritedMovie', inputVars);
}
exports.deleteFavoritedMovieRef = deleteFavoritedMovieRef;
exports.deleteFavoritedMovie = function deleteFavoritedMovie(dcOrVars, vars) {
  return executeMutation(deleteFavoritedMovieRef(dcOrVars, vars));
};

function addFavoritedActorRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return mutationRef(dcInstance, 'AddFavoritedActor', inputVars);
}
exports.addFavoritedActorRef = addFavoritedActorRef;
exports.addFavoritedActor = function addFavoritedActor(dcOrVars, vars) {
  return executeMutation(addFavoritedActorRef(dcOrVars, vars));
};

function deleteFavoritedActorRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return mutationRef(dcInstance, 'DeleteFavoritedActor', inputVars);
}
exports.deleteFavoritedActorRef = deleteFavoritedActorRef;
exports.deleteFavoritedActor = function deleteFavoritedActor(dcOrVars, vars) {
  return executeMutation(deleteFavoritedActorRef(dcOrVars, vars));
};

function addReviewRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return mutationRef(dcInstance, 'AddReview', inputVars);
}
exports.addReviewRef = addReviewRef;
exports.addReview = function addReview(dcOrVars, vars) {
  return executeMutation(addReviewRef(dcOrVars, vars));
};

function deleteReviewRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return mutationRef(dcInstance, 'DeleteReview', inputVars);
}
exports.deleteReviewRef = deleteReviewRef;
exports.deleteReview = function deleteReview(dcOrVars, vars) {
  return executeMutation(deleteReviewRef(dcOrVars, vars));
};

function upsertUserRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return mutationRef(dcInstance, 'UpsertUser', inputVars);
}
exports.upsertUserRef = upsertUserRef;
exports.upsertUser = function upsertUser(dcOrVars, vars) {
  return executeMutation(upsertUserRef(dcOrVars, vars));
};

function updateMovieRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return mutationRef(dcInstance, 'UpdateMovie', inputVars);
}
exports.updateMovieRef = updateMovieRef;
exports.updateMovie = function updateMovie(dcOrVars, vars) {
  return executeMutation(updateMovieRef(dcOrVars, vars));
};

function deleteMovieRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return mutationRef(dcInstance, 'DeleteMovie', inputVars);
}
exports.deleteMovieRef = deleteMovieRef;
exports.deleteMovie = function deleteMovie(dcOrVars, vars) {
  return executeMutation(deleteMovieRef(dcOrVars, vars));
};

function deleteUnpopularMoviesRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return mutationRef(dcInstance, 'DeleteUnpopularMovies', inputVars);
}
exports.deleteUnpopularMoviesRef = deleteUnpopularMoviesRef;
exports.deleteUnpopularMovies = function deleteUnpopularMovies(dcOrVars, vars) {
  return executeMutation(deleteUnpopularMoviesRef(dcOrVars, vars));
};

function listMoviesRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return queryRef(dcInstance, 'ListMovies', inputVars);
}
exports.listMoviesRef = listMoviesRef;
exports.listMovies = function listMovies(dcOrVars, vars) {
  return executeQuery(listMoviesRef(dcOrVars, vars));
};

function listMoviesByGenreRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return queryRef(dcInstance, 'ListMoviesByGenre', inputVars);
}
exports.listMoviesByGenreRef = listMoviesByGenreRef;
exports.listMoviesByGenre = function listMoviesByGenre(dcOrVars, vars) {
  return executeQuery(listMoviesByGenreRef(dcOrVars, vars));
};

function getMovieByIdRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return queryRef(dcInstance, 'GetMovieById', inputVars);
}
exports.getMovieByIdRef = getMovieByIdRef;
exports.getMovieById = function getMovieById(dcOrVars, vars) {
  return executeQuery(getMovieByIdRef(dcOrVars, vars));
};

function getActorByIdRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return queryRef(dcInstance, 'GetActorById', inputVars);
}
exports.getActorByIdRef = getActorByIdRef;
exports.getActorById = function getActorById(dcOrVars, vars) {
  return executeQuery(getActorByIdRef(dcOrVars, vars));
};

function getCurrentUserRef(dc) {
  const { dc: dcInstance} = validateArgs(dc, undefined);
  return queryRef(dcInstance, 'GetCurrentUser');
}
exports.getCurrentUserRef = getCurrentUserRef;
exports.getCurrentUser = function getCurrentUser(dc) {
  return executeQuery(getCurrentUserRef(dc));
};

function getIfFavoritedMovieRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return queryRef(dcInstance, 'GetIfFavoritedMovie', inputVars);
}
exports.getIfFavoritedMovieRef = getIfFavoritedMovieRef;
exports.getIfFavoritedMovie = function getIfFavoritedMovie(dcOrVars, vars) {
  return executeQuery(getIfFavoritedMovieRef(dcOrVars, vars));
};

function getIfFavoritedActorRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return queryRef(dcInstance, 'GetIfFavoritedActor', inputVars);
}
exports.getIfFavoritedActorRef = getIfFavoritedActorRef;
exports.getIfFavoritedActor = function getIfFavoritedActor(dcOrVars, vars) {
  return executeQuery(getIfFavoritedActorRef(dcOrVars, vars));
};

function searchAllRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return queryRef(dcInstance, 'SearchAll', inputVars);
}
exports.searchAllRef = searchAllRef;
exports.searchAll = function searchAll(dcOrVars, vars) {
  return executeQuery(searchAllRef(dcOrVars, vars));
};

function searchMovieDescriptionUsingL2similarityRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return queryRef(dcInstance, 'SearchMovieDescriptionUsingL2Similarity', inputVars);
}
exports.searchMovieDescriptionUsingL2similarityRef = searchMovieDescriptionUsingL2similarityRef;
exports.searchMovieDescriptionUsingL2similarity = function searchMovieDescriptionUsingL2similarity(dcOrVars, vars) {
  return executeQuery(searchMovieDescriptionUsingL2similarityRef(dcOrVars, vars));
};

function listMoviesByPartialTitleRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return queryRef(dcInstance, 'ListMoviesByPartialTitle', inputVars);
}
exports.listMoviesByPartialTitleRef = listMoviesByPartialTitleRef;
exports.listMoviesByPartialTitle = function listMoviesByPartialTitle(dcOrVars, vars) {
  return executeQuery(listMoviesByPartialTitleRef(dcOrVars, vars));
};

function listMoviesByTagRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars, true);
  return queryRef(dcInstance, 'ListMoviesByTag', inputVars);
}
exports.listMoviesByTagRef = listMoviesByTagRef;
exports.listMoviesByTag = function listMoviesByTag(dcOrVars, vars) {
  return executeQuery(listMoviesByTagRef(dcOrVars, vars));
};

function moviesByReleaseYearRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return queryRef(dcInstance, 'MoviesByReleaseYear', inputVars);
}
exports.moviesByReleaseYearRef = moviesByReleaseYearRef;
exports.moviesByReleaseYear = function moviesByReleaseYear(dcOrVars, vars) {
  return executeQuery(moviesByReleaseYearRef(dcOrVars, vars));
};

function searchMovieOrRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return queryRef(dcInstance, 'SearchMovieOr', inputVars);
}
exports.searchMovieOrRef = searchMovieOrRef;
exports.searchMovieOr = function searchMovieOr(dcOrVars, vars) {
  return executeQuery(searchMovieOrRef(dcOrVars, vars));
};

function searchMovieAndRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return queryRef(dcInstance, 'SearchMovieAnd', inputVars);
}
exports.searchMovieAndRef = searchMovieAndRef;
exports.searchMovieAnd = function searchMovieAnd(dcOrVars, vars) {
  return executeQuery(searchMovieAndRef(dcOrVars, vars));
};

function getFavoriteActorsRef(dc) {
  const { dc: dcInstance} = validateArgs(dc, undefined);
  return queryRef(dcInstance, 'GetFavoriteActors');
}
exports.getFavoriteActorsRef = getFavoriteActorsRef;
exports.getFavoriteActors = function getFavoriteActors(dc) {
  return executeQuery(getFavoriteActorsRef(dc));
};

function getUserFavoriteMoviesRef(dc) {
  const { dc: dcInstance} = validateArgs(dc, undefined);
  return queryRef(dcInstance, 'GetUserFavoriteMovies');
}
exports.getUserFavoriteMoviesRef = getUserFavoriteMoviesRef;
exports.getUserFavoriteMovies = function getUserFavoriteMovies(dc) {
  return executeQuery(getUserFavoriteMoviesRef(dc));
};

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