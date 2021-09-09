import React from 'react';

const BoxContent = ({ item }) => {
  const { subtitle, text } = item;

  const styles = {
    gridColumn: item.grid ? item.grid : '1/-1',
  };
  return (
    <ul style={styles}>
      <li>{subtitle}</li>
      {text.map((item) => (
        <li key={item.id}>○ {item.text}</li>
      ))}
    </ul>
  );
};

export default BoxContent;
