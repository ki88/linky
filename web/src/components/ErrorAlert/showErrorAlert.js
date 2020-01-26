import ReactDOM from 'react-dom';
import React from 'react';
import { ErrorAlert } from './ErrorAlert';

export const showErrorAlert = code => {
  const host = document.createElement('div');
  document.body.appendChild(host);

  const destroy = () => {
    ReactDOM.unmountComponentAtNode(host);
    host.remove();
  };

  ReactDOM.render(<ErrorAlert code={code} />, host);

  setTimeout(() => {
    destroy();
  }, 3000);
};
