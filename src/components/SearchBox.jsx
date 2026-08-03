import { ImSearch } from "react-icons/im";
import { createQuery } from "./helper/helper";

function SearchBox({ search, setSearch, setQuery }) {
  const ButtonHandler = () => {
    setQuery((query) => createQuery(query, { search }));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
      />
      <button onClick={ButtonHandler}>
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
