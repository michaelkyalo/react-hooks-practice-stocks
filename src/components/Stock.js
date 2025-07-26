import React from 'react';

const Stock = ({ stock, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-body">
        <h5 className="card-title">{stock.ticker}</h5>
        <p className="card-text">{stock.name}</p>
        <p className="card-text">${stock.price}</p>
      </div>
    </div>
  );
};

export default Stock;

