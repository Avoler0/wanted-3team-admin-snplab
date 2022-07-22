import styled from 'styled-components';

interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return <Span>{message}</Span>;
}

export default ErrorMessage;

const Span = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.7rem;
  font-weight: 400;
  color: tomato;
`;
