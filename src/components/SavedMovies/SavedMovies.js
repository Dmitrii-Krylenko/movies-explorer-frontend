import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({ movies, onSearch }) {



    return (
        <section>
            <>
                <SearchForm 
                onSearch ={onSearch}
                />
                <MoviesCardList
                    movies={movies} />
            </>
        </section>

    );
}

export default SavedMovies;
