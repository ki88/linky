import React, { useState } from 'react';
import { Button } from '../../controls/Button/Button';
import s from './Navbar.module.scss';
import auth from '../../../services/auth';
import { Dropdown } from '../../controls/Dropdown/Dropdown';

export const Navbar = ({ onCreate }) => {
  const [showDD, setShowDd] = useState(false);

  const onLogOut = () => {
    auth.logOut();
    window.location.href = '/login';
  };

  return (
    <div className={s.navbar}>
      <img className={s.logo} src={'/logo.png'} alt={''} />
      <Button
        className={s.btnCreate}
        look={'accent'}
        onClick={onCreate}
        onFocus={() => setShowDd(true)}
        onBlur={() => setShowDd(false)}
      >
        Create
      </Button>
      <Dropdown
        Toggle={
          <button className={s.ddToggle}>
            <i className={'fa fa-bars'} />
          </button>
        }
        Menu={
          <div className={s.ddMenu}>
            <div className={s.userName}>{auth.user}</div>
            <Button className={s.btnLogOut} look={'accent'} onClick={onLogOut}>
              Log Out
            </Button>
          </div>
        }
      />
    </div>
  );
};
