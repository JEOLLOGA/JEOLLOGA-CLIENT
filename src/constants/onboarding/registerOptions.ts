const REGISTER_OPTIONS: Record<'ageRange' | 'gender' | 'religion' | 'hasExperience', string[]> = {
  ageRange: ['10대', '20대', '30대', '40대', '50대', '60대 이상'],
  gender: ['남자', '여자'],
  religion: [
    '불교',
    '무교',
    '기독교',
    '천주교',
    '힌두교',
    '원불교',
    '유대교',
    '이슬람교',
    '다종교',
    '기타',
  ],
  hasExperience: ['있음', '없음'],
};

export default REGISTER_OPTIONS;
