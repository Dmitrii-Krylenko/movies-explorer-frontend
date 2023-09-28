import React from 'react';
import './aboutMe.css'

function AboutMe() {
  return (
    <div className='studient'>
      <h2 className='studient__title'>Студент</h2>
      <div className='studient__about'>
        <div className='studient__text-block'>
          <p className='studient__text-block_title'>Дмитрий</p>
          <p className='studient__text-block_subtitle'>Учащийся Яндекс практикум 38 лет</p>
          <p className='studient__text-block_description'>Я родился, я женился я учился, я снова учусь, тяжко быть студентом в 38, верстка понятнее чем остальное, но скучно. JS сущий ад а реакт, который якобы проще тоже адочек, но я вижу, что в моей голове что то остается, и это радует.</p>
          <button className='studient__text-block_button' href='*/'>Github</button>
        </div>
        <div className="studient__about_photo" ></div>
      </div>
    </div>
  );
}

export default AboutMe;
