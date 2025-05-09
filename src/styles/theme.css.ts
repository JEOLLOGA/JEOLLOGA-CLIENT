import { createGlobalTheme } from '@vanilla-extract/css';

const theme = createGlobalTheme(':root', {
  COLORS: {
    gray1: '#F6F6F6',
    gray2: '#EBEDEF',
    gray3: '#E1E4E7',
    gray4: '#CDD2D7',
    gray5: '#B9BEC5',
    gray6: '#ABB1B8',
    gray7: '#979EA6',
    gray8: '#868D95',
    gray9: '#787F87',
    gray10: '#6A7079',
    gray11: '#484D54',

    black: '#121212',
    white: '#ffffff',
    black60: 'rgba(18, 18, 18, 0.6)',
    black65: 'rgba(0, 0, 0, 0.65)',

    primary200: '#9FECAD',
    primary400: '#65C677',
    primary600: '#3EBD55',

    green1: '#F7FFE9',
    green2: '#D3ECD8',
    green3: '#ABD6AE',
    green4: '#6EBE7D',
    green5: '#779971',
    green6: '#EDF7F3',

    pink1: '#FF9999',
    pink2: '#FF8B8B',
    brown1: '#FFF2EC',
    brown2: '#E39371',
    blue1: '#EBEFFF',
    blue2: '#6A7394',
    kakao: '#FEE500',

    gradient: 'linear-gradient(180deg, #00000000 61.26%, #000000BF 100%)',

    filerDropshadow: '0px 4px 7px 0px rgba(0, 0, 0, 0.05)',
    reserveBtnDropshadow: '0px -4px 7px 0px #0000000D',
    boxArrowBtnDropshadow: '0px 3px 19px 0px rgba(0, 0, 0, 0.08)',
  },

  FONTS: {
    // Heading
    h0Sb22: {
      fontSize: '2.2rem',
      fontFamily: "'Pretendard-SemiBold', sans-serif",
      lineHeight: '138%',
      letterSpacing: '1%',
    },
    h1Sb24: {
      fontSize: '2.4rem',
      fontFamily: "'Pretendard-SemiBold', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    h2Sb20: {
      fontSize: '2rem',
      fontFamily: "'Pretendard-SemiBold', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    h3Sb18: {
      fontSize: '1.8rem',
      fontFamily: "'Pretendard-SemiBold', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    h4Sb17: {
      fontSize: '1.7rem',
      fontFamily: "'Pretendard-SemiBold', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    h5Sb16: {
      fontSize: '1.6rem',
      fontFamily: "'Pretendard-SemiBold', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    h6R20: {
      fontSize: '2rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },

    // Body
    b0R22: {
      fontSize: '2.2rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '138%',
      letterSpacing: '1%',
    },
    b1M20: {
      fontSize: '2rem',
      fontFamily: "'Pretendard-Medium', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    b2M18: {
      fontSize: '1.8rem',
      fontFamily: "'Pretendard-Medium', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    b3R18: {
      fontSize: '1.8rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    b4M17: {
      fontSize: '1.7rem',
      fontFamily: "'Pretendard-Medium', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    b5R17: {
      fontSize: '1.7rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    b6M16: {
      fontSize: '1.6rem',
      fontFamily: "'Pretendard-Medium', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    b7R16: {
      fontSize: '1.6rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    b8M15: {
      fontSize: '1.5rem',
      fontFamily: "'Pretendard-Medium', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    b9R15: {
      fontSize: '1.5rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },

    // Caption
    c1Sb15: {
      fontSize: '1.5rem',
      fontFamily: "'Pretendard-SemiBold', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    c2R14: {
      fontSize: '1.4rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '128%',
      letterSpacing: '2%',
    },
    c3Sb14: {
      fontSize: '1.4rem',
      fontFamily: "'Pretendard-SemiBold', sans-serif",
      lineHeight: '128%',
      letterSpacing: '2%',
    },
    c4M14: {
      fontSize: '1.4rem',
      fontFamily: "'Pretendard-Medium', sans-serif",
      lineHeight: '128%',
      letterSpacing: '2%',
    },
    c5M13: {
      fontSize: '1.3rem',
      fontFamily: "'Pretendard-Medium', sans-serif",
      lineHeight: '128%',
      letterSpacing: '2%',
    },
    c6R13: {
      fontSize: '1.3rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '128%',
      letterSpacing: '2%',
    },
    c7R12: {
      fontSize: '1.2rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '128%',
      letterSpacing: '2%',
    },

    // Footer
    f1Sb11: {
      fontSize: '1.1rem',
      fontFamily: "'Pretendard-SemiBold', sans-serif",
      lineHeight: '128%',
      letterSpacing: '2%',
    },
    f2Sb10: {
      fontSize: '1rem',
      fontFamily: "'Pretendard-SemiBold', sans-serif",
      lineHeight: '128%',
      letterSpacing: '2%',
    },
    f3R10: {
      fontSize: '1rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '128%',
      letterSpacing: '2%',
    },

    // Inform
    i1R15: {
      fontSize: '1.5rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '170%',
      letterSpacing: '1%',
    },
  },
});

export default theme;
