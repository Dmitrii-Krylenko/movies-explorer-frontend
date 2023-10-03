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
      <div className='burger__button burger-button'>
        <Link className='burger-button__link' to="/">Главная</Link>
        <Link className='burger-button__link' to="/movies">Фильмы</Link>
        <Link className='burger-button__link' to="/saved-movies">Сохраненные фильмы</Link>


        <div className='burger__button-profile'>
          <Link className='burger-button__link-profile' to="/profile">Аккаунт</Link>
          {/* <Link className={`burger-button__image ${location.pathname === '/' ? 'bburger-button__image_blue' : ''}`} to="/saved-movies"></Link> */}
          <Link className='burger-button__image' to="/saved-movies" ></Link>

        </div>
      </div>

    </section>
  );
}

export default Burger;