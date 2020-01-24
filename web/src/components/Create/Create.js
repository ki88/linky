import React, {useState} from 'react';
import {linkApi} from '../../api/link';
import {ModalBody, ModalFooter, ModalHeader} from '../Modal/Modal/Modal';
import {Button} from '../controls/Button/Button';
import {TextInput} from '../controls/TextInput/TextInput';
import s from './Create.module.scss';

export const Create = ({onDismiss, onClose}) => {
  const [value, setValue] = useState('');

  const onCreate = async () => {
    const link = await linkApi.create(value);
    onClose(link);
  };

  return (
    <div>
      <ModalHeader onDismiss={onDismiss}>Create</ModalHeader>
      <ModalBody>
        <TextInput placeholder={'Paste long url'} value={value} onChange={e => setValue(e.target.value)} />
      </ModalBody>
      <ModalFooter>
        <Button look={'accent'} className={s.btnCreate} onClick={onCreate} disabled={!value}>create</Button>
      </ModalFooter>
    </div>
  )
};
