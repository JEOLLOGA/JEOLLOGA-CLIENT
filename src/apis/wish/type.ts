export interface WishItem {
  templestayId: number;
  templeName: string;
  templestayName: string;
  tag: string;
  region: string;
  type: string;
  imgUrl: string;
  liked: boolean;
}

export interface WishListResponse {
  page: number;
  pageSize: number;
  totalPages: number;
  wishlist: WishItem[];
}
