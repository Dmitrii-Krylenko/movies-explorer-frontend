import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'
import './moviesCardList.css'
import { useLocation } from 'react-router-dom';

function MoviesCardList({ movies, handleSave, isSave, width, LikeMovie, deleteMovie, searchFavMovieID }) {
  const FRAME = 4;
  const IsWindowWidht = (width) => {
    if (width >= 768) {
      return 16;
    }
    if (width >= 320) {
      return 8
    }
    return 5
  }

  const [count, setCount] = React.useState(IsWindowWidht(width));
  const [moreFlag, setMoreFlag] = React.useState(false);
  const location = useLocation()
  const showMore = () => {
    setCount(count + FRAME);

    if (count + FRAME > movies.length) {
      setMoreFlag(false);
    }
  }

  React.useEffect(() => {
    if (count + FRAME < movies.length) {
      setMoreFlag(true);
    }
  }, [moreFlag, count, movies])

  return (
    <section className='card-list' >
      { movies.length === 0 ? (
        <div >TODO</div>
      ) : (
      <div className='elements'>
        {movies.slice(0, count).map((movie) => (
          <MoviesCard
            deleteMovie={deleteMovie}
            LikeMovie={LikeMovie}
            isSave={isSave}
            handleSave={handleSave}
            key={movie.movieId}
            movie={movie}
            favId={searchFavMovieID(movie.movieId)}
          />
        ))}
      </div>)}
      {moreFlag && (<button type='button' onClick={showMore} className={`card-list__button ${location.pathname === '/saved-movies' ? 'card-list__button_none' : ''}`}>Ещё</button>)}
    </section>
  );
}

export default MoviesCardList;
