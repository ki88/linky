import React from 'react';
import classNames from 'classnames';
import s from './TextInput.module.scss';

export const TextInput = (props) => (
  <input {...props} className={classNames(props.className, s.textInput)} />
)
