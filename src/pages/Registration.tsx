import styled from 'styled-components';
import Input from '../components/Input';
import InputContainer from '../components/InputContainer';
import InputRadio from '../components/InputRadio';
import Label from '../components/Label';
import { theme } from '../styles/theme';
import { BsCheckCircle, BsCheckLg } from 'react-icons/bs';
import { BiChevronRight } from 'react-icons/bi';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { ERROR_MESSAGES, REGEXS } from '../constants/constants';

type Transportations = '버스' | '지하철' | '택시' | 'KTX/기차' | '도보' | '자전거' | '전동킥보드' | '자가용';

interface AAA {
  버스: boolean;
  지하철: boolean;
  택시: boolean;
  'KTX/기차': boolean;
  도보: boolean;
  자전거: boolean;
  전동킥보드: boolean;
  자가용: boolean;
}

const INPUT_NAMES = ['이름', '생년월일', '연락처', '이메일'] as const;
type InputNameTypes = typeof INPUT_NAMES[number];

export default function Registration() {
  const [inputStatus, setInputStatus] = useState({
    이름: { isValid: false, message: '' },
    생년월일: { isValid: false, message: '' },
    거주지역: { isValid: false, message: '' },
    연락처: { isValid: false, message: '' },
    이메일: { isValid: false, message: '' },
    주교통수단: { isValid: false, message: '' },
    개인정보처리방침: { isValid: false, message: '' },
    제3자정보제공: { isValid: false, message: '' },
  });
  const [transportations, setTransportations] = useState<AAA>({
    버스: false,
    지하철: false,
    택시: false,
    'KTX/기차': false,
    도보: false,
    자전거: false,
    전동킥보드: false,
    자가용: false,
  });
  const [hasValidation, setHasValidation] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const maleRef = useRef<HTMLInputElement>(null);
  const femaleRef = useRef<HTMLInputElement>(null);
  const genderRefs = [femaleRef, maleRef];
  const birthRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const checkValidation = (name: InputNameTypes, value: string) => new RegExp(REGEXS[name]).test(value);

  const validateInput = (event: FormEvent<HTMLInputElement>) => {
    if (!event.currentTarget) return;
    const { name, value } = event.currentTarget as { name: InputNameTypes; value: string };

    const passedValidation = checkValidation(name, value);
    if (inputStatus[name].isValid === passedValidation) return;

    setInputStatus((prevState) => {
      prevState[name].isValid = passedValidation;
      prevState[name].message = passedValidation ? '' : ERROR_MESSAGES[name];
      return { ...prevState };
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!hasValidation) return;
    console.log('nameRef', nameRef.current?.value);
    console.log('maleRef', maleRef.current?.value, maleRef.current?.checked);
    console.log('femaleRef', femaleRef.current?.value, femaleRef.current?.checked);
    console.log('birthRef', birthRef.current?.value);
    console.log('addressRef', addressRef.current?.value);
    console.log('contactRef', contactRef.current?.value);
    console.log('emailRef', emailRef.current?.value);
    console.log('폼 이벤트', event.currentTarget);
  };

  const changeCheckbox = (event: FormEvent<HTMLInputElement>) => {
    const { checked, value } = event.currentTarget as { checked: boolean; value: Transportations };
    setTransportations((prevState) => ({ ...prevState, [value]: checked }));
  };

  const agreeAll = () =>
    setInputStatus((prevState) => {
      let isValid = true;
      if (prevState.개인정보처리방침.isValid && prevState.제3자정보제공.isValid) isValid = false;

      return {
        ...prevState,
        개인정보처리방침: {
          ...prevState.개인정보처리방침,
          isValid,
        },
        제3자정보제공: {
          ...prevState.제3자정보제공,
          isValid,
        },
      };
    });

  const togglePersonalInfoAgree = () =>
    setInputStatus((prevState) => ({
      ...prevState,
      개인정보처리방침: {
        ...prevState.개인정보처리방침,
        isValid: !prevState.개인정보처리방침.isValid,
      },
    }));
  const toggleThirdAgree = () =>
    setInputStatus((prevState) => ({
      ...prevState,
      제3자정보제공: {
        ...prevState.제3자정보제공,
        isValid: !prevState.제3자정보제공.isValid,
      },
    }));

  useEffect(() => {
    const validLength = Object.values(inputStatus).filter((input) => !input.isValid).length;

    if (validLength === 0) return setHasValidation(true);
    hasValidation === true && setHasValidation(false);
  }, [inputStatus]);

  return (
    <Container>
      <Wrapper>
        <Title>
          <span>크라우드 워커에 지원하기 위해</span>
          <span>필요한 정보를 입력해 주세요</span>
        </Title>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Label name="이름" label="이름" />
            <Input name="이름" type={'text'} placeholder="홍길동" onChange={validateInput} ref={nameRef} required />
          </InputContainer>
          <InputContainer>
            <Label label="성별" />
            <div style={{ display: 'flex', width: '100%' }}>
              {['여자', '남자'].map((gender, idx) => (
                <InputRadio
                  key={idx}
                  name="성별"
                  label={gender}
                  children={
                    <Input
                      type={'radio'}
                      name={'성별'}
                      label={gender}
                      value={gender}
                      ref={genderRefs[idx]}
                      defaultChecked={!!!idx}
                    />
                  }
                />
              ))}
            </div>
          </InputContainer>
          <InputContainer>
            <Label name="생년월일" label="생년월일" />
            <Input name="생년월일" type={'string'} placeholder="YYYY.MM.DD" ref={birthRef} onChange={validateInput} />
          </InputContainer>
          <InputContainer>
            <Label name="거주지역" label="거주지역" />
            <Input
              name="거주지역"
              type={'text'}
              placeholder="겨주지역 선택"
              ref={addressRef}
              onChange={validateInput}
            />
          </InputContainer>
          <InputContainer>
            <Label name="연락처" label="연락처" />
            <Input
              name="연락처"
              type={'string'}
              placeholder="'-'없이 입력해 주세요"
              ref={contactRef}
              onChange={validateInput}
            />
          </InputContainer>
          <InputContainer>
            <Label name="이메일" label="이메일" />
            <Input name="이메일" type={'email'} placeholder="MYD@snplap.com" ref={emailRef} onChange={validateInput} />
          </InputContainer>
          <InputContainer>
            <Label label="주로 이용하는 교통수단" subLabel="주로 이용하는 교통수단을 모두 선택해주세요" />
            <InputCheckboxWrapper>
              {Object.keys(transportations).map((transportation, idx) => (
                // <InputCheckbox key={idx} name="교통수단" label={transportation} value={transportation} />
                <label>
                  {transportation}
                  <input name="교통수단" value={transportation} type="checkbox" onClick={changeCheckbox} />
                </label>
              ))}
            </InputCheckboxWrapper>
          </InputContainer>

          <TermsOfUse>
            <label>
              <button onClick={agreeAll}>
                <BsCheckCircle
                  color={
                    inputStatus.개인정보처리방침.isValid && inputStatus.제3자정보제공.isValid
                      ? theme.buttonDarkColor
                      : theme.buttonLightColor
                  }
                />
                <span>이용약관 모두 동의</span>
              </button>
            </label>
            <label>
              <input type={'checkbox'} hidden />
              <button onClick={togglePersonalInfoAgree} type="button">
                <BsCheckLg
                  color={inputStatus.개인정보처리방침.isValid ? theme.buttonDarkColor : theme.buttonLightColor}
                />
                <span>개인정보 처리방침 고지 (필수)</span>
              </button>
              <BiChevronRight />
            </label>
            <label>
              <input type={'checkbox'} hidden />
              <button onClick={toggleThirdAgree} type="button">
                <BsCheckLg color={inputStatus.제3자정보제공.isValid ? theme.buttonDarkColor : theme.buttonLightColor} />
                <span>제3자 정보제공 동의 (필수)</span>
              </button>
              <BiChevronRight />
            </label>
          </TermsOfUse>

          <Button isActivate={hasValidation}>지원하기</Button>
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
  pointer-events: ${(props) => (props.isActivate ? 'all' : 'none')};
  cursor: pointer;
`;
