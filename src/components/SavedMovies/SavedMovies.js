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
  const [saveSerhQwery, setSaveserchQwery] = React.useState('');

  const onSaveSerch = (searchQuery)=>{
    onSearch(searchQuery);
  }

  React.useEffect(() => {
    savedMovies(searchQwery)
  }, [searchQwery]);

  React.useEffect(() => {
    setShort(false)
    setSearchMoviesSaved('')
    setSaveserchQwery('')
  }, [])

  return (
    <section>
      <>
        <SearchForm
          setShort={setShort}
          isShort={isShort}
          onSearch={onSaveSerch}
          searchQwery={saveSerhQwery}
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
