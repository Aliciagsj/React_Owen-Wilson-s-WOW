const FilterMovie = (props) => {
  const handleChange = (ev) => {
    props.handleFilterMovie(ev.target.value);
  };

  return (
    <>
      <label className="form__label" htmlFor="movie">
        Movie
      </label>
      <input
        className="form__input"
        type="text"
        name="movie"
        id="movie"
        value={props.filterMovies}
        onChange={handleChange}
      />
    </>
  );
};

export default FilterMovie;
