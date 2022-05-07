import "../styles/components/MovieSceneDetail.scss";
import "../styles/components/Btn.scss";

const MovieSceneDetail = (props) => {
  const handleBackButton = () => {
    window.history.back();
  };

  const renderNotFoundMovie = () => {
    return (
      <p className="movie-detail__error">
        Esta escena no existe, vuelve al listado.
      </p>
    );
  };

  const renderDetail = () => {
    const { movie, full_line, poster, director, audio } = props.movieDetail;
    return (
      <article className="movie-detail__card">
        <img
          className="movie-detail__card--img"
          alt={`Foto de ${movie}`}
          src={poster}
        />
        <ul className="movie-detail__card--list">
          <li className="movie-detail__card--title">
            <h4>{movie}</h4>
          </li>
          <li className="movie-detail__card--text">
            <p className="movie-detail__card--wow">{full_line}</p>
          </li>

          <li className="movie-detail__card--text">
            <p>Director: {director}</p>
          </li>

          <li className="movie-detail__card--link">
            <a
              href={audio}
              target="blank"
              className="movie-detail__card--icons"
            >
              <i class="fas fa-play-circle play"></i>
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
        <button className="btn" onClick={handleBackButton}>
          Volver atrás
        </button>
      </header>
      {props.movieDetail === undefined ? renderNotFoundMovie() : renderDetail()}
    </section>
  );
};

export default MovieSceneDetail;
