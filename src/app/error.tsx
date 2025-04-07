'use client';

import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';

export const dynamic = 'force-dynamic';

export default function ErrorPage() {
  return <ExceptLayout type="networkError" />;
}
