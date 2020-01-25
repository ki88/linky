import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import s from './Modal.module.scss';

export const Modal = props => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpened(true);
    }, 100);
  }, []);

  const { Component } = props;

  const onClose = value => {
    setOpened(false);
    setTimeout(() => {
      props.onClose(value);
    }, 100);
  };

  const onDismiss = () => {
    setOpened(false);
    setTimeout(() => {
      props.onDismiss();
    }, 100);
  };

  return (
    <div>
      <div className={classNames(s.modal, opened && s.show)}>
        <div className={s.dialog} style={{ width: props.width }}>
          <div className={s.content} style={{ overflow: props.overflow }}>
            <Component
              {...props.data}
              onClose={value => onClose(value)}
              onDismiss={onDismiss}
            />
          </div>
        </div>
      </div>
      <div className={s.overlay} />
    </div>
  );
};

export const ModalHeader = props => (
  <div className={classNames(s.header, props.className)}>
    {props.children}{' '}
    <i
      className={classNames(s.close, 'fal fa-times')}
      onClick={props.onDismiss}
    />
  </div>
);

export const ModalBody = props => (
  <div className={classNames(s.body, props.className)}>{props.children}</div>
);

export const ModalFooter = props => (
  <div className={classNames(s.footer, props.className)}>{props.children}</div>
);
