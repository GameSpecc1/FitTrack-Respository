import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import { ArrowRight } from "lucide-react-native";

interface OnboardingButtonProps {
  text?: string;
  onPress?: () => void;
  className?: string;
}

const OnboardingButton = ({
  text = "Get Started",
  onPress,
  className = "",
}: OnboardingButtonProps) => {
  const router = useRouter();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      // Default navigation to onboarding flow
      router.push("/onboarding");
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`bg-blue-600 rounded-full py-4 px-8 flex-row items-center justify-center shadow-md ${className}`}
      activeOpacity={0.8}
    >
      <Text className="text-white font-bold text-lg mr-2">{text}</Text>
      <ArrowRight size={20} color="white" />
    </TouchableOpacity>
  );
};

export default OnboardingButton;
