import "../styles/MovieSceneList.scss";
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
    <div>
      <p>WOW!!!! no encuentro la pelicula: {filterMovies}.</p>
      <img src={gif} alt="" />
    </div>
  ) : (
    <ul className="list">{renderList}</ul>
  );
};

export default MovieSceneList;
