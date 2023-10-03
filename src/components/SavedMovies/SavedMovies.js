import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({ movies }) {



    return (
        <section>
            <>
                <SearchForm />
                <MoviesCardList
                    movies={movies} />
            </>
        </section>

    );
}

export default SavedMovies;
