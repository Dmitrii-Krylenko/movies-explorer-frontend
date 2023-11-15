import React from 'react';
import './searchForm.css'

function SearchForm({ onSearch, searchQwery, setShort, isShort }) {
  const [searchMovies, setSearchMovies] = React.useState(searchQwery);
  function handleValueSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const searchInput = form.querySelector('input');
    onSearch(searchInput.value)
  }
  const hendleShort = () => {
    setShort(!isShort)
  }

  const handleChange = (e) => {
    setSearchMovies(e.target.value);
  }

  return (
    <section className='search'>
      <form className='search__string' onSubmit={handleValueSubmit}>
        <input className='search__input' minLength={1} maxLength={40} placeholder='Фильм' onChange={handleChange} value={searchMovies} ></input>
        <button className='search__button' ></button>
      </form>
      <div className='search__short-film'>
        <form>
          <label className='search__button-short button-short' htmlFor='checkbox'>
            <input className='button-short__input' type='checkbox' id='checkbox' onChange={hendleShort} checked={isShort}></input>
            <span className='button-short__span'>Короткометражки</span>
          </label>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
