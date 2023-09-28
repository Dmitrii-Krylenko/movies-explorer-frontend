import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Header/header.css';
import './burger.css';


function Burger({ isOpenBurger, closeBurger }) {
  const location = useLocation()
  return (
    <section className={`burger ${isOpenBurger && 'burger_oppened'}`}>
      <button className='burger__close' onClick={closeBurger}></button>
      <div className='burger__button'>
        <Link className='burger__button_link' to="/">Главная</Link>
        <Link className='burger__button_link' to="/movies">Фильмы</Link>
        <Link className='burger__button_link' to="/saved-movies">Сохраненные фильмы</Link>


        <div className='burger__button_profile'>
          <Link className='burger__button_link-profile' to="/profile">Аккаунт</Link>
          <Link className={`burger__button_image ${location.pathname === '/' ? 'burger__button_image_blue' : ''}`} to="/saved-movies"></Link>

        </div>
      </div>

    </section>
  );
}

export default Burger;