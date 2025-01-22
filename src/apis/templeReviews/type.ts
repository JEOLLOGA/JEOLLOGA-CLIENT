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
  reviews?: Review[];
}
