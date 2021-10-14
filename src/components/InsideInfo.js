import React from 'react';
import { PropTypes } from 'prop-types';
import BackButton from './BackButton';

const InsideInfo = ({
  supply, logoUrl, price, rank, status, name,
}) => (
  <div className="dark-blue d-flex flex-column align-items-center">
    <BackButton />
    <img src={logoUrl} alt="img" className="h-25 w-25 d-block my-2 px-3" />
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
      <h5 className="text-white">Circulating Supply:</h5>
      {' '}
      <h5 className="text-white">{supply}</h5>
    </span>
    <div className="text-white d-flex justify-content-between w-100 px-3">
      Status:
      {' '}
      <b>
        {status}
      </b>
      {' '}
    </div>
  </div>
);

InsideInfo.propTypes = {
  supply: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default InsideInfo;
