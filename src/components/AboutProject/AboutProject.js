import React from 'react';

import './aboutProject.css'

function AboutProject() {
  return (
    <section className='about' id='about'>
      <h2 className='about__title'>О проекте</h2>
      <div className='about__project project'>
        <p className='project__subtitle'>Дипломный проект включал 5 этапов</p>
        <p className='project__subtitle'>На выполнение диплома ушло 5 недель</p>
        <p className='project__description project__description_first'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className='project__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className='about__period period'>
        <p className='period__first-time'>1 неделя</p>
        <p className='period__second-time'>4 недели</p>
        <p className='period__description'>Back-end</p>
        <p className='period__description'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
