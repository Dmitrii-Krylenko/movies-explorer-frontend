import React from 'react';

import './techs.css'

function Techs() {
    return (
        <div className='technologies'>
            <h2 className='technologies__title'>Технологии</h2>
            <div className='technologies__text-block'>
                <p className='technologies__text-block_subtitle'>7 технологий</p>
                <p className='technologies__text-block_description'>На курсе веб-разработки мы освоили технологии, которые применили<br />  в дипломном проекте.</p>
            </div>
            <div className='technologies__studied'>
                <p className='technologies__studied_name'>HTML</p>
                <p className='technologies__studied_name'>CSS</p>
                <p className='technologies__studied_name'>JS</p>
                <p className='technologies__studied_name'>React</p>
                <p className='technologies__studied_name'>Git</p>
                <p className='technologies__studied_name'>Express.js</p>
                <p className='technologies__studied_name'>mongoDB</p>
            </div>
        </div>
    );
}

export default Techs;
