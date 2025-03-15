import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Check, Target } from "lucide-react-native";
import { UserData } from "./OnboardingForm";

interface GoalSelectionStepProps {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

const GoalSelectionStep = ({
  userData,
  setUserData,
}: GoalSelectionStepProps) => {
  const goals = [
    "Improve flexibility",
    "Boost overall health and wellness",
    "Incorporate strength training",
    "Lose fat",
    "Follow a workout plan",
    "Be more present during workouts",
    "Create a consistent workout schedule",
    "Deadlift twice your body weight",
    "Improve endurance",
    "Improve mobility",
    "Improve mood and self-confidence",
    "Set incremental goals",
    "Build muscle",
  ];

  const toggleGoal = (goal: string) => {
    const updatedGoals = [...userData.goals];
    if (updatedGoals.includes(goal)) {
      const index = updatedGoals.indexOf(goal);
      updatedGoals.splice(index, 1);
    } else {
      updatedGoals.push(goal);
    }
    setUserData({ ...userData, goals: updatedGoals });
  };

  return (
    <View className="mb-6">
      <View className="items-center mb-6">
        <View className="bg-blue-100 p-4 rounded-full mb-2">
          <Target size={48} color="#3b82f6" />
        </View>
        <Text className="text-xl font-bold text-gray-800">
          Select Your Goals
        </Text>
        <Text className="text-gray-500 text-center mt-1">
          Choose what you want to achieve
        </Text>
      </View>

      <ScrollView className="max-h-64" showsVerticalScrollIndicator={false}>
        {goals.map((goal, index) => (
          <TouchableOpacity
            key={index}
            className={`flex-row items-center p-3 mb-2 rounded-lg border ${userData.goals.includes(goal) ? "bg-blue-50 border-blue-300" : "border-gray-200"}`}
            onPress={() => toggleGoal(goal)}
          >
            <View
              className={`w-6 h-6 rounded-full mr-3 items-center justify-center ${userData.goals.includes(goal) ? "bg-blue-600" : "bg-gray-200"}`}
            >
              {userData.goals.includes(goal) && (
                <Check size={16} color="white" />
              )}
            </View>
            <Text className="text-gray-800">{goal}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default GoalSelectionStep;
