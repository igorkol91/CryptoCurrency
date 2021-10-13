import React from 'react';
import { PropTypes } from 'prop-types';

const Logos = ({ name, logoUrl, rank }) => (
  <div className="link-div d-flex align-items-center h-100">
    <img src={logoUrl} alt="img" className="home-links-img h-50 w-50" />
    <div className="mx-1">
      <h5 className="home-links-text">{name}</h5>
      <h6 className="home-links-text">
        Rank:
        {rank}
      </h6>
    </div>
  </div>
);

Logos.propTypes = {
  name: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
};

export default Logos;
