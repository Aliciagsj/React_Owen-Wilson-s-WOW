import "../styles/components/MovieSceneList.scss";
import MovieSceneItem from "./MovieSceneItem";
import gif from "../images/tenor.gif";

const MovieSceneList = (props) => {
  const { moviesList } = props;
  const { filterMovies } = props;

  const renderList = moviesList.map((movieItem, index) => {
    return (
      <MovieSceneItem className="movies__list" key={index} movie={movieItem} />
    );
  });

  return renderList.length === 0 ? (
    <section className="error">
      <img className="error__img" src={gif} alt="" />
      <p className="error__text">
        WOW!!!! no encuentro la pelicula: {filterMovies}.
      </p>
    </section>
  ) : (
    <section className="list">
      <ul className="list">{renderList}</ul>
    </section>
  );
};

export default MovieSceneList;
