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
