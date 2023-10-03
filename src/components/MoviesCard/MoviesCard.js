import React from 'react';
import './moviesCard.css'
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie }) {
    const [fav, setFav] = React.useState(false);
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
    return (
        <section className='movie'>
            <img className='movie__image' src={`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`} alt="name" />
            <div className='movie__description description-movie'>
                <h2 className='description-movie__text'>{movie.nameRU}</h2>
                {location.pathname === '/saved-movies' ? (<button type='button' className='description-movie__button-save-list'  ></button>) : (<button type='button' className={`description-movie__button ${fav && 'description-movie__button-save'}`} onClick={() => {
                    setFav(!fav)
                }}></button>)}

                {/* <button type='button' className={`movie__description_button ${fav && 'movie__description_button_save'}`}  onClick={()=>{
                // onLike(!fav)
                setFav(!fav)
              }}></button> */}

                {/* {isSave ?( <button type='button' className='movie__description_button'  onClick={handleSave}></button>):(<button type='button' className='movie__description_button movie__description_button_save' onClick={handleSave}></button>)} */}
            </div>
            <p className='movie__duration'>{timeString(movie.duration)}</p>
        </section>
    );
}

export default MoviesCard;
