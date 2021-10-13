import React from 'react';
import { PropTypes } from 'prop-types';

const Logos = ({ name, logoUrl }) => (
  <div className="link-div">
    <img src={logoUrl} alt="img" className="home-links-img" />
    <h3 className="home-links-text">{name}</h3>
  </div>
);

Logos.propTypes = {
  name: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
};

export default Logos;
