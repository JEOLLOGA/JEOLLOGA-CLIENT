export interface LoginResponseHeader {
  Authorization: string;
  refreshToken: string;
}

export interface LoginSuccessResponse {
  id: number;
}
