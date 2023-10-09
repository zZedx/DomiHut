import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if(!query) return
    navigate(`/order/${query}`);
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search order no."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchOrder;
