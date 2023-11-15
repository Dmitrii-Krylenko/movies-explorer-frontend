import React from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import "../index.css";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "../components/Main/Main";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Profile from "./Profile/Profile";
import NotFound from "./NotFound/NotFound";
import SavedMovies from "./SavedMovies/SavedMovies";
import Movies from "./Movies/Movies";
import MoviesApi from "../utils/MoviesApi";
import api from "../utils/MainApi";
import * as auth from "../utils/Auth";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { adapter } from "../utils/Adapter";
import ProtectedRouteElement from "./ProtectedRoute/ProtectedRoute";
import Preloader from "./Preloader/Preloader";

function App() {
  const moviesApi = new MoviesApi();

  const [errText, setErrText] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [isRenderPage, setIsRenderPage] = React.useState(true);
  const [beatfilmMovies, setBeatfilmMovies] = React.useState([]);

  const [movies, setMovies] = React.useState([]);
  const [width, setWidth] = React.useState(window.innerWidth);

  const [likeMovies, setLikeMovies] = React.useState([]);
  const [favMovieId, setFavMovieId] = React.useState({});

  const [islogin, setLogin] = React.useState(false);
  const [isSave, setSave] = React.useState(true);

  const beforeSearch = window.localStorage.getItem("beforeSearch") || "";
  const [searchMovies, setSearchMovies] = React.useState(beforeSearch);
  const [isShort, setShort] = React.useState(
    localStorage.getItem("short") === "true"
  );
  const [searchMoviesSaved, setSearchMoviesSaved] = React.useState("");
  const [isShortSaved, setShortSaved] = React.useState(false);
  const [successfull, setsuccessfull] = React.useState('');
  const [isNonMovieMessage, setNonMovieMessage] = React.useState('')
  const navigate = useNavigate();
  const location = useLocation()
  React.useEffect(() => {
    setIsLoading(true);

    moviesApi //
      .getMovies()
      .then((rawBeatfilmMovies) => {
        const adaptMovies = rawBeatfilmMovies.map(adapter);
        setBeatfilmMovies(adaptMovies);
        console.log("islogin", islogin)
        if (islogin) {
          checkToken().then(() => {
            api.getMovies().then((m) => {
              setFavMovieId(favMovieID(m, "movieId"));
              setLikeMovies(m);
            });
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });


    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [islogin]); // first load

  React.useEffect(() => {
    console.log('useeff', searchMovies, isShort)
    if (searchMovies || isShort) {
      getMovies(searchMovies, isShort)
    }
  }, [beatfilmMovies])


  const shortMetrMovies = (movies, short) => {
    if (short) {
      return movies.filter((movie) => movie.duration <= 40);
    }
    return movies;
  };

  const favMovieID = (m, movieId) => {
    const objectSave = {};
    m.forEach((item) => {
      objectSave[item[movieId]] = item._id;
    });
    return objectSave;
  };

  const addFavMoveID = (id, _id) => {
    const d = {};
    d[id] = _id;
    setFavMovieId({ ...favMovieId, ...d });
  };

  const removeFavMoveID = (id) => {
    const sm = favMovieId;
    delete sm[id];
    setFavMovieId(sm);
  };

  const searchFavMovieID = (id) => {
    return favMovieId[id];
  };

  React.useEffect(() => {
    getMovies(searchMovies, isShort);
    window.localStorage.setItem("short", isShort);
    window.localStorage.setItem("beforeSearch", searchMovies);
  }, [searchMovies, isShort])

  React.useEffect(() => {
    savedMovies(searchMoviesSaved, isShortSaved);
  }, [searchMoviesSaved, isShortSaved])

  function getMovies(searchQuery, short = false) {

    const lowerSerch = searchQuery.toLowerCase();
    const filterMovies = beatfilmMovies.filter((item) => {
      return (
        item.nameRU.toLowerCase().includes(lowerSerch) ||
        item.nameEN.toLowerCase().includes(lowerSerch)
      );
    });
    const filterShortMovies = shortMetrMovies(filterMovies, isShort);
    setMovies(filterShortMovies);
  }

  function savedMovies(searchQuery, short = false) {
    if (Object.keys(favMovieId).length === 0) return
    const likeMovies = beatfilmMovies.filter((movie) => {
      return searchFavMovieID(movie.movieId);
    });

    const lowerSerch = searchQuery.toLowerCase();
    const filterMovies = likeMovies.filter((item) => {
      return (
        item.nameRU.toLowerCase().includes(lowerSerch) ||
        item.nameEN.toLowerCase().includes(lowerSerch)
      );
    });

    const filterShortMovies = shortMetrMovies(filterMovies, short);
    setLikeMovies(filterShortMovies);
    if (filterShortMovies.length === 0) {
      setNonMovieMessage('По вашему запросу ничего не найдено.')
    }
  }

  function handleLikeMovie(movie) {
    return api
      .createSaveMovies(movie)
      .then((movie) => {
        setLikeMovies([movie, ...likeMovies]);
        addFavMoveID(movie.movieId, movie._id);
        return movie;
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  }

  function handleDeleteMovie(movie) {
    console.log('est', movie)

    const _id = searchFavMovieID(movie.movieId);
    console.log(_id);
    return api
      .deleteMovies(_id)
      .then(() => {
        setLikeMovies(likeMovies.filter((item) => item.movieId !== movie.movieId))
        removeFavMoveID(movie.movieId);
        console.log('udolil', likeMovies.length)
        console.log(likeMovies)
        if (likeMovies.length === 1) {
          if (location.pathname === '/saved-movies')
            setNonMovieMessage('По вашему запросу ничего не найдено.')
        }
        return movie;
      })

      .catch((error) => console.log(`Ошибка: ${error}`));
  }

  const checkToken = () => {
    // setIsRenderPage(false);
    // if (islogin) {}
    return auth
      .getToken()
      .then((user) => {
        if (user) {
          // handleLogin();
          setLogin(true)
          setCurrentUser(user);
        } else {
          setLogin(false);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsRenderPage(false);
      });

  };

  function handleUpdateUser({ name, email }) {
    api
      .editUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data);
        setsuccessfull('Данные успешно изменены');
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  }

  function handleRegister({ password, email, name }) {
    auth
      .register(name, password, email)
      .then((res) => {
        login({ password, email });
      })
      .catch((err) => {
        setErrText(`ошибка ${err.status} ${err.statusText}`);
        console.log(err.status, err.statusText);
      });
  }

  function login({ password, email }) {
    auth
      .login(password, email)
      .then((data) => {
        handleLogin();
        setCurrentUser(data.user);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setErrText(`ошибка ${err.status} ${err.statusText}`);
      });
  }

  const cleanerSerch = () => {
    setSearchMovies(" ");
  };

  const onSearch = (value) => {
    getMovies(value, isShort);
    setSearchMovies(value);
    window.localStorage.setItem("beforeSearch", value);
    if (movies.length === 0) {
      setNonMovieMessage('По вашему запросу ничего не найдено.')
    }
  };

  const onSearchSaved = (value) => {
    savedMovies(value, isShortSaved);
  };

  const handleLogin = () => {
    setLogin(true);
  };

  const handleSave = () => {
    setSave(!isSave);
  };
  React.useEffect(
    () => {
      checkToken();
    }, []
  )
  const isSign =
    window.location.pathname === "/movies" ||
    window.location.pathname === "/saved-movies" ||
    window.location.pathname === "/" ||
    window.location.pathname === "/profile";
  const isSignfooter =
    window.location.pathname === "/movies" ||
    window.location.pathname === "/saved-movies" ||
    window.location.pathname === "/";
  return (
    <>
      {isRenderPage ? (
        <Preloader></Preloader>
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <div className="body">
            {isSign && (
              <Header
                islogin={islogin}
                handleLogin={handleLogin}
                isSignfooter
              />
            )}
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Main />
                  </>
                }
              />
              <Route
                path="/movies"
                element={
                  <>
                    <ProtectedRouteElement islogin={islogin} />{" "}
                    {
                      <>
                        <Movies
                          isNonMovieMessage={isNonMovieMessage}
                          setNonMovieMessage={setNonMovieMessage}
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
                    }
                  </>
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <>
                    <ProtectedRouteElement islogin={islogin} />{" "}
                    {
                      <>
                        <SavedMovies
                          width={width}
                          isNonMovieMessage={isNonMovieMessage}
                          setNonMovieMessage={setNonMovieMessage}
                          savedMovies={savedMovies}
                          getMovies={getMovies}
                          setShort={setShortSaved}
                          isShort={isShortSaved}
                          setSearchMoviesSaved={setSearchMoviesSaved}
                          searchQwery={searchMoviesSaved}
                          LikeMovie={handleLikeMovie}
                          searchFavMovieID={searchFavMovieID}
                          deleteMovie={handleDeleteMovie}
                          onSearch={onSearchSaved}
                          likeMovies={likeMovies}
                        />
                      </>
                    }
                  </>
                }
              />
              <Route
                path="/signin"
                element={
                  <>
                    <Login errText={errText} onlogin={login} />
                  </>
                }
              />
              <Route
                path="/signup"
                element={
                  <>
                    <Register errText={errText} onRegister={handleRegister} />
                  </>
                }
              />
              <Route
                path="/profile"
                element={
                  <>
                    <ProtectedRouteElement islogin={islogin} />{" "}
                    {
                      <>
                        <Profile
                          setsuccessfull={setsuccessfull}
                          successfull={successfull}
                          searchMovies={searchMovies}
                          setLogin={setLogin}
                          cleanerSerch={cleanerSerch}
                          onUpdateUser={handleUpdateUser}
                        />
                      </>
                    }
                  </>
                }
              />
              <Route
                path="/*"
                element={
                  <>
                    <NotFound />
                  </>
                }
              />
            </Routes>
            {isSignfooter && (
              <Footer islogin={islogin} handleLogin={handleLogin} />
            )}
          </div>
        </CurrentUserContext.Provider>
      )}
    </>
  );
}

export default App;
