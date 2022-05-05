const FilterMovie = (props) => {
  const handleChange = (ev) => {
    props.handleFilterMovie(ev.target.value);
  };

  return (
    <>
      <label className="form__label">Movie</label>
      <input
        className="form__input"
        type="text"
        name="movie"
        onChange={handleChange}
        value=""
      />
    </>
  );
};

export default FilterMovie;
