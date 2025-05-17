export const SORT_OPTIONS = {
  RECOMMEND: 'recommended',
  LIKE_DESC: 'like_desc',
  PRICE_ASC: 'price_asc',
} as const;

export type SortOption = (typeof SORT_OPTIONS)[keyof typeof SORT_OPTIONS];

export const SORT_LABELS: Record<SortOption, string> = {
  [SORT_OPTIONS.RECOMMEND]: '추천순',
  [SORT_OPTIONS.LIKE_DESC]: '찜 많은순',
  [SORT_OPTIONS.PRICE_ASC]: '가격 낮은순',
};

// export const SORT_OPTIONS = [
//   { label: '추천순', value: 'recommended' },
//   { label: '찜 많은순', value: 'like_desc' },
//   { label: '가격 낮은순', value: 'price_asc' },
// ] as const;

// export type SortOptionValue = (typeof SORT_OPTIONS)[number]['value'];
