import React from 'react';
import Logo from '../../images/logo.svg';
import './login.css'
import { Link } from 'react-router-dom';


function Login() {

  return (
    <section className='authorization'>
      <form>
        <ul className='authorization__login login'>
          <li className='login__header'>
            <a href='/'>
              <img className="logo" src={Logo} alt="логотип" />
            </a>
          </li>
          <li className='login__title'>Рады видеть!</li>
          <li className='login__bock-input bock-input'>
            <p className='bock-input__title'>E-mail</p>
            <input type='Email' className='bock-input__input' placeholder='qqq@qaa.ru' required />
          </li>
          <li className='login__bock-input bock-input'>
            <p className='bock-input__title'>Пароль</p>
            <input className='bock-input__input' placeholder='********' required />
          </li>
        </ul>
      </form>
      <button className='authorization__button' type='button'>Войти</button>
      <div className='authorization__links links'>
        <Link className='links__white' to="/signup">Ещё не зарегистрированы?</Link>
        <Link className='links__blue' to="/signup">Регистрация</Link>
      </div>
    </section>
  );
}

export default Login;
