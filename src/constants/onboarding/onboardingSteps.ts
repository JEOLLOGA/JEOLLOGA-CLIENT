import REGISTER_OPTIONS from './registerOptions';

export const ONBOARDING_STEPS = [
  {
    id: 'ageRange',
    title: '\n나이를 알려주세요',
    options: REGISTER_OPTIONS.ageRange,
    isNextDisabledInitially: true,
  },
  {
    id: 'gender',
    title: '\n성별을 알려주세요',
    options: REGISTER_OPTIONS.gender,
    isNextDisabledInitially: true,
  },
  {
    id: 'religion',
    title: '종교가\n있으신가요?',
    options: REGISTER_OPTIONS.religion,
  },
  {
    id: 'hasExperience',
    title: '템플스테이 이용경험이\n있으신가요?',
    options: REGISTER_OPTIONS.hasExperience,
    isFinalStep: true,
  },
];

export const COMMON_DESCRIPTION = '서비스 발전 이외의 목적으로는 사용하지 않아요!';

export const WELCOME_TEXT = '님,\n절로가에 오신 것을 환영해요!';
