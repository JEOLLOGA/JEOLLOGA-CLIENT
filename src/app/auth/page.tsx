'use client';

import { usePostKakaoLogin } from '@apis/auth';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import React, { useEffect } from 'react';

export const dynamic = 'force-dynamic';

const RedirectionPage = () => {
  const code: string = new URL(window.location.href).searchParams.get('code') || '';
  const redirectUri = `${process.env.NEXT_PUBLIC_REDIRECT_URI}`;

  window.history.forward();

  const { mutate } = usePostKakaoLogin();

  useEffect(() => {
    if (code) mutate({ code, redirectUri });
  }, [code, redirectUri, mutate]);

  return <ExceptLayout type="loading" />;
};

export default RedirectionPage;
