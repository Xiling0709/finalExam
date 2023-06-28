import React from "react";

interface SearchProps {
    value: string;
    onChange: (value: string) => void;
  }
  
  const Search = ({ value, onChange }: SearchProps) => {
    const handleChange = (e: any) => {
      onChange(e.target.value);
    };
  
    return <input type="text" value={value} onChange={handleChange} />;
  };
  

export default Search;