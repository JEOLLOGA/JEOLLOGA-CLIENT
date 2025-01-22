export type FilterData = {
  region?: Record<string, number>;
  type?: Record<string, number>;
  purpose?: Record<string, number>;
  activity?: Record<string, number>;
  etc?: Record<string, number>;
  price: {
    minPrice: number;
    maxPrice: number;
  };
  content?: string;
};
