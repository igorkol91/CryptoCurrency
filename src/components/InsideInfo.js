import React from 'react';
import { PropTypes } from 'prop-types';
import BackButton from './BackButton';
import image from '../image.png';

const InsideInfo = ({
  name, price, symbol, priceBtc, rank, change24,
}) => (

  <div className="dark-blue d-flex flex-column align-items-center">
    <BackButton />
    <img src={image} alt="img" className="h-25 w-25 d-block my-2 px-3" />
    <h1 className="text-white">{name}</h1>
    <span className="d-flex justify-content-between w-100 px-3">
      <h2 className="text-white">Rank:</h2>
      {' '}
      <h2 className="text-white">
        <b>
          {' '}
          {rank}
        </b>
        {' '}
      </h2>
    </span>
    <span className="d-flex justify-content-between w-100 px-3">
      <h4 className="text-white">Price: </h4>
      {' '}
      <h4 className="text-white">
        <b>
          {' '}
          {price}
        </b>
        {' '}
      </h4>
    </span>
    <span className="d-flex justify-content-between w-100 px-3">
      <h5 className="text-white">Price in BTC:</h5>
      {' '}
      <h5 className="text-white">{priceBtc}</h5>
    </span>
    <div className="text-white d-flex justify-content-between w-100 px-3">
      Change in 24 hours:
      {' '}
      <b>
        {change24}
      </b>
      {' '}
    </div>

    <div className="text-white d-flex justify-content-between w-100 px-3">
      Symbol:
      {' '}
      <b>
        {symbol}
      </b>
      {' '}
    </div>

    <div className="text-white d-flex justify-content-between w-100 px-3">
      Change in 24 hours:
      {' '}
      <b>
        {change24}
      </b>
      {' '}
    </div>
  </div>
);

InsideInfo.propTypes = {
  price: PropTypes.string.isRequired,
  priceBtc: PropTypes.string.isRequired,
  change24: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default InsideInfo;
