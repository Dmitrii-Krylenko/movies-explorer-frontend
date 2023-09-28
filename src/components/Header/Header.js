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
      {islogin ? (<div className='header__block'>

        <img className="header__logo" type='link' onClick={goHome} src={Logo} alt="логотип" />
        <div className="header__button">
          <button className='header__button_registry' href='*/'>Регистрация</button>
          <button className='header__button_entry' onClick={handleLogin} >Войти</button>
        </div>
      </div>) : (<div className='header__block_login'>
        <div className='header__logo_bpx'>
          <img className="header__logo" src={Logo} alt="логотип" />
        </div>
        <div className='header__button_film'>
          <Link className='header__button_link' to="/movies">Фильмы</Link>
          <Link className='header__button_link' to="/saved-movies">Сохраненные фильмы</Link>

        </div>
        <div className='header__button_profile'>
          <Link className='header__button_link' to="/profile">Аккаунт</Link>
          <Link className={`header__button_image ${location.pathname === '/' ? 'header__button_image_blue' : ''}`} to="/saved-movies"></Link>

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
