import React from 'react';
import * as auth from '../../utils/Auth';
import './logout.css'

function LogOut({ cleanerSerch, setLogin, searchMovies }) {

  function handleExit() {
    auth.logout()
      .then((res) => {
        console.log("logout")
        cleanerSerch()
        setLogin(false)
        localStorage.clear();
        localStorage.removeItem(searchMovies)
      })
      .catch((err) => {
        console.log('logout err')
        console.error(err)

      });
  }
  return (
    <form onSubmit={handleExit} >
      <button className='profile__exit' type='submit'>Выйти из аккаунта</button>
    </form>
  );
}
export default LogOut;