import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import s from './Dropdown.module.scss';

const dropdowns = [];

document.addEventListener('click', e => {
  const closest = e.target.closest(`.${s.toggle}`);
  if (closest) {
    return;
  }
  const opened = document.querySelectorAll(`.${s.dropdown}.${s.show}`);
  if (opened.length) {
    opened.forEach(element => {
      const dd = dropdowns.find(item => item.element === element);
      if (dd) {
        dd.close();
      }
    });
  }
});

export const Dropdown = props => {
  const { Toggle, Menu } = props;
  const [opened, setOpened] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const dd = {
      element: dropdownRef.current,
      close: () => setOpened(false)
    };
    dropdowns.push(dd);
    return () => dropdowns.splice(dropdowns.indexOf(dd), 1);
  }, []);
  return (
    <span
      ref={dropdownRef}
      className={classNames(s.dropdown, opened && s.show, props.className)}
    >
      <span className={s.toggle} onClick={() => setOpened(!opened)}>
        {Toggle}
      </span>
      <span className={s.menu}>{Menu}</span>
    </span>
  );
};

export const Caret = () => (
  <i className={classNames('fa fa-chevron-down', s.caret)} />
);
