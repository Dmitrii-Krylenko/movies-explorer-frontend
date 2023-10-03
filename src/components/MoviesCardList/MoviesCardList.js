import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'
import './moviesCardList.css'
import { useLocation } from 'react-router-dom';

function MoviesCardList({ movies, handleSave, isSave, width }) {
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
  // console.log(IsWindowWidht(width))
  const [count, setCount] = React.useState(IsWindowWidht(width));
  const [moreFlag, setMoreFlag] = React.useState(true);
  const location = useLocation()

  const showMore = () => {
    setCount(count + FRAME);

    if (count + FRAME > movies.length) {
      setMoreFlag(false);
    }

  }
  return (
    <section className='card-list' >
      <div className='elements'>

        {movies.slice(0, count).map((movie) => (
          <MoviesCard
            isSave={isSave}
            handleSave={handleSave}
            key={movie.id}
            movie={movie}
          />
        ))}

      </div>
      {moreFlag && (<button type='button' onClick={showMore} className={`card-list__button ${location.pathname === '/saved-movies' ? 'card-list__button_none' : ''}`}>Ещё</button>)}
    </section>

  );
}

export default MoviesCardList;
