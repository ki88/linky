import React from 'react';
import classNames from 'classnames';
import { Button } from '../../controls/Button/Button';
import s from './Navbar.module.scss';
import auth from '../../../services/auth';

export const Navbar = ({ onCreate }) => {
  const onLogOut = () => {
    console.log('++');
    auth.logOut();
    window.location.href = '/login';
  };

  return (
    <div className={s.navbar}>
      <img className={s.logo} src={'/logo.png'} alt={''} />
      <Button className={s.btnCreate} look={'accent'} onClick={onCreate}>
        Create
      </Button>
      <span className={s.dd}>
        <button className={s.ddToggle}>
          <i className={'fa fa-bars'} />
        </button>
        <div className={s.ddMenu}>
          <div className={s.userName}>{auth.user}</div>
          <Button className={s.btnLogOut} look={'accent'} onClick={onLogOut}>
            Log Out
          </Button>
        </div>
      </span>
    </div>
  );
};
