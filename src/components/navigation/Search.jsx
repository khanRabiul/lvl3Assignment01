import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../features/filter/filterSlice";

export default function Search() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const debounce = setTimeout(() => {
      dispatch(setSearchTerm(input));
    }, 500); 

    return () => clearTimeout(debounce); 
  }, [input, dispatch]);

  return (
    <form>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}
