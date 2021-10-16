import { Route } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import InsideInfo from './InsideInfo';

const RoutesAndElements = () => {
  const state = useSelector((state) => state);

  const StateList = (state).map((elem) => (
    <Route key={elem.id} path={`/${elem.id}`}>
      <InsideInfo
        name={elem.name}
        supply={elem.circulating_supply}
        logoUrl={elem.logo_url}
        price={elem.price}
        rank={elem.rank}
        status={elem.status}
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
