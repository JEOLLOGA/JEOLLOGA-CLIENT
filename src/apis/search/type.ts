export interface DelSearchRecordType {
  userId: number;
  searchId: number;
}

export interface DelAllSearchRecordType {
  userId: number;
}

export interface DelResponse {
  data: string;
  msg: string;
}

export interface Content {
  searchId: number;
  content: string;
}

export interface SearchHistoryResponse {
  searchHistory: Content[];
}
