import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from './Modal/Modal';

export const openModal = (Component, data, options) => {
  const host = document.createElement('div');
  document.body.appendChild(host);

  const destroy = () => {
    ReactDOM.unmountComponentAtNode(host);
    host.remove();
  };

  const onDismiss = () => {
    destroy();
    resolve();
  };

  const onClose = value => {
    destroy();
    resolve({ value });
  };

  ReactDOM.render(
    <Modal
      Component={Component}
      data={data}
      onClose={onClose}
      onDismiss={onDismiss}
      {...options}
    />,
    host
  );

  let resolve;

  return new Promise(resolveFn => (resolve = resolveFn));
};
