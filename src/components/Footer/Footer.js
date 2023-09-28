import React from 'react';
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__link'>
        <p className="footer__copyright">© 2023 </p>
        <div className='footer__button-box'>
          <button className='footer__button' href='*/'>Яндекс.Практикум</button>
          <button className='footer__button' href='*/'>Github</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
