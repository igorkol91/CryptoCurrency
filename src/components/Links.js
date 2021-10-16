import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logos from './Logos';
import { loadCrypto } from '../redux/reducers/cryptoReducers';

const Links = () => {
  const state = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  useEffect(() => {
    dispatch(loadCrypto());
  }, []);
  let i = 1;
  let colorBool = true;
  let bgColor = 'light-blue';
  const List = ((state).filter((elem) => {
    if (filter === '') {
      return elem;
    }
    if (elem.name.toString().toLowerCase().includes(filter.toString().toLowerCase())) {
      return elem;
    }
    return '';
  })).map((elem) => {
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
      <Link key={elem.id} to={elem.id} className={`text-decoration-none col-6 home-links ${bgColor}`}>
        <Logos name={elem.name} rank={elem.rank} />
      </Link>
    );
  });

  return (
    <div className="row">
      <div className="col-6 home-links dark-blue d-flex justify-content-center align-items-center">
        <h3 className="home-links-text">TOP 100 Crypto Currencies</h3>
      </div>
      <div className="col-6 home-links light-blue d-flex flex-column justify-content-center">
        <h3 className="text-white">Search by name</h3>
        <input type="text" placeholder="Search..." onChange={(event) => { setFilter(event.target.value); }} />
      </div>
      {List}
    </div>
  );
};

export default Links;
