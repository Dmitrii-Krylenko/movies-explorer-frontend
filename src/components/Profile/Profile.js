import React from 'react';
import './profile.css'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import LogOut from '../LogOut/LogOut';
import { useFormWithValidation } from '../../utils/Validation'

function Profile({ onUpdateUser, cleanerSerch, setLogin, searchMovies }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [successfull, setsuccessfull] = React.useState('');
  const [isShowButton, setShowButton] = React.useState(true);
  const { handleChange, isValid } = useFormWithValidation();
  const previousUser = name === currentUser.name && email === currentUser.email;

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
    handleChange(e)
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    handleChange(e)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      onUpdateUser({
        name: name,
        email: email,
      });
      setShowButton(true)
      setsuccessfull('Данные успешно изменены')
    }
  }

  function handleShowButton(e) {
    e.preventDefault();
    setShowButton((show) => !show);
  }


  React.useEffect(() => {
    ('');
    setsuccessfull('');
  }, []);

  return (
    <section className='profile'>
      <form className='profile__form' onSubmit={handleSubmit} noValidate>
        <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
        <div className='profile__change'>
          <p className='profile__change_title'>Имя</p>
          <input className='profile__change_data' name={"name"} type="text" minLength={2} maxLength={40} placeholder='Виталий' required onChange={handleChangeName} value={name || ""} disabled={isShowButton} />
        </div>
        <div className='profile__change'>
          <p className='profile__change_title'>E-mail</p>
          <input className='profile__change_data' placeholder='qqq@www.ru' name={"email"} type="text" minLength={2} maxLength={40} required onChange={handleChangeEmail} value={email || ""} disabled={isShowButton} />
        </div>
        {isShowButton ? (<div className='profile__error-block'>  <span className='profile__error-messege'>{successfull}</span>   <button className='profile__edit' onClick={handleShowButton} type='button' >Редактировать</button> </div>) : (<button className={`authorization__button ${!isValid || previousUser ? 'authorization__button_disabled authorization__button:disabled ' : ''}`} type='submit'>Сохранить</button>)}
      </form>
      <LogOut
      searchMovies={searchMovies}
        setLogin={setLogin}
        cleanerSerch={cleanerSerch}
      />
    </section>
  );
}

export default Profile;
