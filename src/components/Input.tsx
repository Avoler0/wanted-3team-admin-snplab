import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export default function Input({ name, label, ...rest }: InputProps) {
  return <InputElement id={label} name={name} {...rest} />;
}

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
