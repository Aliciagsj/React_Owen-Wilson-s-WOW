import "../styles/MovieSceneList.scss";
import MovieSceneItem from "./MovieSceneItem";

const MovieSceneList = (props) => {
  const { moviesList } = props;

  const renderList = moviesList.map((movieItem, index) => {
    return (
      <MovieSceneItem className="movies__list" key={index} movie={movieItem} />
    );
  });

  return <ul className="list">{renderList}</ul>;
};

export default MovieSceneList;
