import React from 'react';
import Logo from '../../images/logo.svg';
import './login.css'
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/Validation'

function Login({ onlogin, errText }) {
  const { formValue, handleChange, errors, isValid } = useFormWithValidation();
  const handleSubmit = (e) => {
    e.preventDefault();
    onlogin(formValue)
  }
  return (
    <section className='authorization'>
      <form onSubmit={handleSubmit}>
        <ul className='authorization__login login'>
          <li className='login__header'>
            <a href='/'>
              <img className="logo" src={Logo} alt="логотип" />
            </a>
          </li>
          <li className='login__title'>Рады видеть!</li>
          <li className='login__bock-input bock-input'>
            <p className='bock-input__title'>E-mail</p>
            <input type='email' className='bock-input__input' pattern="[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\.[a-z]{2,}" placeholder='qqq@qaa.ru' name="email" required value={formValue.email || ""} onChange={handleChange} />
            <span className='profile__error'> {errors.email}</span>
          </li>
          <li className='login__bock-input bock-input'>
            <p className='bock-input__title'>Пароль</p>
            <input type='password' className='bock-input__input' placeholder='********' required name="password" value={formValue.password || ""} onChange={handleChange} />
            <span className='profile__error'> {errors.password}</span>
          </li>
        </ul>
        <span className='profile__error'> {errText}</span>
        <button className={`authorization__button ${!isValid ? 'authorization__button_disabled authorization__button:disabled ' : ''}`} type='submit'>Войти</button>
      </form>
      <div className='authorization__links links'>
        <Link className='links__white' to="/signup">Ещё не зарегистрированы?</Link>
        <Link className='links__blue' to="/signup">Регистрация</Link>
      </div>
    </section>
  );
}

export default Login;
