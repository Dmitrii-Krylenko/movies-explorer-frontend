import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';


function Movies({ movies, handleSave, isSave, width, onSearch, searchQwery, LikeMovie, deleteMovie, searchFavMovieId, isLoading, setShort, isShort, getMovies, savedMovies }) {

    // React.useEffect(() => {
    //     getMovies(searchQwery);
    //     savedMovies(searchQwery)
    // }, [searchQwery, isShort]);

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
                        deleteMovie={deleteMovie}
                        LikeMovie={LikeMovie}
                        width={width}
                        isSave={isSave}
                        handleSave={handleSave}
                        movies={movies}
                        searchFavMovieId={searchFavMovieId}
                    />
                ) : (
                    <Preloader />
                )}
            </>
        </section>

    );
}

export default Movies;
