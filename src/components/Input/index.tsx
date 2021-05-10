import { FC, InputHTMLAttributes, useEffect, useRef } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import Tooltip from '../Tooltip';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error}>
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />

      {error && (
        <Tooltip title={error}>
          <FiAlertCircle color="#C53030" />
        </Tooltip>
      )}
    </Container>
  );
};

export default Input;
