import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";

function Movies({
  movies,
  handleSave,
  isSave,
  width,
  onSearch,
  searchQwery,
  LikeMovie,
  deleteMovie,
  searchFavMovieID,
  isLoading,
  setShort,
  isShort,
  isNonMovieMessage,
  setNonMovieMessage,
  getMovies,

}) {
  React.useEffect(() => {
    getMovies(searchQwery, isShort);
  }, [searchQwery]);
  return (
    <section>
      <>
        <SearchForm
          setShort={setShort}
          isShort={isShort}
          onSearch={onSearch}
          searchQwery={searchQwery}
        />
        {!isLoading ? (
          <MoviesCardList
            isNonMovieMessage={isNonMovieMessage}
            setNonMovieMessage={setNonMovieMessage}
            deleteMovie={deleteMovie}
            LikeMovie={LikeMovie}
            width={width}
            isSave={isSave}
            handleSave={handleSave}
            movies={movies}
            searchFavMovieID={searchFavMovieID}
          />
        ) : (
          <Preloader />
        )}
      </>
    </section>
  );
}

export default Movies;
