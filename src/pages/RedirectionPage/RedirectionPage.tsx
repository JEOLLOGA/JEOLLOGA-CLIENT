import { useGetKakaoLogin } from '@apis/auth';
import React, { useEffect } from 'react';

const RedirectionPage = () => {
  const code: string = new URL(window.location.href).searchParams.get('code') || '';

  window.history.forward();

  const { mutate } = useGetKakaoLogin();

  useEffect(() => {
    if (code) mutate(code);
  }, [code, mutate]);

  return <div>로띠돌리기~</div>;
};

export default RedirectionPage;
