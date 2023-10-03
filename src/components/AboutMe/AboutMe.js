import React from 'react';
import './aboutMe.css'

function AboutMe() {
  return (
    <section className='studient'>
      <h2 className='studient__title'>Студент</h2>
      <div className='studient__about'>
        <div className='studient-text'>
          <p className='studient-text__title'>Дмитрий</p>
          <p className='studient-text__subtitle'>Учащийся Яндекс практикум 38 лет</p>
          <p className='studient-text__description'>Я родился, я женился я учился, я снова учусь, тяжко быть студентом в 38, верстка понятнее чем остальное, но скучно. JS сущий ад а реакт, который якобы проще тоже адочек, но я вижу, что в моей голове что то остается, и это радует.</p>
          <button className='studient-text__button' >Github</button>
        </div>
        <div className="studient__photo" ></div>
      </div>
    </section>
  );
}

export default AboutMe;
