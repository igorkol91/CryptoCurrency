import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import Logos from './Logos';

const Links = () => {
  const state = useSelector((state) => state);
  let i = 1;
  let colorBool = true;
  let bgColor = 'light-blue';
  const List = (state.value).map((elem) => {
    if (i === 2) {
      colorBool = !colorBool;
      if (colorBool) {
        bgColor = 'light-blue';
        i = 0;
      } else {
        bgColor = 'dark-blue';
        i = 0;
      }
    }
    i += 1;
    return (
      <Link key={elem.id} to={elem.id} className={`col-6 home-links ${bgColor}`}>
        <Logos name={elem.name} logoUrl={elem.logo_url} rank={elem.rank} />
      </Link>
    );
  });

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
