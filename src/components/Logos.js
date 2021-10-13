import React from 'react';
import { PropTypes } from 'prop-types';

const Logos = ({ name, logoUrl, rank }) => (
  <div className="link-div d-flex mx-3 align-items-center h-100">
    <img src={logoUrl} alt="img" className="home-links-img h-100 w-25 p-3" />
    <div className="mx-3">
      <h3 className="home-links-text">{name}</h3>
      <h4 className="home-links-text">
        Rank:
        {rank}
      </h4>
    </div>
  </div>
);

Logos.propTypes = {
  name: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
};

export default Logos;
