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
import api from '../utils/MainApi';
import * as auth from '../utils/Auth';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { adapter } from '../utils/Adapter';
import ProtectedRouteElement from './ProtectedRoute/ProtectedRoute';
import Preloader from './Preloader/Preloader';



function App() {
  const moviesApi = new MoviesApi();
  const [movies, setMovies] = React.useState([]);
  const [likeMovies, setLikeMovies] = React.useState([]);
  const [favMovieId, setFavMovieId] = React.useState({});
  const [islogin, setLogin] = React.useState(false);
  const [isSave, setSave] = React.useState(true);
  const [width, setWidth] = React.useState(window.innerWidth);
  const beforeSearch = window.localStorage.getItem('beforeSearch') || '';
  const [searchMovies, setSearchMovies] = React.useState(beforeSearch);
  const [searchMoviesSaved, setSearchMoviesSaved] = React.useState('');
  const [isShort, setShort] = React.useState(JSON.parse(localStorage.getItem('short')) || false);
  const [isShortSaved, setShortSaved] = React.useState(false);
  const [errText, setErrText] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [isRenderPage, setIsRenderPage] = React.useState(true);
  const navigate = useNavigate();

  function shortMetrMovies(movies, short) {
    if (short) {
      return movies.filter((movie) => movie.duration <= 40);
    }
    return movies;
  }

  const favMovieID = (m, movieId) => {
    const objectSave = {}
    m.forEach(item => { objectSave[item[movieId]] = item._id })
    return objectSave
  }

  const addFavMoveID = (id, _id) => {
    const d = {}
    d[id] = _id;
    setFavMovieId({ ...favMovieId, ...d })
  }

  const removeFavMoveID = (id) => {
    const sm = favMovieId;
    delete sm[id];
    setFavMovieId(sm);
  }

  const searchFavMovieID = (id) => {
    return favMovieId[id];
  }

  function getMovies(searchQuery) {
    setIsLoading(true)
    api.getMovies()
      .then((m) => {
        setFavMovieId(favMovieID(m, 'movieId'));
        moviesApi.getMovies()
          .then((movies) => {
            const adaptMovies = movies.map(adapter)
            const lowerSerch = searchQuery.toLowerCase()
            const filterMovies = adaptMovies.filter(function (item) {
              return item.nameRU.toLowerCase().includes(lowerSerch) || item.nameEN.toLowerCase().includes(lowerSerch);

            })
            const filterShortMovies = shortMetrMovies(filterMovies, isShort)
            setMovies(filterShortMovies);
            setIsLoading(false)
            window.localStorage.setItem('beforeSearch', searchQuery)
          }
          )
          .catch((error) => console.log(`Ошибка: ${error})`))
      })

  }

  function savedMovies(searchQuery) {
    api.getMovies()
      .then((likeMovies) => {
        const lowerSerch = searchQuery.toLowerCase()
        const filterMovies = likeMovies.filter(function (item) {
          return item.nameRU.toLowerCase().includes(lowerSerch) || item.nameEN.toLowerCase().includes(lowerSerch);
        })
        const filterShortMovies = shortMetrMovies(filterMovies, isShort)
        setLikeMovies(filterShortMovies);
        // window.localStorage.setItem('beforeSearch', searchQuery)
      }
      )
      .catch((error) => console.log(`Ошибка: ${error})`))
  }

  function handleLikeMovie(movie) {
    return api
      .createSaveMovies(movie)
      .then((movie) => {
        setLikeMovies([movie, ...likeMovies])
        addFavMoveID(movie.movieId, movie._id);
        return movie;
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
  }

  function handleDeleteMovie(movie) {
    return api
      .deleteMovies(searchFavMovieID(movie.movieId))
      .then(() => {
        setLikeMovies((state) => state.filter((item) => item._id !== movie._id))
        removeFavMoveID(movie.movieId);
        return movie;

      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  }

  const checkToken = () => {
    auth.getToken()
      .then((user) => {
        // if (!user) {
        //   return
        // }
        if (user) {
          handleLogin()
          setCurrentUser(user)
        }
        else {
          setLogin(false)
        }
      })
      .catch(
        (err) => {
          console.error(err)
        })
      .finally(() => {
        setIsRenderPage(false)
      })

  }

  React.useEffect(
    () => {
      checkToken();
    }, []
  )

  function handleUpdateUser({ name, email }) {
    api
      .editUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data)
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  }

  function handleRegister({ password, email, name }) {
    auth.register(name, password, email)
      .then((res) => {
        login({ password, email })
        // handleLogin()
        // navigate('/movies', { replace: true });
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
        handleLogin()
        setCurrentUser(data.user);
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        console.log(err)
        setErrText(`ошибка ${err.status} ${err.statusText}`)
      });
  }

  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  const cleanerSerch = () => {
    setSearchMovies(' ')
  }

  const onSearch = (value) => {
    getMovies(value);
    savedMovies(value)
    setSearchMovies(value);
  }

  const handleLogin = () => {
    setLogin(true);
  }

  const handleSave = () => {
    setSave(!isSave);
  }

  const isSign = window.location.pathname === '/movies' || window.location.pathname === '/saved-movies' || window.location.pathname === '/' || window.location.pathname === '/profile';
  const isSignfooter = window.location.pathname === '/movies' || window.location.pathname === '/saved-movies' || window.location.pathname === '/';
  return (
    <>
      {

        isRenderPage ? <Preloader></Preloader>: (
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
                    <ProtectedRouteElement
                      islogin={islogin}
                    /> {
                      <>
                        <Movies
                          savedMovies={savedMovies}
                          getMovies={getMovies}
                          setShort={setShort}
                          isShort={isShort}
                          isLoading={isLoading}
                          deleteMovie={handleDeleteMovie}
                          LikeMovie={handleLikeMovie}
                          searchQwery={searchMovies}
                          onSearch={onSearch}
                          width={width}
                          isSave={isSave}
                          handleSave={handleSave}
                          movies={movies}
                          searchFavMovieID={searchFavMovieID}
                        />
                      </>
                    }</>
                } />
                <Route path='/saved-movies' element={
                  <>
                    <ProtectedRouteElement
                      islogin={islogin}
                    /> {
                      <>
                        <SavedMovies
                          savedMovies={savedMovies}
                          getMovies={getMovies}
                          setShort={setShort}
                          isShort={isShort}
                          searchQwery={searchMovies}
                          LikeMovie={handleLikeMovie}
                          searchFavMovieID={searchFavMovieID}
                          deleteMovie={handleDeleteMovie}
                          onSearch={onSearch}
                          likeMovies={likeMovies} />
                      </>
                    }</>
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
                    <ProtectedRouteElement
                      islogin={islogin}
                    /> {
                      <>
                        <Profile
                          searchMovies={searchMovies}
                          setLogin={setLogin}
                          cleanerSerch={cleanerSerch}
                          onUpdateUser={handleUpdateUser} />
                      </>
                    }</>
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


        )
      }


    </>);
}

export default App;
