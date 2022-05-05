const FilterYear = (props) => {
  const handleChange = (ev) => {
    props.handleFilterYear(ev.target.value);
  };

  return (
    <>
      <label htmlFor="">Year</label>
      <select name="" id="" onChange={handleChange}>
        <option value="">Seleccione</option>
      </select>
    </>
  );
};

export default FilterYear;
