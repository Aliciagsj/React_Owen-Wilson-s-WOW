import "../styles/MovieSceneItem.scss";
import { Link } from "react-router-dom";

const MovieSceneItem = (props) => {
  const { id, movie, year, full_line, poster } = props.movie;
  return (
    <>
      <Link to={`/movie/${id}`}>
        <li key={id} className="card">
          <img
            className="card__img"
            src={poster}
            alt={`Foto de ${movie}`}
            title={`Foto de ${movie}`}
          />
          <p className="card__title">
            {movie}
            <span className="card__title">{` - ${year}`}</span>
          </p>
          <p className="card__text">{full_line}</p>
        </li>
      </Link>
    </>
  );
};

export default MovieSceneItem;
