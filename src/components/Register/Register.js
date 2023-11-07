import React from 'react';
import Logo from '../../images/logo.svg';
import '../Login/login.css'
import '../Profile/profile.css'
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/Validation'

function Register({ onRegister, errText }) {
  const { formValue, handleChange, errors, isValid } = useFormWithValidation();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister(formValue)
  }

  return (
    <section className='authorization'>
      <form onSubmit={handleSubmit} noValidate >
        <ul className='authorization__login login'>
          <li className='login__logo'>
            <img className=" logo" src={Logo} alt="логотип" />
          </li>
          <li className='login__title'>Добро пожаловать!</li>
          <li className='login__bock-input bock-input'>
            <p className='bock-input__title'>Имя</p>
            <input type="name" minLength={2} maxLength={40} required className='bock-input__input' placeholder='Дима' value={formValue.name|| ""} name="name" onChange={handleChange} />
            <span className='profile__error'> {errors.name}</span>
          </li>
          <li className='login__bock-input bock-input'>
            <p className='bock-input__title'>E-mail</p>
            <input type="email" minLength={2} maxLength={40} required pattern="[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\.[a-z]{2,}"  className='bock-input__input' name="email" placeholder='qqq@qaa.ru' value={formValue.email|| ""} onChange={handleChange} />
            <span className='profile__error'> {errors.email}</span>
          </li>
          <li className='login__bock-input bock-input'>
            <p className='bock-input__title'>Пароль</p>
            <input type="password" minLength={2} maxLength={200} required className='bock-input__input' value={formValue.password|| ""} onChange={handleChange} name="password" ></input>
            <span className='profile__error'> {errors.password}</span>
          </li>
        </ul>
        <span className='profile__error'> {errText}</span>
        <button className={`authorization__button ${!isValid ? 'authorization__button_disabled authorization__button:disabled ' : ''}`} type='submit'>Зарегистрироваться</button>
        <div className='authorization__links links'>
          <Link className='links__white' to="/signin">Уже зарегистрированы?</Link>
          <Link className='links__blue' to="/signin">Войти</Link>
        </div>
      </form>
    </section>
  );
}

export default Register;
