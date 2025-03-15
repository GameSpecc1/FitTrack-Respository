import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Dumbbell } from "lucide-react-native";

interface HeaderProps {
  title?: string;
  showLogo?: boolean;
}

const Header = ({
  title = "Fitness Companion",
  showLogo = true,
}: HeaderProps) => {
  return (
    <View className="w-full h-20 bg-blue-600 px-4 flex-row items-center justify-between">
      <View className="flex-row items-center">
        {showLogo && (
          <View className="mr-2 bg-white rounded-full p-2">
            <Dumbbell size={24} color="#2563eb" />
          </View>
        )}
        <Text className="text-white font-bold text-xl">{title}</Text>
      </View>
    </View>
  );
};

export default Header;
