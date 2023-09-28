import React from 'react';

import './aboutProject.css'

function AboutProject() {
  return (
    <div className='about'>
      <h2 className='about__title'>О проекте</h2>
      <div className='about__project'>
        <p className='about__project_subtitle'>Дипломный проект включал 5 этапов</p>
        <p className='about__project_subtitle'>На выполнение диплома ушло 5 недель</p>
        <p className='about__project_description about__project_description_first'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className='about__project_description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className='about__period'>
        <p className='about__period_first-time'>1 неделя</p>
        <p className='about__period_second-time'>4 недели</p>
        <p className='about__period_description'>Back-end</p>
        <p className='about__period_description'>Front-end</p>
      </div>
    </div>
  );
}

export default AboutProject;
