import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router';

const BackButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  const handleKey = (e) => {
    if (e.keyCode === 8) { handleClick(); }
  };

  return (
    <div className="header-button align-self-start m-3">
      <div
        className="back-btn"
        role="button"
        onClick={() => handleClick()}
        onKeyPress={(e) => handleKey(e)}
        tabIndex="0"
      >
        <ArrowBackIosIcon />
      </div>
    </div>
  );
};

export default BackButton;
