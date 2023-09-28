import React from 'react';
import { useNavigate } from 'react-router-dom';
import './notFound.css'


function NotFound() {
  const domNavigate = useNavigate()

  const goBack = () => { domNavigate(-1) }

  return (
    <section className='notFound'>
      <h1 className="notFound__title">404 </h1>
      <p className="notFound__subtitle" >Страница не найдена</p>
      <button type='button' className='notFound__link' onClick={goBack} >Назад</button>

    </section>
  );
}

export default NotFound;
