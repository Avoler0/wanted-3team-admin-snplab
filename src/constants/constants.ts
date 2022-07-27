import { modalHeights, modalPositions } from '../components/Modal';

// RegExp
const REGEX_KOREAN = /^[가-힣]*$/; // 분리된 자음, 모음은 불가. 완성된 글자만 가능
const REGEX_BIRTHDAY_YYYYMMDD_WITH_DOT = /^(19[0-9]{2}|20\d{2})\.(0[0-9]|1[0-2])\.(0[1-9]|[1-2][0-9]|3[0-1])$/;
const REGEX_BIRTHDAY = REGEX_BIRTHDAY_YYYYMMDD_WITH_DOT;
const REGEX_NUMBER_OF_11_DIGIT_WITH_DOT = /^\d{11}$/;
const REGEX_CONTACT = REGEX_NUMBER_OF_11_DIGIT_WITH_DOT;
// @ 필수 포함, .com으로 끝나기
const REGEX_EMAIL =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+com))$/;
const REGEX_ONE_LETTER = /^\D{1,30}$/;

export const REGEXS = {
  이름: REGEX_KOREAN,
  생년월일: REGEX_BIRTHDAY,
  연락처: REGEX_CONTACT,
  이메일: REGEX_EMAIL,
  거주지역: REGEX_ONE_LETTER,
};

export const ERROR_MESSAGES = {
  이름: '이름은 공백없이 한글만 입력해주세요',
  생년월일: '8자리 숫자만 입력해주세요',
  거주지역: '거주지역을 입력해주세요',
  연락처: '11자리 숫자만 입력해주세요',
  이메일: '.com 주소만 가능합니다',
  주교통수단: '주요 교통수단을 선택해주세요',
  개인정보처리방침: '필수항목입니다',
  제3자정보제공: '필수항목입니다',
};

export const MODAL_PATHS = {
  개인정보처리방침: '개인정보처리방침',
  제3자정보제공: '제3자정보제공',
  adressSelector: 'adressSelector',
  doneAlly: 'doneAlly',
} as const;

export const MODAL_OPTIONS = {
  개인정보처리방침: {
    height: modalHeights['100%'],
    position: modalPositions.bottom,
    goWhenClosing: '',
  },
  제3자정보제공: {
    height: modalHeights['100%'],
    position: modalPositions.bottom,
    goWhenClosing: '',
  },
  adressSelector: {
    height: modalHeights['50%'],
    position: modalPositions.bottom,
    goWhenClosing: '',
  },
  doneAlly: {
    height: modalHeights['100%'],
    position: modalPositions.center,
    goWhenClosing: '/',
  },
} as const;

export const keyCodes = {
  backspace: 'Backspace',
  space: 'Space',
};
