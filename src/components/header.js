import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import MicIcon from '@material-ui/icons/Mic';
import { useHistory } from 'react-router';
import BackButton from './BackButton';

const Header = () => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  const handleKey = (e) => {
    if (e.keyCode === 8) { handleClick(); }
  };

  return (
    <div className="py-1 dark-blue row">
      <div className="col-4">
        <div
          className="back-btn"
          role="button"
          onClick={() => handleClick()}
          onKeyPress={(e) => handleKey(e)}
          tabIndex="0"
        >
          <BackButton />
        </div>
      </div>
      <div className="col-4 text-center">
        2021
      </div>
      <div className="col-4 justify-content-end d-flex align-items-center">
        <MicIcon />
        <SettingsIcon />
      </div>
    </div>
  );
};

export default Header;
