import styled from 'styled-components';

type DirectionType = 'row' | 'column';
interface InputContainerProps {
  children: React.ReactNode;
  direction?: DirectionType;
}

export default function InputContainer({ children, direction = 'column', ...rest }: InputContainerProps) {
  return <Container direction={direction}>{children}</Container>;
}

const Container = styled.div<{ direction: DirectionType }>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: 1rem;
  align-items: center;
`;
