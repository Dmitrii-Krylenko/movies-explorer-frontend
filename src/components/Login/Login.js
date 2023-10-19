import React from 'react';
import Logo from '../../images/logo.svg';
import './login.css'
import { Link } from 'react-router-dom';


function Login({onlogin, errText}) {
  const [formValue, setFormValue] = React.useState({
    email: '',
    password: ''
  })
  // const navigate = useNavigate();
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    console.log(name, value)
    setFormValue({
      ...formValue,
      [name]: value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onlogin(formValue)
    console.log(formValue)
    // navigate('/', { replace: true });
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
            <input type='email' className='bock-input__input' attern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" placeholder='qqq@qaa.ru' name="email" required value={formValue.email} onChange={handleChange}/>
          </li>
          <li className='login__bock-input bock-input'>
            <p className='bock-input__title'>Пароль</p>
            <input type='password' className='bock-input__input' placeholder='********' required  name="password" value={formValue.password} onChange={handleChange}/>
          </li>
        </ul>
        <span className='error'> {errText}</span>
        <button className='authorization__button'  type='submit'>Войти</button>
      </form>
      {/* <button className='authorization__button' type='button'onSubmit={handleSubmit}>Войти</button> */}
      <div className='authorization__links links'>
        <Link className='links__white' to="/signup">Ещё не зарегистрированы?</Link>
        <Link className='links__blue' to="/signup">Регистрация</Link>
      </div>
    </section>
  );
}

export default Login;
