import React from 'react';
import Logo from '../../images/logo.svg';
import './header.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Burger from '../burger/Burger';

function Header({ islogin, handleLogin }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [burgerOpen, setIsBurgerOpen] = React.useState(false);
  const isOpenBurger = () => { setIsBurgerOpen(true) }
  const closeBurger = () => { setIsBurgerOpen(false) }
  function goHome() {
    navigate('/')
  }

  return (
    <header className={`header ${location.pathname === '/' ? 'header_blue' : ''}`}>
      {!islogin ? (<div className='header__block'>
        <img className="logo" onClick={goHome} src={Logo} alt="логотип" />
        <div className="header__button">
          <Link className='header__button-registry' to="/signup">Регистрация</Link>
          <Link className='header__button-entry' to="/signin" onClick={handleLogin}>Войти</Link>

        </div>
      </div>) : (<div className='header__block-login'>
        <div className='logo-bpx'>
          <img className="logo" onClick={goHome} src={Logo} alt="логотип" />
        </div>
        <div className='header__button-film button-film'>
          <Link className='button-film__link' to="/movies">Фильмы</Link>
          <Link className='button-film__link' to="/saved-movies">Сохраненные фильмы</Link>

        </div>
        <div className='header__button-profile button-profile button-film'>
          <Link className='button-film__link' to="/profile">Аккаунт</Link>
          <Link className={`button-profile__image ${location.pathname === '/' ? 'button-profile__image_blue' : ''}`} to="/saved-movies"></Link>
        </div>
        <button className='header__burger' onClick={isOpenBurger}></button>

      </div>)}
      <Burger
        isOpenBurger={burgerOpen}
        closeBurger={closeBurger}
      />
    </header>
  );
}

export default Header;
