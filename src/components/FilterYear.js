const FilterYear = (props) => {
  const handleChange = (ev) => {
    props.handleFilterYear(ev.target.value);
  };

  const renderYears = () => {
    return props.years.map((year, index) => {
      return (
        <option key={index} value={year}>
          {year}
        </option>
      );
    });
  };

  return (
    <>
      <label className="form__label" htmlFor="year">
        Year
      </label>
      <select name="year" id="" onChange={handleChange}>
        <option value="">Todos</option>
        {renderYears()}
      </select>
    </>
  );
};

export default FilterYear;
