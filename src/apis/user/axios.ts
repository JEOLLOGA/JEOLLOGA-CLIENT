import instance, { privateInstance } from '@apis/instance';

import { OnboardingUserRequest, UserNicknameResponse } from './type';

export const fetchUserNickname = async (userId?: number) => {
  if (userId === 0) {
    return null;
  }
  const response = await instance.get<UserNicknameResponse>(`/user/register/success`, {
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
