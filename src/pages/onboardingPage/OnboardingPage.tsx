import { useGetNickname, useRegisterUser } from '@apis/user';
import { OnboardingUserRequest } from '@apis/user/type';
import ProgressBar from '@components/common/progressBar/ProgressBar';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import OnboardingSection from '@components/onboarding/OnboardingSection';
import { ONBOARDING_STEPS, COMMON_DESCRIPTION } from '@constants/onboarding/onboardingSteps';
import useFunnel from '@hooks/useFunnel';
import React, { useState, useEffect } from 'react';

import container from './onboardingPage.css';

const OnboardingPage = () => {
  const { Funnel, Step, nextStep, prevStep, currentStep } = useFunnel(
    ONBOARDING_STEPS.map((step) => step.id),
    '/welcome',
  );

  const [selections, setSelections] = useState<Record<string, string | null>>(() => {
    const savedSelections = localStorage.getItem('onboardingSelections');
    return savedSelections
      ? JSON.parse(savedSelections)
      : ONBOARDING_STEPS.reduce((acc, step) => ({ ...acc, [step.id]: null }), {});
  });

  const userId = Number(localStorage.getItem('userId'));
  const { mutate: registerUserMutate } = useRegisterUser();

  const { data, isLoading } = useGetNickname(userId);
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setVh();
    window.addEventListener('resize', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);

  useEffect(() => {
    if (isInitialLoad) {
      setSelections((prev) => ({
        ...prev,
        [currentStep]: null,
      }));
      setIsInitialLoad(false);
    }
  }, [isInitialLoad, currentStep]);

  useEffect(() => {
    localStorage.setItem('onboardingSelections', JSON.stringify(selections));
  }, [selections]);

  const handleSelectionChange = (stepId: string, selected: string | null) => {
    setSelections((prev) => ({ ...prev, [stepId]: selected }));
  };

  const handleFinalSubmit = async () => {
    const requestData: OnboardingUserRequest = {
      userId,
      ageRange: selections['ageRange'],
      gender: selections['gender'],
      religion: selections['religion'],
      hasExperience: selections['hasExperience'],
    };

    registerUserMutate(requestData, {
      onSuccess: () => {
        localStorage.removeItem('onboardingSelections');
        nextStep();
      },
    });
  };

  if (isLoading) {
    return <ExceptLayout type="loading" />;
  }

  return (
    <div className={container}>
      <ProgressBar
        currentStep={ONBOARDING_STEPS.findIndex((step) => step.id === currentStep) + 1}
        totalSteps={ONBOARDING_STEPS.length}
        onBackClick={prevStep}
      />
      <Funnel steps={ONBOARDING_STEPS.map((step) => step.id)}>
        {ONBOARDING_STEPS.map(({ id, title, options, isNextDisabledInitially, isFinalStep }) => {
          return (
            <Step key={id} name={id}>
              <OnboardingSection
                id={id}
                title={
                  id === 'ageRange' || id === 'gender' ? [`${data?.nickname}님의`, title] : title
                }
                description={COMMON_DESCRIPTION}
                options={options}
                isNextDisabledInitially={isNextDisabledInitially || false}
                selectedOption={selections[id]}
                onSelectionChange={(selected) => handleSelectionChange(id, selected)}
                onNextClick={isFinalStep ? handleFinalSubmit : nextStep}
              />
            </Step>
          );
        })}
      </Funnel>
    </div>
  );
};

export default OnboardingPage;
