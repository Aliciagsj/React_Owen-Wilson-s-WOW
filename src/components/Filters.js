import "../styles/components/Filters.scss";
import FilterMovie from "./FilterMovie";
import FilterYear from "./FilterYear";

const Filters = (props) => {
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form className="filters" onSubmit={handleFormSubmit}>
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
    </section>
  );
};

export default Filters;
