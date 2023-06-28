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
  const highlightSearchTerm = (text: string, term: string) => {
    text = text.toLowerCase();
    term = term.toLowerCase();
    let parts = text.split(term);
    return (
      <span>
        {parts.map((part, index) => 
          index !== parts.length - 1 ? (
            <span key={index}>
              {part}
              <span style={{ backgroundColor: 'yellow' }}>{term}</span>
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
         <div style={{ display: 'flex', width: '100%' }}>
  <div style={{ width: '100px' }}>{highlightSearchTerm(item.name, query)}</div>
  <div style={{ flex: 1 }}>{highlightSearchTerm(item.description, query)}</div>
</div>


        </div>
      ))}
    </div>
  );
};

export default List;


