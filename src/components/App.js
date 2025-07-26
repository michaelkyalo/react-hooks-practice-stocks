import React, { useState, useEffect } from 'react';
import StockContainer from './StockContainer';
import PortfolioContainer from './PortfolioContainer';
import SearchBar from './SearchBar';

const App = () => {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    fetch("http://localhost:3000/stocks")
      .then(res => res.json())
      .then(setStocks);
  }, []);

  const buyStock = (stock) => {
    if (!portfolio.includes(stock)) {
      setPortfolio([...portfolio, stock]);
    }
  };

  const sellStock = (stock) => {
    setPortfolio(portfolio.filter(item => item.id !== stock.id));
  };

  const displayedStocks = [...stocks]
    .filter(stock => filterType ? stock.type === filterType : true)
    .sort((a, b) => {
      if (sortBy === "Alphabetically") {
        return a.ticker.localeCompare(b.ticker);
      } else if (sortBy === "Price") {
        return a.price - b.price;
      } else {
        return 0;
      }
    });

  return (
    <div>
      <SearchBar
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterType={filterType}
        setFilterType={setFilterType}
      />
      <div className="row">
        <div className="col">
          <StockContainer stocks={displayedStocks} onClickStock={buyStock} />
        </div>
        <div className="col">
          <PortfolioContainer portfolio={portfolio} onClickStock={sellStock} />
        </div>
      </div>
    </div>
  );
};

export default App;

