import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ArrowLeft, ArrowRight, Check } from "lucide-react-native";

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
}

const NavigationButtons = ({
  currentStep,
  totalSteps,
  onNext,
  onBack,
}: NavigationButtonsProps) => {
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <View className="mt-4">
      {/* Progress Indicator */}
      <View className="flex-row justify-center mb-4">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <View
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${index <= currentStep ? "bg-blue-600" : "bg-gray-300"}`}
          />
        ))}
      </View>

      {/* Navigation Buttons */}
      <View className="flex-row justify-between">
        <TouchableOpacity
          onPress={onBack}
          className="flex-row items-center py-2 px-4"
        >
          <ArrowLeft size={20} color="#4b5563" />
          <Text className="text-gray-700 ml-1">Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onNext}
          className="bg-blue-600 flex-row items-center py-2 px-6 rounded-full"
        >
          <Text className="text-white font-medium mr-1">
            {isLastStep ? "Finish" : "Next"}
          </Text>
          {isLastStep ? (
            <Check size={20} color="white" />
          ) : (
            <ArrowRight size={20} color="white" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigationButtons;
