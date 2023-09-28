import React from 'react';
import './searchForm.css'

function SearchForm() {
  return (
    <div className='search'>
      <div className='search__string'>
        <input className='search__input' placeholder='Фильм'></input>
        <button className='search__button'></button>
      </div>
      <div className='search__short-film'>
        <label className='search__button-short' htmlFor='checkbox'>
          <input className='search__button-short_input' type='checkbox' id='checkbox'></input>
          <span className='search__button-short_span'>Короткометражки</span>
        </label>
        {/* <p className='search__button-short_text'>Короткометражки</p> */}
        {/* <button className='search__short-film_button'></button> */}
        {/* <p className='search__short-film_title'>Короткометражки</p> */}
      </div>
    </div>
  );
}

export default SearchForm;
