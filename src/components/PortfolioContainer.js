import React from 'react';
import Stock from './Stock';

const PortfolioContainer = ({ portfolio, onClickStock }) => {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map(stock => (
        <Stock key={stock.id} stock={stock} onClick={() => onClickStock(stock)} />
      ))}
    </div>
  );
};

export default PortfolioContainer;

