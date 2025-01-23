import { useMutation, useQuery } from '@tanstack/react-query';

import { getMyPage, registerUser } from './axios';
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
