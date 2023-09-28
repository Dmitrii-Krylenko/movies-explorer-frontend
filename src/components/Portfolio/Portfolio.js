import React from 'react';
import './portfolio.css'

function Portfolio() {
    return (
        <div className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__list'>
                <li className='portfolio__line'>
                    <a className='portfolio__link' href='/*'>Статичный сайт</a>
                    <a className='portfolio__link' href='/*'>&#8599;</a>
                </li>
                <li className='portfolio__line'>
                    <a className='portfolio__link' href='/*'>Адаптивный сайт</a>
                    <a className='portfolio__link' href='/*'>&#8599;</a>
                </li>
                <li className='portfolio__line'>
                    <a className='portfolio__link' href='/*'>Одностраничное приложение</a>
                    <a className='portfolio__link' href='/*'>&#8599;</a>
                </li>
            </ul>

        </div>
    );
}

export default Portfolio;
