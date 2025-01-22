import React, { ReactElement, ReactNode, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface StepProps {
  name: string;
  onNext?: () => void;
  children: ReactNode;
}

interface FunnelProps {
  steps: string[];
  children: ReactElement<StepProps>[];
}

type SetStepOptions = {
  preserveQuery?: boolean;
  stepChangeType?: 'push' | 'replace';
  query?: Record<string, unknown>;
};

const useFunnel = (steps: string[], completePath: string) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const currentStep = searchParams.get('step') || steps[0];

  const setStep = (newStep: string, options?: SetStepOptions) => {
    const { preserveQuery = true, stepChangeType = 'push', query = {} } = options || {};

    if (!steps.includes(newStep)) {
      throw new Error(`Invalid step: ${newStep}`);
    }

    const updatedQuery = {
      ...(preserveQuery ? Object.fromEntries(searchParams) : {}),
      ...query,
      step: newStep,
    };

    const updatedPath = {
      pathname: '/onboarding',
      search: `?${new URLSearchParams(updatedQuery)}`,
    };

    if (stepChangeType === 'replace') {
      navigate(updatedPath, { replace: true });
    } else {
      navigate(updatedPath);
    }
  };

  const nextStep = () => {
    const currentIndex = steps.indexOf(currentStep);
    const nextIndex = currentIndex + 1;
    if (nextIndex < steps.length) {
      setStep(steps[nextIndex]);
    } else {
      navigate(completePath);
    }
  };

  const prevStep = () => {
    const currentIndex = steps.indexOf(currentStep);
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setStep(steps[prevIndex]);
    } else {
      navigate(-1);
    }
  };

  const Funnel = ({ children }: FunnelProps) => {
    const stepsMap = React.Children.toArray(children).reduce(
      (map, child) => {
        if (React.isValidElement(child)) {
          map[child.props.name] = child;
        }
        return map;
      },
      {} as Record<string, ReactElement>,
    );

    const activeStep = stepsMap[currentStep];
    if (!activeStep) throw new Error(`Step "${currentStep}" not found`);
    return activeStep;
  };

  const Step = ({ onNext, children }: StepProps) => {
    useEffect(() => {
      onNext?.();
    }, [onNext]);
    return <>{children}</>;
  };

  return { Funnel, Step, currentStep, setStep, nextStep, prevStep };
};

export default useFunnel;
