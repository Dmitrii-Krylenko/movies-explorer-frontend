import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({ likeMovies, onSearch, deleteMovie, searchFavMovieID, LikeMovie, setShort, isShort, getMovies, savedMovies, searchQwery }) {

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
                />
                <MoviesCardList
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
