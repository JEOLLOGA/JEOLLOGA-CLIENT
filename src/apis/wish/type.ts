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

export interface WishlistResponse {
  page: number;
  pageSize: number;
  totalPages: number;
  wishlist: WishItem[];
}

export interface WishlistRequest {
  userId: number;
  templestayId: number;
}

export interface SuccessResponse {
  data: 'success';
  msg: string | null;
}
