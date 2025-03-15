import React from "react";
import { View, Text } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

interface OnboardingHeaderProps {
  title?: string;
  showBackButton?: boolean;
}

const OnboardingHeader = ({
  title = "Create Your Profile",
  showBackButton = true,
}: OnboardingHeaderProps) => {
  const router = useRouter();

  return (
    <View className="w-full h-20 bg-blue-600 px-4 flex-row items-center">
      {showBackButton && (
        <TouchableOpacity onPress={() => router.back()} className="mr-4 p-2">
          <ArrowLeft size={24} color="white" />
        </TouchableOpacity>
      )}
      <Text className="text-white font-bold text-xl">{title}</Text>
    </View>
  );
};

export default OnboardingHeader;
