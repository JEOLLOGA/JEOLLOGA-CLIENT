'use client';

import { useGetKakaoLogin } from '@apis/auth';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

export const dynamic = 'force-dynamic';

const RedirectionPage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code') || '';
  const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI || '';
  const { mutate } = useGetKakaoLogin();

  useEffect(() => {
    if (code) {
      window.history.forward();
      mutate({ code });
    }
  }, [code, redirectUri, mutate]);

  return <ExceptLayout type="loading" />;
};

export default RedirectionPage;
