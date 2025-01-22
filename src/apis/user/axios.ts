import { privateInstance } from '@apis/instance';

import { UserNicknameResponse } from './type';

const fetchUserNickname = async (userId: number): Promise<UserNicknameResponse> => {
  const response = await privateInstance.get<UserNicknameResponse>(`/user/register/success`, {
    params: {
      userId,
    },
  });
  return response.data;
};

export default fetchUserNickname;
