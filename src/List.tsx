import React from 'react';

interface ItemProps {
  items: { name: string; age: number }[];
}

const List = ({ items }: ItemProps) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          <span>{item.name}</span>
          <span>{item.age}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
