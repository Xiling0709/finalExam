import React from "react";

interface SearchProps {
    value: string;
    onChange: (value: string) => void;
  }
  
  const Search = ({ value, onChange }: SearchProps) => {
    return (
      <div>
        <label htmlFor="search">Search: </label>
        <input
          id="search"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  };
  
  export default Search;