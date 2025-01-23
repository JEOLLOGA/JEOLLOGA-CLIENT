import { useGetKakaoLogin } from '@apis/auth';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import React, { useEffect } from 'react';

const RedirectionPage = () => {
  const code: string = new URL(window.location.href).searchParams.get('code') || '';

  window.history.forward();

  const { mutate } = useGetKakaoLogin();

  useEffect(() => {
    if (code) mutate(code);
  }, [code, mutate]);

  return <ExceptLayout type="loading" />;
};

export default RedirectionPage;
