import React from "react";
import Stock from "./Stock";

const StockContainer = ({ stocks, onClickStock }) => {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => (
        <Stock key={stock.id} stock={stock} onClick={() => onClickStock(stock)} />
      ))}
    </div>
  );
};

export default StockContainer;

