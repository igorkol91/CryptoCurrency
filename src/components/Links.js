import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import Logos from './Logos';

const Links = () => {
  const state = useSelector((state) => state);
  const List = (state.value).map((elem) => (
    <Link key={elem.id} to={elem.id} className="col-6 home-links dark-blue">
      <Logos name={elem.name} logoUrl={elem.logo_url} />
    </Link>
  ));

  return (
    <div className="row">
      <div className="col-6 home-links dark-blue d-flex justify-content-center align-items-center">
        <h3 className="home-links-text">TOP 100 Crypto Currencies</h3>
      </div>
      <div className="col-6 home-links light-blue">
        <img src="https://image.shutterstock.com/image-vector/world-map-260nw-735333076.jpg" alt="img" className="main-img w-100 h-100" />
      </div>
      {List}
    </div>
  );
};

export default Links;
