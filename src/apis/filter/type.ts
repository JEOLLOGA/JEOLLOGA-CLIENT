export interface PriceType {
  minPrice: number;
  maxPrice: number;
}

export interface FilterType {
  region?: Record<string, number>;
  type?: Record<string, number>;
  purpose?: Record<string, number>;
  activity?: Record<string, number>;
  etc?: Record<string, number>;
}

export interface FetchFilteredListProps {
  groupedFilters: FilterType;
  adjustedPrice: PriceType;
  searchQuery: string;
  page: number;
  userId: string;
}
