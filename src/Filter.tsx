import React, { useState } from 'react';
import Search from './Search';
import List from './List';
import { foods } from './data';

interface MenuItem {
  id: number;
  name: string;
  description: string;
}

const filterData = (data: MenuItem[], query: string) => {
  if (query === '') {
    return data;
  } else {
    return data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
  }
};

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const filteredData = filterData(foods, searchTerm);

  return (
    <div>
      <Search value={searchTerm} onChange={handleSearchChange} />
      <List data={filteredData} query={searchTerm} />
    </div>
  );
};

export default Filter;
