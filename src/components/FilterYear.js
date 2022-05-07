import "../styles/components/FilterYear.scss";

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
    <div className="filters__fieldset">
      <label className="filters__fieldset--label" htmlFor="year">
        Filtrar por año:
      </label>
      <select
        className="filters__fieldset--select"
        name="year"
        id="year"
        value={props.year}
        onChange={handleChange}
      >
        <option value="">Todos</option>
        {renderYears()}
      </select>
    </div>
  );
};

export default FilterYear;
