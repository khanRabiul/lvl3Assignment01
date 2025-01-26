import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../features/filter/filterSlice";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // add debounce for search also redirect to home-page to show search results 
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (input.trim() !== "") {
        dispatch(setSearchTerm(input));
        navigate("/"); 
      }
    }, 500); 

    return () => clearTimeout(debounce); 
  }, [input, dispatch, navigate]); // dependency: change input field, call dispatch and navigate to home

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
