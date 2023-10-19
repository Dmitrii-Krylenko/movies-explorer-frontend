import React from 'react';
import Logo from '../../images/logo.svg';
import '../Login/login.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Register({ onRegister, errText }) {
  const location = useLocation()
  const [formValue, setFormValue] = React.useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    console.log(name, value)

    setFormValue({
      ...formValue,
      [name]: value 
    });
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister(formValue)
  }

  return (
    <section className='authorization'>
      <form onSubmit={handleSubmit} >
        <ul className='authorization__login login'>
          <li className='login__logo'>
            <img className=" logo" src={Logo} alt="логотип" />
          </li>
          <li className='login__title'>Добро пожаловать!</li>
          <li className='login__bock-input bock-input'>
            <p className='bock-input__title'>Имя</p>
            <input type="name" minLength={2} maxLength={40} required className='bock-input__input' placeholder='Дима' value={formValue.name} name="name" onChange={handleChange} />
          </li>
          <li className='login__bock-input bock-input'>
            <p className='bock-input__title'>E-mail</p>
            <input type="email" minLength={2} maxLength={40} required pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" className='bock-input__input' name="email" placeholder='qqq@qaa.ru' value={formValue.email} onChange={handleChange} />
          </li>
          <li className='login__bock-input bock-input'>
            <p className='bock-input__title'>Пароль</p>
            <input type="password" minLength={2} maxLength={200} required className='bock-input__input' value={formValue.password} onChange={handleChange} name="password" ></input>
          </li>
        </ul>
        <span> {errText}</span>
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
