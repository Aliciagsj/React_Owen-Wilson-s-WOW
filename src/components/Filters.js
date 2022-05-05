import "../styles/Filters.scss";
import FilterMovie from "./FilterMovie";
import FilterYear from "./FilterYear";

const Filters = (props) => {
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="filter" onSubmit={handleFormSubmit}>
      <FilterMovie handleFilterMovie={props.handleFilterMovie} />

      <FilterYear
        handleFilterYear={props.handleFilterYear}
        years={props.years}
      />
    </form>
  );
};

export default Filters;
