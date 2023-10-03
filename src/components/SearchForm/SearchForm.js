import React from 'react';
import './searchForm.css'

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__string'>
        <input className='search__input' placeholder='Фильм' required></input>
        <button className='search__button'></button>
      </form>
      <div className='search__short-film'>
        <label className='search__button-short button-short' htmlFor='checkbox'>
          <input className='button-short__input' type='checkbox' id='checkbox'></input>
          <span className='button-short__span'>Короткометражки</span>
        </label>
        {/* <p className='search__button-short_text'>Короткометражки</p> */}
        {/* <button className='search__short-film_button'></button> */}
        {/* <p className='search__short-film_title'>Короткометражки</p> */}
      </div>
    </section>
  );
}

export default SearchForm;
