import React from 'react';
import './profile.css'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function Profile({onUpdateUser}) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);
  
    React.useEffect(() => {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }, [currentUser]);
  
    function handleChangeName(e) {
      setName(e.target.value);
    }
  
    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      onUpdateUser({
        name: name,
        email: email,
      });
    }
    return (
        <section className='profile'>
            <form>
                <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
                <div className='profile__change'>
                    <p className='profile__change_title'>Имя</p>
                    <input className='profile__change_data' name={"name"} type="text" minLength={2} maxLength={40} placeholder='Виталий' required onChange={handleChangeName} value={name || ''}/>
                </div>
                <div className='profile__change'>
                    <p className='profile__change_title'>E-mail</p>
                    <input className='profile__change_data' placeholder='qqq@www.ru' name={"email"} type="text" minLength={2} maxLength={40} required pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" onChange={handleChangeEmail} value={email || ''}/>
                </div>
                <button className='profile__edit' type='submit' onSubmit={handleSubmit}>Редактировать</button>
                <button className='profile__exit'>Выйти из аккаунта</button>
            </form>
        </section>
    );
}

export default Profile;
