import { useMutation } from '@tanstack/react-query';

import { registerUser } from './axios';
import { OnboardingUserRequest } from './type';

const useRegisterUser = () => {
  return useMutation<void, Error, OnboardingUserRequest>({
    mutationFn: (data) => registerUser(data),
  });
};

export default useRegisterUser;
