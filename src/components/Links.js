import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';

const Links = () => {
  const state = useSelector((state) => state);
  const List = (state.value).map((elem) => (
    <Link key={elem.id} to={elem.id}>
      <div>{elem.id}</div>
    </Link>
  ));

  return (
    <div>
      {List}
    </div>
  );
};

export default Links;
