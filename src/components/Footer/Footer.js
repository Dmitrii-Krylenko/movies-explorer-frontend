import React from 'react';
import './footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__link'>
        <p className="footer__copyright">© 2023 </p>
        <div className='footer__button-box'>
          <a className='footer__button' href="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</a>
          <a className='footer__button' href="https://github.com/" target="_blank">Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
