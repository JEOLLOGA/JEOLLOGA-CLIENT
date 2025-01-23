export interface UserNicknameResponse {
  nickname: string;
}

export interface OnboardingUserRequest {
  userId: number;
  ageRange: string | null;
  gender: string | null;
  religion: string | null;
  hasExperience: string | null;
}

export interface MyPageType {
  userId: number;
  nickname: string;
  email: string;
  ageRange?: string;
  gender?: string;
  religion?: string;
  hasExperience?: boolean;
}
