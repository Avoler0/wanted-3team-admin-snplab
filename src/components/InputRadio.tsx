import styled from 'styled-components';
import Input from './Input';
import Label from './Label';

interface InputRadioProps {
  name: string;
  label: string;
}

export default function InputRadio({ label, name }: InputRadioProps) {
  return (
    <Container>
      <Wrapper>
        <Input type={'radio'} name={name} label={label} />
        <Label name={label} label={label} />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 0.5rem;
`;
