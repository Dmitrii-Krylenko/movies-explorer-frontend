import React from 'react';
import Logo from '../../images/logo.svg';
import '../Login/login.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Register() {
  const location = useLocation()
  return (
    <section className='authorization'>
      <form >
        <ul className='authorization__login login'>
          <li className='login__logo'>
            <img className=" logo" src={Logo} alt="логотип" />
          </li>
          <li className='login__title'>Добро пожаловать!</li>
          <li className='login__bock-input bock-input'>
            <p className='bock-input__title'>Имя</p>
            <input type="email" minLength={2} maxLength={40} required className='bock-input__input' placeholder='Дима' />
          </li>
          <li className='login__bock-input bock-input'>
            <p className='bock-input__title'>E-mail</p>
            <input type="email" minLength={2} maxLength={40} required pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" className='bock-input__input' placeholder='qqq@qaa.ru' />
          </li>
          <li className='login__bock-input bock-input'>
            <p className='bock-input__title'>Пароль</p>
            <input type="password" minLength={2} maxLength={200} required className='bock-input__input' ></input>
          </li>
        </ul>
        <button className={`authorization__button ${location.pathname === '/signup' ? 'authorization__button_register' : ''}`} type='submit'>Зарегистрироваться</button>
        <div className='authorization__links links'>
          <Link className='links__white' to="/signin">Уже зарегистрированы?</Link>
          <Link className='links__blue' to="/signin">Войти</Link>
        </div>
      </form>
    </section>
  );
}

export default Register;
