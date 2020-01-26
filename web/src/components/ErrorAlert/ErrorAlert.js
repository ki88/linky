import React from 'react';
import classNames from 'classnames';
import s from './ErrorAlert.module.scss';
import { errorCodes } from './errorCodes';

export const ErrorAlert = ({ code }) => (
  <div className={classNames(s.errorAlert, s.fadeIn)}>
    <div className={s.title}>Uh Oh, there was an error</div>
    <div className={s.text}>{errorCodes[code] || 'Something went wrong'}</div>
  </div>
);
