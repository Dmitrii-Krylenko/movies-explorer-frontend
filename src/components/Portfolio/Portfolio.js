import React from 'react';
import './portfolio.css'

function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__list'>
                <li className='portfolio__line ' >
                    <a className='portfolio__links ' target="_blank" href='https://github.com/Dmitrii-Krylenko/how-to-learn.git'>
                        <p className='portfolio__link' >Статичный сайт</p>
                        <p className='portfolio__link' >&#8599;</p>
                    </a>
                </li>
                <li className='portfolio__line ' >
                    <a className='portfolio__links ' target="_blank" href='https://github.com/Dmitrii-Krylenko/russian-travel.git'>
                        <p className='portfolio__link' >Адаптивный сайт</p>
                        <p className='portfolio__link' >&#8599;</p>
                    </a>
                </li>
                <li className='portfolio__line ' >
                    <a className='portfolio__links ' target="_blank" href='https://github.com/Dmitrii-Krylenko/react-mesto-api-full-gha.git'>
                        <p className='portfolio__link' >Одностраничное приложение</p>
                        <p className='portfolio__link' >&#8599;</p>
                    </a>
                </li>
            </ul>

        </section>
    );
}

export default Portfolio;
