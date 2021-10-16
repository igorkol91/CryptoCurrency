import { Route } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import InsideInfo from './InsideInfo';

const RoutesAndElements = () => {
  const state = useSelector((state) => state.value);

  const StateList = (state).map((elem) => (
    <Route key={elem.id} path={`/${elem.id}`}>
      <InsideInfo
        name={elem.name}
        symbol={elem.symbol}
        price={elem.price_usd}
        priceBtc={elem.price_btc}
        rank={elem.rank}
        change24={elem.percent_change_24h}
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
