export interface TemplestayImg {
  imageUrlId: number;
  imgUrl: string;
}

export interface TemplestayImgsResponse {
  total: number;
  templestayImgs: TemplestayImg[];
}
