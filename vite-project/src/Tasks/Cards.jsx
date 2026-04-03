import React from 'react'

function Cards({ name = "hello", color = "gray" }) {
  return (
    <div style={{ backgroundColor: color, padding: "20px" }}>
      <h2>{name}</h2>
    </div>
  );
}


export default Cards;
