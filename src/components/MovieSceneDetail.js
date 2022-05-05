import "../styles/MovieSceneDetail.scss";

const MovieSceneDetail = (props) => {
  console.log(props);

  const { movie, full_line, poster, director, audio } = props.movieDetail;
  return (
    <section className="detail">
      <img className="detail__img" alt={`Foto de ${movie}`} src={poster} />
      <h4 className="detail__title">{movie}</h4>
      <p className="detail__text">{full_line}</p>
      <p className="detail__text">{director}</p>
      <p className="detail__text">{audio}</p>
    </section>
  );
};

export default MovieSceneDetail;
