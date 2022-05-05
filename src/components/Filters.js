import "../styles/Filters.scss";
import FilterMovie from "./FilterMovie";
import FilterYear from "./FilterYear";

const Filters = (props) => {
  return (
    <section className="filter">
      <form action="">
        <FilterMovie />
        <FilterYear />
      </form>
    </section>
  );
};

export default Filters;
