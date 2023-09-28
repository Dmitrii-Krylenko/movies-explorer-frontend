import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({ movies }) {



    return (
        <div>
            <>
                <SearchForm />
                <MoviesCardList
                    movies={movies} />
            </>
        </div>

    );
}

export default SavedMovies;
