import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm';

function Movies({ movies, handleSave, isSave, width }) {
    return (
        <div>
            <>
                <SearchForm />
                <MoviesCardList
                    width={width}
                    isSave={isSave}
                    handleSave={handleSave}
                    movies={movies} />
            </>
        </div>

    );
}

export default Movies;
