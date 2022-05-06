//Styles
import "../styles/App.scss";

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { matchPath, useLocation } from "react-router";

//Servicies
import getMovies from "../services/getMovies";
import localStorage from "../services/localStorage";

//Componentes
import Header from "./Header";
import Filters from "./Filters";
import MovieSceneList from "./MovieSceneList";
import MovieSceneDetail from "./MovieSceneDetail";
import NotFound from "./NotFound";

function App() {
  //States

  const [movies, setMovies] = useState(localStorage.get("movies", []));

  const [filterMovies, setFilterMovies] = useState("");

  const [filterYear, setFilterYear] = useState("");

  //Effect

  useEffect(() => {
    if (movies.length === 0) {
      getMovies().then((data) => {
        // Función que guarda una propiedad y su valor en el local storage
        localStorage.set("movies", data);
        //Función para guardar en el estado los datos del fetch
        setMovies(data);
      });
    }
  });

  //Filtro Movie

  const handleFilterMovie = (value) => {
    setFilterMovies(value);
  };

  const handleFilterYear = (value) => {
    setFilterYear(value);
  };

  const moviesFilters = movies
    .filter((movie) => {
      return filterMovies === ""
        ? true
        : movie.movie.toLowerCase().includes(filterMovies.toLowerCase());
    })
    .filter((movie) => {
      return filterYear === "" ? true : movie.year === parseInt(filterYear);
    });

  const getYears = () => {
    const movieYear = movies.map((movie) => movie.year);

    const uniqueYear = movieYear.sort().filter((year, index) => {
      return movieYear.indexOf(year) === index;
    });
    return uniqueYear;
  };

  const { pathname } = useLocation();
  const dataPath = matchPath("/movie/:movieId", pathname);

  const movieId = dataPath !== null ? dataPath.params.movieId : null;
  const movieFound = movies.find((item) => item.id === parseInt(movieId));

  return (
    <div className="page">
      <Header />
      <main>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Filters
                  handleFilterMovie={handleFilterMovie}
                  handleFilterYear={handleFilterYear}
                  years={getYears()}
                  filterMovies={filterMovies}
                  year={filterYear}
                />
                <MovieSceneList
                  moviesList={moviesFilters}
                  filterMovies={filterMovies}
                />
              </>
            }
          />

          <Route
            path="/movie/:movieId"
            element={<MovieSceneDetail movieDetail={movieFound} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
