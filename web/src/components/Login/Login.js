import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import auth from '../../services/auth';
import { authApi } from '../../api/auth';
import { TextInput } from '../controls/TextInput/TextInput';
import { Button } from '../controls/Button/Button';
import s from './Login.module.scss';

export const Login = () => {
  const [user, setUser] = useState('');
  const [success, setSuccess] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const onSubmit = async () => {
    if (inProgress) {
      return;
    }
    setInProgress(true);
    try {
      const { token } = await authApi.login({ user });
      auth.login(token);
      setSuccess(true);
    } catch (e) {
      setInProgress(false);
    }
  };
  if (success) {
    return <Redirect to={{ pathname: '/' }} />;
  }
  return (
    <div className={s.login}>
      <div className={s.logoHolder}>
        <img src={'/logo.png'} alt={''} />
      </div>
      <div className={s.inputHolder}>
        <TextInput
          placeholder={'Type your nickname'}
          value={user}
          onChange={e => setUser(e.target.value)}
        />
      </div>
      <div>
        <Button
          className={s.btnSubmit}
          look={'accent'}
          loading={inProgress}
          disabled={!user}
          onClick={onSubmit}
        >
          Login
        </Button>
      </div>
    </div>
  );
};
