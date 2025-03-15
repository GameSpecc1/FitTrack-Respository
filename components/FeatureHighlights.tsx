import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import { Camera, Dumbbell, Target } from "lucide-react-native";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({
  title = "Feature Title",
  description = "Feature description goes here",
  icon,
}: FeatureCardProps) => {
  return (
    <View className="bg-white rounded-xl p-4 shadow-md mb-4 w-full">
      <View className="flex-row items-center mb-2">
        <View className="bg-blue-100 p-2 rounded-full mr-3">{icon}</View>
        <Text className="text-lg font-bold text-gray-800">{title}</Text>
      </View>
      <Text className="text-gray-600">{description}</Text>
    </View>
  );
};

interface FeatureHighlightsProps {
  features?: FeatureCardProps[];
}

const FeatureHighlights = ({ features }: FeatureHighlightsProps) => {
  const defaultFeatures: FeatureCardProps[] = [
    {
      title: "Equipment Scanner",
      description:
        "Scan gym equipment with your camera to get proper form guides and personalized weight recommendations.",
      icon: <Camera size={24} color="#3b82f6" />,
    },
    {
      title: "Goal Setting",
      description:
        "Set and track your fitness goals with our interactive dashboard. Choose from strength training, flexibility, fat loss, and more.",
      icon: <Target size={24} color="#3b82f6" />,
    },
    {
      title: "Personalized Workouts",
      description:
        "Get workout plans tailored to your body metrics, goals, and available equipment.",
      icon: <Dumbbell size={24} color="#3b82f6" />,
    },
  ];

  const displayFeatures = features || defaultFeatures;

  return (
    <View className="bg-gray-50 p-6 rounded-t-3xl w-full">
      <Text className="text-2xl font-bold text-center mb-6 text-gray-800">
        Key Features
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-full"
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {displayFeatures.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeatureHighlights;
