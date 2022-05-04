//Styles
import "../styles/App.scss";

import { useEffect, useState } from "react";
// import { Routes, Route } from 'react-router-dom';
// import { matchPath, useLocation } from 'react-router';

//Servicies
import getMovieScene from "../services/getMovieScene";
import localStorage from "../services/localStorage";

//Componentes
import Header from "./Header";

function App() {
  //States

  const [movieScene, setMovieScene] = useState(
    localStorage.get("movieScene", [])
  );

  //Effect

  useEffect(() => {
    if (movieScene.length === 0) {
      getMovieScene().then((data) => {
        // Función que guarda una propiedad y su valor en el local storage
        localStorage.set("movieScene", data);
        //Función para guardar en el estado los datos del fetch
        setMovieScene(data);
      });
    }
  });

  //Function

  return (
    <div className="page">
      <Header />
      <main></main>
    </div>
  );
}

export default App;
