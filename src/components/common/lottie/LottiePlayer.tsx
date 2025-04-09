'use client';

import React, { useEffect } from 'react';

interface Props {
  src: string;
  keyId: string;
  style?: React.CSSProperties;
}

const LottiePlayer = ({ src, keyId, style }: Props) => {
  useEffect(() => {
    import('@dotlottie/player-component');
  }, []);

  return <dotlottie-player key={keyId} src={src} autoplay loop style={style} />;
};

export default LottiePlayer;
