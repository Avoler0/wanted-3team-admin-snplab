import { forwardRef } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const Input = forwardRef(function Input({ name, label, ...rest }: InputProps, ref) {
  // 할일: ignore 제거
  // @ts-ignore
  return <InputElement id={label} name={name} {...rest} ref={ref} />;
});

export default Input;

const InputElement = styled.input`
  width: 100%;
  border: none;
  color: ${theme.fontLightColor};
  font-size: 0.8rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${theme.borderLightColor};
  :focus {
    outline: none;
    border-bottom: solid 1px ${theme.borderOnFocusColor};
  }
`;
