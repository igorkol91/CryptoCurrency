import React from 'react';
import { PropTypes } from 'prop-types';

const Logos = ({ name, rank }) => (
  <div className="link-div d-flex align-items-center h-100">
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
  rank: PropTypes.number.isRequired,
};

export default Logos;
