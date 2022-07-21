import styled from 'styled-components';
import Input from '../components/Input';
import InputCheckbox from '../components/InputCheckbox';
import InputContainer from '../components/InputContainer';
import InputRadio from '../components/InputRadio';
import Label from '../components/Label';
import { theme } from '../styles/theme';
import { BsCheckCircle, BsCheckLg } from 'react-icons/bs';
import { BiChevronRight } from 'react-icons/bi';

export default function Registration() {
  const TRANSPORTATION = ['버스', '지하철', '택시', 'KTX/기차', '도보', '자전거', '전동킥보드', '자가용'];
  return (
    <Container>
      <Wrapper>
        <Title>
          <span>크라우드 워커에 지원하기 위해</span>
          <span>필요한 정보를 입력해 주세요</span>
        </Title>
        <Form>
          <InputContainer>
            <Label name="이름" label="이름" />
            <Input name="이름" type={'text'} placeholder="홍길동" />
          </InputContainer>
          <InputContainer>
            <Label label="성별" />
            <div style={{ display: 'flex', width: '100%' }}>
              {['여자', '남자'].map((gender) => (
                <InputRadio name="성별" label={gender} />
              ))}
            </div>
          </InputContainer>
          <InputContainer>
            <Label name="생년월일" label="생년월일" />
            <Input name="생년월일" type={'date'} placeholder="YYYY.MM.DD" />
          </InputContainer>
          <InputContainer>
            <Label name="거주지역" label="거주지역" />
            <Input name="거주지역" type={'text'} placeholder="겨주지역 선택" />
          </InputContainer>
          <InputContainer>
            <Label name="연락처" label="연락처" />
            <Input name="연락처" type={'string'} placeholder="'-'없이 입력해 주세요" />
          </InputContainer>
          <InputContainer>
            <Label name="이메일" label="이메일" />
            <Input name="이메일" type={'email'} placeholder="MYD@snplap.com" />
          </InputContainer>
          <InputContainer>
            <Label label="주로 이용하는 교통수단" subLabel="주로 이용하는 교통수단을 모두 선택해주세요" />
            <InputCheckboxWrapper>
              {TRANSPORTATION.map((gender, idx) => (
                <InputCheckbox key={idx} name="교통수단" label={gender} />
              ))}
            </InputCheckboxWrapper>
          </InputContainer>

          <TermsOfUse>
            <label>
              <BsCheckCircle />
              <span>이용약관 모두 동의</span>
            </label>
            <label>
              <input type={'checkbox'} hidden />
              <BsCheckLg />
              <span>개인정보 처리방침 고지 (필수)</span>
              <BiChevronRight />
            </label>
            <label>
              <input type={'checkbox'} hidden />
              <BsCheckLg />
              <span>제3자 정보제공 동의 (필수)</span>
              <BiChevronRight />
            </label>
          </TermsOfUse>

          <Button isActivate={false}>지원하기</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: lightgray;
  height: 100vh;
  overflow-y: hidden;
`;

const Wrapper = styled.div`
  max-width: 450px;
  overflow-y: scroll;
  background-color: white;
  margin: 0 auto;
  height: 100%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  padding: 2rem 1rem;
`;

const Title = styled.div`
  color: ${theme.fontDarkColor};
  font-weight: 800;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;

const InputCheckboxWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 0.5rem 0.7rem;
`;

const TermsOfUse = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  label {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
  }
  label svg {
  }
  label span {
    width: 100%;
  }
  label:first-child {
    border-bottom: 1px solid ${theme.borderDarkColor};
    padding-bottom: 0.5rem;
  }
`;

const Button = styled.button<{ isActivate: boolean }>`
  color: ${(props) => (props.isActivate ? '' : theme.fontLightColor)};
  background-color: ${(props) => (props.isActivate ? '' : theme.buttonLightColor)};
  border: none;
  border-radius: 1rem;
  font-weight: 600;
  padding: 1rem 0;
`;
