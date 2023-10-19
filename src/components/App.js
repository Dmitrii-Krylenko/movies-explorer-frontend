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
import * as auth from '../utils/Auth';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const moviesApi = new MoviesApi();
  const [movies, setMovies] = React.useState([]);
  const [islogin, setLogin] = React.useState(true);
  const [isSave, setSave] = React.useState(true);
  const [width, setWidth] = React.useState(window.innerWidth);
  const beforeSearch = window.localStorage.getItem('beforeSearch') || '';
  const [searchMovies, setSearchMovies] = React.useState(beforeSearch);
  const [errText, setErrText] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const navigate = useNavigate();

  function nameTTT(searchQuery) {
    moviesApi.getMovies()
      .then((movies) => {
        // setMovies(movies);
        const filterMovies = movies.filter(function (item) {
          return item.nameRU.includes(searchQuery) || item.nameEN.includes(searchQuery);

        })
        setMovies(filterMovies);
        window.localStorage.setItem('beforeSearch', searchQuery)
      }
      )
      .catch((error) => console.log(`Ошибка: ${error})`))
  }

  const checkToken = () => {
console.log('call checkToken')
    auth.getToken()
      .then((user) => {
        console.log("sssssss")
        if (!user) {
          return
        }
        console.log("checkToken")
        handleLogin()
        setCurrentUser(user)
        // setLoggedIn(true)
        // setSuccsessful(true)
        // setEmail(user.email)
        // navigate('/')
      })
      .catch(
        (err) => {
          // setSuccsessful(Fail)
          console.error(err)
        })

  }

  React.useEffect(
    () => {
      
      checkToken();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
  )

  function handleUpdateUser({ name, email }) {
    moviesApi
      .editUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data)
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  }

  function handleRegister({ password, email, name }) {
    auth.register(name, password, email)
      .then((res) => {
        navigate('/movies', { replace: true });
        handleLogin()
      })
      .catch((err) => {
        setErrText(`ошибка ${err.status} ${err.statusText}`)
        console.log(err.status, err.statusText
        )

      });
  }

  function login({ password, email }) {
    auth.login(password, email)
      .then((data) => {
        console.log(data.user)
        handleLogin()
        // setEmail(data.user.email);
        setCurrentUser(data.user);
        // setLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        console.log(err)
        setErrText(`ошибка ${err.status} ${err.statusText}`)
      });
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
    setLogin(false);
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
    <CurrentUserContext.Provider value={currentUser}>
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
              <Login
                errText={errText}
                onlogin={login}
              />
            </>
          } />
          <Route path='/signup' element={
            <>
              <Register
                errText={errText}
                onRegister={handleRegister}
              />
            </>
          } />
          <Route path='/profile' element={
            <>
              <Profile
              onUpdateUser={handleUpdateUser} />
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
    </CurrentUserContext.Provider>
  );
}

export default App;
