import React from 'react';
import classNames from 'classnames';
import s from './Button.module.scss';

export const Button = ({loading, ...props}) => {
  if (loading) {
    return (
      <button {...props}
              className={classNames(props.className, s.button, s[props.look])}
              children={
                <span className={s.content}>
                  <span className={s.contentOriginal}>{props.children}</span>
                  <span className={s.loader}><i className={'fa fa-circle-notch fa-spin'} /></span>
                </span>
              }
              disabled
      />
    )
  }
  return (
    <button {...props} className={classNames(props.className, s.button, s[props.look])} />
  )
}
