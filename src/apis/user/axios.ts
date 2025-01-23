import { privateInstance } from '@apis/instance';

import { OnboardingUserRequest, UserNicknameResponse } from './type';

export const fetchUserNickname = async (userId: number): Promise<UserNicknameResponse> => {
  const response = await privateInstance.get<UserNicknameResponse>(`/user/register/success`, {
    params: {
      userId,
    },
  });
  return response.data;
};

export const registerUser = async (data: OnboardingUserRequest): Promise<void> => {
  await privateInstance.post('/user/register', data);
};

export const getMyPage = async (userId: string) => {
  const res = await privateInstance.get('/user/mypage', {
    params: { userId },
  });
  return res.data;
};
