import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({ likeMovies, onSearch, deleteMovie, searchFavMovieId, LikeMovie, setShort, isShort, getMovies, savedMovies, searchQwery }) {

    React.useEffect(() => {
        getMovies(searchQwery);
        savedMovies(searchQwery)
    }, [searchQwery, isShort]);

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
                    LikeMovie={LikeMovie}
                    deleteMovie={deleteMovie}
                    movies={likeMovies}
                    searchFavMovieId={searchFavMovieId}
                />
            </>
        </section>

    );
}

export default SavedMovies;
