import React, {useState} from 'react';
import {linkApi} from '../../api/link';
import {ModalBody, ModalFooter, ModalHeader} from '../Modal/Modal/Modal';
import {Button} from '../controls/Button/Button';
import {TextInput} from '../controls/TextInput/TextInput';
import s from './Create.module.scss';

export const CreateDumb = ({onDismiss, onCreate}) => {
  const [value, setValue] = useState('');

  return (
    <div>
      <ModalHeader onDismiss={onDismiss}>Create</ModalHeader>
      <ModalBody>
        <TextInput placeholder={'Paste long url'} value={value} onChange={e => setValue(e.target.value)} />
      </ModalBody>
      <ModalFooter>
        <Button look={'accent'} className={s.btnCreate} onClick={() => onCreate(value)} disabled={!value}>create</Button>
      </ModalFooter>
    </div>
  )
};

export const Create = ({onDismiss, onClose}) => {
  const onCreate = async (value) => {
    const link = await linkApi.create(value);
    onClose(link);
  };

  return (
    <CreateDumb onDismiss={onDismiss} onCreate={onCreate} />
  )
};
