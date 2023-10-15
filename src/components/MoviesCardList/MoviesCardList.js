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

  const [count, setCount] = React.useState(IsWindowWidht(width));
  const [moreFlag, setMoreFlag] = React.useState(false);
  const location = useLocation()

  const showMore = () => {
    setCount(count + FRAME);

    if (count + FRAME > movies.length) {
      setMoreFlag(false);
      console.log(count)
      console.log(movies)
    }
  }

  React.useEffect(() => {

    // let start_flag = false;
    // // console.log(IsWindowWidht(width))

    // if (count + FRAME < movies.length) {
    //   start_flag = true;
    //   console.log('start_flag', start_flag)
    // }

    // console.log('start_flag >>', start_flag)

    console.log('moreFlag', moreFlag)

    if (count + FRAME < movies.length) {
      setMoreFlag(true);
      console.log(moreFlag)
    }

  }, [moreFlag, count, movies])

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
