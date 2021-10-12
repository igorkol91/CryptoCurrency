import { Route } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';

const RoutesAndElements = () => {
  const state = useSelector((state) => state);

  const StateList = (state.value).map((elem) => (
    <Route key={elem.id} path={`/${elem.id}`}>
      <div>{elem.id}</div>
    </Route>
  ));

  return (
    <div>
      {StateList}
    </div>
  );
};

export default RoutesAndElements;
