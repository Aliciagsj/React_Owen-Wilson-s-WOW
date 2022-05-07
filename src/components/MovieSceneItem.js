import "../styles/components/MovieSceneItem.scss";
import { Link } from "react-router-dom";

const MovieSceneItem = (props) => {
  const { id, movie, year, full_line, poster } = props.movie;
  return (
    <>
      <li key={id}>
        <Link className="card" to={`/movie/${id}`}>
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
          <p className="card__text">"{full_line}"</p>
        </Link>
      </li>
    </>
  );
};

export default MovieSceneItem;
