import React from 'react';
import wordImage from '../../images/text__COLOR_landing-logo.png';
import '../Promo/promo.css'


function Promo() {
  return (
    <section className='promo'>
      <div className='promo__text'>
        <h1 className='promo__title'>Учебный проект студента факультета<br /> Веб-разработки.</h1>
        <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      </div>
      <img className='promo__image' src={wordImage} alt='картинка из букв' />
      <a href='#about'><button className='promo__button'    >Узнать больше</button></a>
    </section>
  );
}

export default Promo;
