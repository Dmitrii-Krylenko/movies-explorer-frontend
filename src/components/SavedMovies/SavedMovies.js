import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({
  likeMovies,
  onSearch,
  deleteMovie,
  searchFavMovieID,
  LikeMovie,
  setShort,
  isShort,
  searchQwery,
  isNonMovieMessage,
  setNonMovieMessage,
  savedMovies,
  width,
  setSearchMoviesSaved
}) {
  React.useEffect(() => {
    savedMovies(searchQwery)
  }, [searchQwery]);

  React.useEffect(() => {
    setShort(false)
    setSearchMoviesSaved('')
  }, [])

  return (
    <section>
      <>
        <SearchForm
          setShort={setShort}
          isShort={isShort}
          onSearch={onSearch}
          searchQwery={searchQwery}
        />
        <MoviesCardList
          width={width}
          isNonMovieMessage={isNonMovieMessage}
          setNonMovieMessage={setNonMovieMessage}
          LikeMovie={LikeMovie}
          deleteMovie={deleteMovie}
          movies={likeMovies}
          searchFavMovieID={searchFavMovieID}
        />
      </>
    </section>
  );
}

export default SavedMovies;
