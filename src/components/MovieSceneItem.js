import "../styles/MovieSceneItem.scss";

const MovieSceneItem = (props) => {
  const { id, movie, year, full_line, poster } = props.movie;
  return (
    <>
      <li key={id} className="card">
        <img
          className="card__img"
          src={poster}
          alt={`Foto de ${poster}`}
          title={`Foto de ${poster}`}
        />
        <p className="card__title">
          {movie}
          <span className="card__title">{year}</span>
        </p>
        <p className="card__text">{full_line}</p>
      </li>
    </>
  );
};

export default MovieSceneItem;
