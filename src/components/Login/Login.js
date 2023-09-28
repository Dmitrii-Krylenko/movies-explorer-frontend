import React from 'react';
import Logo from '../../images/logo.svg';
import './login.css'
import { Link } from 'react-router-dom';


function Login() {

  return (
    <section className='authorization'>
      <ul className='login'>
        <li className='login__logo'>
          <img className="header__logo" src={Logo} alt="логотип" />
        </li>
        <li className='login__title'>Рады видеть!</li>
        <li className='login__bock-input'>
          <p className='login__bock-input_title'>E-mail</p>
          <input type='Email' className='login__bock-input_input' placeholder='qqq@qaa.ru'></input>
        </li>
        <li className='login__bock-input'>
          <p className='login__bock-input_title'>Пароль</p>
          <input className='login__bock-input_input' ></input>
        </li>
      </ul>
      <button className='login__button' type='button'>Войти</button>
      <div className='authorization__links'>
        <Link className='authorization__links_white' to="/signup">Ещё не зарегистрированы?</Link>
        <Link className='authorization__links_blue' to="/signup">Регистрация</Link>
      </div>
    </section>
  );
}

export default Login;
