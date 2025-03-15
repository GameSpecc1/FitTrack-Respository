import React, { useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import UserInfoStep from "./UserInfoStep";
import MeasurementsStep from "./MeasurementsStep";
import GoalSelectionStep from "./GoalSelectionStep";
import NavigationButtons from "./NavigationButtons";

export type UserData = {
  name: string;
  age: string;
  useMetric: boolean;
  height: {
    cm?: string;
    feet?: string;
    inches?: string;
  };
  weight: {
    kg?: string;
    lbs?: string;
  };
  goals: string[];
};

const OnboardingForm = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState<UserData>({
    name: "",
    age: "",
    useMetric: true,
    height: {
      cm: "",
      feet: "",
      inches: "",
    },
    weight: {
      kg: "",
      lbs: "",
    },
    goals: [],
  });

  const steps = [
    <UserInfoStep
      key="user-info"
      userData={userData}
      setUserData={setUserData}
    />,
    <MeasurementsStep
      key="measurements"
      userData={userData}
      setUserData={setUserData}
    />,
    <GoalSelectionStep
      key="goals"
      userData={userData}
      setUserData={setUserData}
    />,
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Save user data and navigate to dashboard
      console.log("User data:", userData);
      // In a real app, you would save this data to storage or backend
      router.push("/");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      router.back();
    }
  };

  return (
    <View className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
      {steps[currentStep]}

      <NavigationButtons
        currentStep={currentStep}
        totalSteps={steps.length}
        onNext={handleNext}
        onBack={handleBack}
      />
    </View>
  );
};

export default OnboardingForm;
