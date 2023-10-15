import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from '../components/Main/Main';
import Login from './Login/Login';
import Register from './Register/Register';
import Profile from './Profile/Profile';
import NotFound from './NotFound/NotFound';
import SavedMovies from './SavedMovies/SavedMovies';
import '../index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Movies from './Movies/Movies';
import MoviesApi from '../utils/MoviesApi';

function App() {
  const moviesApi = new MoviesApi();
  const [movies, setMovies] = React.useState([]);
  const [islogin, setLogin] = React.useState(true);
  const [isSave, setSave] = React.useState(true);
  const [width, setWidth] = React.useState(window.innerWidth);
  const beforeSearch = window.localStorage.getItem('beforeSearch') || '';
  const [searchMovies, setSearchMovies] = React.useState(beforeSearch);

  function nameTTT(searchQuery) {
    moviesApi.getMovies()
      .then((movies) => {
        // setMovies(movies);
        const filterMovies = movies.filter(function (item) {
          return item.nameRU.includes(searchQuery) || item.nameEN.includes(searchQuery);

        })
        setMovies(filterMovies);
        window.localStorage.setItem('beforeSearch',searchQuery)
      }
      )
      .catch((error) => console.log(`Ошибка: ${error})`))
  }


  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

 
  const onSearch = (value) => {
    nameTTT(value);
    setSearchMovies(value);
  }

  const handleLogin = () => {
    setLogin(!islogin);
  }

  const handleSave = () => {
    setSave(!isSave);
  }

  React.useEffect(() => {
    nameTTT(searchMovies);
  }, [searchMovies]);


  const isSign = window.location.pathname === '/movies' || window.location.pathname === '/saved-movies' || window.location.pathname === '/' || window.location.pathname === '/profile';
  const isSignfooter = window.location.pathname === '/movies' || window.location.pathname === '/saved-movies' || window.location.pathname === '/';

  return (
    <div className='body' >
      {isSign && (<Header
        islogin={islogin}
        handleLogin={handleLogin} isSignfooter
      />)}
      <Routes>

        <Route path='/' element={
          <>
            <Main />
          </>
        } />
        <Route path='/movies' element={
          <>
            <Movies
            searchQwery={searchMovies}
              onSearch={onSearch}
              width={width}
              isSave={isSave}
              handleSave={handleSave}
              movies={movies}
            />
          </>
        } />
        <Route path='/saved-movies' element={
          <>
            <SavedMovies
              onSearch={onSearch}
              movies={movies} />
          </>
        } />
        <Route path='/signin' element={
          <>
            <Login />
          </>
        } />
        <Route path='/signup' element={
          <>
            <Register />
          </>
        } />
        <Route path='/profile' element={
          <>
            <Profile />
          </>
        } />
        <Route path='/*' element={
          <>
            <NotFound />
          </>
        } />
      </Routes>
      {isSignfooter && (<Footer
        islogin={islogin}
        handleLogin={handleLogin}
      />)}
    </div>
  );
}

export default App;
