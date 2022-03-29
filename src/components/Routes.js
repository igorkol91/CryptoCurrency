import { Route } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import InsideInfo from './InsideInfo';
import Header from './header';

const RoutesAndElements = () => {
  const state = useSelector((state) => state.value);
  console.log(state);
  const StateList = (state).map((elem) => (
    <Route key={elem.id} path={`/${elem.id}`}>
      <Header />
      <InsideInfo
        name={elem.name}
        symbol={elem.symbol}
        price={elem.price_usd}
        priceBtc={elem.price_btc}
        rank={elem.rank}
        change24={elem.percent_change_24h}
        supply={elem.tsupply}
      />
    </Route>
  ));

  return (
    <div className="routes">
      {StateList}
    </div>
  );
};

export default RoutesAndElements;
