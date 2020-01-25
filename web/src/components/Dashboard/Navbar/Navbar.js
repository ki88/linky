import React from 'react';
import { Button } from '../../controls/Button/Button';
import s from './Navbar.module.scss';

export const Navbar = ({ onCreate }) => (
  <div className={s.navbar}>
    <img className={s.logo} src={'/logo.png'} alt={''} />
    <Button className={s.btnCreate} look={'accent'} onClick={onCreate}>
      Create
    </Button>
  </div>
);
