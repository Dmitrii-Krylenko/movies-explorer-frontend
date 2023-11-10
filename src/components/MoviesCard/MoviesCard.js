import React from 'react';
import './moviesCard.css'
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie, LikeMovie, deleteMovie, favId }) {
  const [fav, setFav] = React.useState(!!favId);
  const location = useLocation()
  const time = (i) => {
    let h = 0
    let m = 0
    while (i > 60) {
      h++
      i = i - 60
    }
    m = i
    return [h, m]
  }

  const timeString = (duration) => {
    const t = time(duration)
    return `${t[0]}ч${t[1]}м`;
  }

  function toggleSave() {
    if (fav) {
      deleteMovie(movie)
        .then((response) => {
          setFav(!fav);
        })
    } else {
      LikeMovie(movie)
        .then((response) => {
          setFav(!fav);
        })

    }

  }

  return (
    <section className='movie'>
      <form>
        <img className='movie__image' src={`${movie.thumbnail}`} alt="name" />
        <div className='movie__description description-movie'>
          <h2 className='description-movie__text'>{movie.nameRU}</h2>
          {location.pathname === '/saved-movies' ? (<button type='button' onClick={toggleSave} className='description-movie__button-save-list'  ></button>) : (<button type='button' className={`description-movie__button ${fav && 'description-movie__button-save'}`} onClick={toggleSave}></button>)}
        </div>
        <p className='movie__duration'>{timeString(movie.duration)}</p>
      </form>
    </section>
  );
}

export default MoviesCard;
