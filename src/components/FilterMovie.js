import "../styles/components/FilterMovie.scss";

const FilterMovie = (props) => {
  const handleChange = (ev) => {
    props.handleFilterMovie(ev.target.value);
  };

  return (
    <div className="filters__fieldset">
      <label className="filters__fieldset--label" htmlFor="movie">
        Filtrar por nombre:
      </label>
      <input
        className="filters__fieldset--input"
        type="text"
        name="movie"
        id="movie"
        value={props.filterMovies}
        onChange={handleChange}
      />
    </div>
  );
};

export default FilterMovie;
