export interface Review {
  reviewId?: string;
  reviewTitle?: string;
  reviewLink?: string;
  reviewName?: string;
  reviewDescription?: string;
  reviewDate?: string;
  reviewImgUrl?: string;
}

export interface ReviewsResponse {
  templestayId: string;
  page: number;
  pageSize: number;
  totalPages: number;
  reviewCount: number;
  reviews?: Review[];
}

export interface TemplestayImg {
  imageUrlId: number;
  imgUrl?: string;
}

export interface TemplestayImgsResponse {
  total?: number;
  templestayImgs: TemplestayImg[];
}

export interface TempleDetail {
  templestayId: string;
  templeName: string;
  templestayName: string;
  phoneNumber: string;
  address: string;
  tag?: string;
  templestayPrice?: string;
  introduction?: string;
  detailAddress: string;
  youtube?: string;
  schedule?: string;
  latitude: number;
  longitude: number;
  liked: boolean;
  url: string;
}
