import "../styles/MovieSceneDetail.scss";

const MovieSceneDetail = (props) => {
  const handleBackButton = () => {
    window.history.back();
  };

  const renderNotFoundMovie = () => {
    return (
      <p className="movie-detail__article__error">
        No hemos encontrado esta escena, por favor inténtalo en otro momento.
      </p>
    );
  };

  const renderDetail = () => {
    const { movie, full_line, poster, director, audio } = props.movieDetail;
    return (
      <article className="movie-detail__article">
        <img
          className="movie-detail__article--img"
          alt={`Foto de ${movie}`}
          src={poster}
        />
        <ul className="movie-detail__article--list">
          <li className="movie-detail__article__movie">
            <h4 className="movie-detail__article--title">{movie}</h4>
          </li>
          <li className="movie-detail__article__movie">
            <p className="movie-detail__article__text">{full_line}</p>
          </li>

          <li className="movie-detail__article__movie">
            <p className="movie-detail__article__text">Director: {director}</p>
          </li>

          <li className="movie-detail__article__movie">
            <a
              className="movie-detail__article__link"
              href={audio}
              target="blank"
            >
              Escuchar audio
            </a>
          </li>
        </ul>
      </article>
    );
  };

  return (
    <section className="movie-detail">
      <header className="movie-detail__header">
        <button className="movie-detail__back-btn" onClick={handleBackButton}>
          <span>Volver atrás</span>
        </button>
        <h2 className="movie-detail__header-title">Detalle de la escena</h2>
      </header>
      {props.movieDetail === undefined ? renderNotFoundMovie() : renderDetail()}
    </section>
  );
};

export default MovieSceneDetail;
