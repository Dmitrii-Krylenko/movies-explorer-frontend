import React from 'react';

import './techs.css'

function Techs() {
    return (
        <div className='technologies'>
            <h2 className='technologies__title'>Технологии</h2>
            <div className='technologies__text-block technologies-text'>
                <p className='technologies-text__subtitle'>7 технологий</p>
                <p className='technologies-text__description'>На курсе веб-разработки мы освоили технологии, которые применили<br />  в дипломном проекте.</p>
            </div>
            <div className='technologies__studied studied'>
                <p className='studied__name'>HTML</p>
                <p className='studied__name'>CSS</p>
                <p className='studied__name'>JS</p>
                <p className='studied__name'>React</p>
                <p className='studied__name'>Git</p>
                <p className='studied__name'>Express.js</p>
                <p className='studied__name'>mongoDB</p>
            </div>
        </div>
    );
}

export default Techs;
