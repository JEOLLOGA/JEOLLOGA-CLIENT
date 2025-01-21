// api 관련 interface 및 type 정리

export interface Temple {
  ranking: number;
  templestayId: number;
  templeName: string;
  tag: string;
  region: string;
  liked: boolean;
  imgUrl: string;
}

export interface RankingResponse {
  rankings: Temple[];
}
