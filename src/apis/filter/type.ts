export interface Filters {
  region: string[];
  type: string[];
  purpose: string[];
  activity: string[];
  etc: string[];
}

export interface FilterOptions {
  filters: Filters;
}
