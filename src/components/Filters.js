import "../styles/Filters.scss";
import FilterMovie from "./FilterMovie";
import FilterYear from "./FilterYear";

const Filters = (props) => {
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="filter" onSubmit={handleFormSubmit}>
      <FilterMovie
        handleFilterMovie={props.handleFilterMovie}
        filterMovies={props.filterMovies}
      />

      <FilterYear
        handleFilterYear={props.handleFilterYear}
        years={props.years}
        year={props.year}
      />
    </form>
  );
};

export default Filters;
