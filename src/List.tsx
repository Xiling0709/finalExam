import React from 'react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
}

interface ListProps {
  data: MenuItem[];
  query: string;
}

const List = ({ data, query }: ListProps) => {
  const highlightSearchTerm = (item: string, term: string) => {
    const parts = item.split(new RegExp(`(${term})`, 'gi'));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === term.toLowerCase() ? (
            <span key={index} style={{ backgroundColor: 'yellow' }}>
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };
  

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>
            {highlightSearchTerm(item.name, query)} - {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default List;
