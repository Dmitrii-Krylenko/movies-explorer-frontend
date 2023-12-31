import React from 'react';
import './profile.css'


function Profile() {

    return (
        <section className='profile'>
            <h2 className='profile__title'>Привет, Виталий!</h2>
            <div className='profile__change'>
                <p className='profile__change_title'>Имя</p>
                <input className='profile__change_data' placeholder='Виталий'></input>
            </div>
            <div className='profile__change'>
                <p className='profile__change_title'>E-mail</p>
                <input className='profile__change_data' placeholder='qqq@www.ru'></input>
            </div>
            <button className='profile__edit'>Редактировать</button>
            <button className='profile__exit'>Выйти из аккаунта</button>
        </section>
    );
}

export default Profile;
