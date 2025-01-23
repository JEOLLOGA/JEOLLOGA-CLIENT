import { useMutation, useQuery } from '@tanstack/react-query';

import { fetchUserNickname, getMyPage, registerUser } from './axios';
import { MyPageType, OnboardingUserRequest } from './type';

export const useRegisterUser = () => {
  return useMutation<void, Error, OnboardingUserRequest>({
    mutationFn: (data) => registerUser(data),
  });
};

export const useGetMyPage = (userId: string) => {
  const { data, isLoading, isError } = useQuery<MyPageType>({
    queryKey: ['myPage', userId],
    queryFn: () => getMyPage(userId),
  });

  return { data, isLoading, isError };
};

export const useGetNickname = (userId: number) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [userId],
    queryFn: () => fetchUserNickname(userId),
  });

  return { data, isLoading, isError };
};
