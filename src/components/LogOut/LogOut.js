import React from 'react';
import * as auth from '../../utils/Auth';
import './logout.css'

function LogOut({ cleanerSerch, setLogin }) {

  function handleRegister() {
    auth.logout()
      .then((res) => {
        cleanerSerch()
        setLogin(false)
        localStorage.clear();
      })
      .catch((err) => {
        console.log('logout err')
        console.error(err)

      });
  }
  return (
    <form onSubmit={handleRegister} >
      <button className='profile__exit' type='submit'>Выйти из аккаунта</button>
    </form>
  );
}
export default LogOut;