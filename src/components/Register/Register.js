import React from 'react';
import Logo from '../../images/logo.svg';
import '../Login/login.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Register() {
  const location = useLocation()
  return (
    <section className='authorization'>
      <form todo="action+method; fieldset">
        <ul className='login'>
          <li className='login__logo'>
            <img className="header__logo" src={Logo} alt="логотип" />
          </li>
          <li className='login__title'>Добро пожаловать!</li>
          <li className='login__bock-input'>
            <p className='login__bock-input_title'>Имя</p>
            <input type="email" minLength={2} maxLength={40} required className='login__bock-input_input' placeholder='Дима'></input>
          </li>
          <li className='login__bock-input'>
            <p className='login__bock-input_title'>E-mail</p>
            <input type="email" minLength={2} maxLength={40} required pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" className='login__bock-input_input' placeholder='qqq@qaa.ru' />
          </li>
          <li className='login__bock-input'>
            <p className='login__bock-input_title'>Пароль</p>
            <input type="password" minLength={2} maxLength={200} required className='login__bock-input_input' ></input>
          </li>
        </ul>
        <button className={`login__button ${location.pathname === '/signup' ? 'login__button_register' : ''}`} type='submit'>Зарегистрироваться</button>
        <div className='authorization__links'>
          <Link className='authorization__links_white' to="/signin">Уже зарегистрированы?</Link>
          <Link className='authorization__links_blue' to="/signin">Войти</Link>
        </div>
      </form>
    </section>
  );
}

export default Register;
