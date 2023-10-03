import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm';

function Movies({ movies, handleSave, isSave, width }) {
    return (
        <section>
            <>
                <SearchForm />
                <MoviesCardList
                    width={width}
                    isSave={isSave}
                    handleSave={handleSave}
                    movies={movies} />
            </>
        </section>

    );
}

export default Movies;
