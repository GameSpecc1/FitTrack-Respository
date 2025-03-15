import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Dumbbell, Target, Zap } from "lucide-react-native";

interface WelcomeSectionProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

const WelcomeSection = ({
  title = "Welcome to Fitness Companion",
  description = "Your personalized fitness journey starts here. Get tailored workout plans, equipment guidance, and track your progress all in one place.",
  imageUrl = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
}: WelcomeSectionProps) => {
  return (
    <View className="w-full bg-white p-6 rounded-lg shadow-sm">
      {/* Hero Image */}
      <View className="w-full h-40 overflow-hidden rounded-lg mb-4">
        <Image
          source={{ uri: imageUrl }}
          className="w-full h-full"
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Title and Description */}
      <View className="mb-4">
        <Text className="text-2xl font-bold text-gray-800 mb-2">{title}</Text>
        <Text className="text-gray-600">{description}</Text>
      </View>

      {/* Quick Feature Icons */}
      <View className="flex-row justify-between mt-2">
        <View className="items-center">
          <View className="bg-blue-100 p-2 rounded-full mb-1">
            <Dumbbell size={24} color="#3b82f6" />
          </View>
          <Text className="text-xs text-gray-700">Workouts</Text>
        </View>

        <View className="items-center">
          <View className="bg-green-100 p-2 rounded-full mb-1">
            <Target size={24} color="#10b981" />
          </View>
          <Text className="text-xs text-gray-700">Goals</Text>
        </View>

        <View className="items-center">
          <View className="bg-purple-100 p-2 rounded-full mb-1">
            <Zap size={24} color="#8b5cf6" />
          </View>
          <Text className="text-xs text-gray-700">Progress</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});

export default WelcomeSection;
