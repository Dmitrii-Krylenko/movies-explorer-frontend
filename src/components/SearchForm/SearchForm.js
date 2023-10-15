import React from 'react';
import './searchForm.css'


function SearchForm({ onSearch, searchQwery }) {
  // const beforeSearch = window.localStorage.getItem('beforeSearch') || '';
  const [searchMovies, setSearchMovies] = React.useState(searchQwery);


  function handleValueSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const searchInput = form.querySelector('input');
    onSearch(searchInput.value)
    // window.localStorage.setItem('beforeSearch',searchInput.value)
    // console.log(beforeSearch)
  }

  const handleChange = (e) => {
    setSearchMovies(e.target.value);
  }

  return (
    <section className='search'>
      <form className='search__string' onSubmit={handleValueSubmit}>
        <input className='search__input' minLength={1} maxLength={40} required placeholder='Фильм' onChange={handleChange} value={searchMovies} ></input>
        <button className='search__button' ></button>
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
