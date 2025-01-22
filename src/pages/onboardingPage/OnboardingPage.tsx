import fetchUserNickname from '@apis/user/axios';
import ProgressBar from '@components/common/progressBar/ProgressBar';
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

  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const userId = Number(localStorage.getItem('userId') || '');
    if (userId) {
      fetchUserNickname(userId).then((data) => setUserName(data.nickname));
    }
  }, []);

  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);
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

  const handleFinalSubmit = () => {
    localStorage.removeItem('onboardingSelections');
    nextStep();
  };

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
                title={id === 'ageRange' || id === 'gender' ? [`${userName}님의`, title] : title}
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
