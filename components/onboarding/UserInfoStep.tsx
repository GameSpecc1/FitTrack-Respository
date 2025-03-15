import React from "react";
import { View, Text, TextInput } from "react-native";
import { UserCircle } from "lucide-react-native";
import { UserData } from "./OnboardingForm";

interface UserInfoStepProps {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

const UserInfoStep = ({ userData, setUserData }: UserInfoStepProps) => {
  return (
    <View className="mb-6">
      <View className="items-center mb-6">
        <View className="bg-blue-100 p-4 rounded-full mb-2">
          <UserCircle size={48} color="#3b82f6" />
        </View>
        <Text className="text-xl font-bold text-gray-800">
          Tell us about yourself
        </Text>
        <Text className="text-gray-500 text-center mt-1">
          We'll use this to personalize your experience
        </Text>
      </View>

      <View className="mb-4">
        <Text className="text-gray-700 mb-1 font-medium">Your Name</Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-3 bg-gray-50"
          placeholder="Enter your name"
          value={userData.name}
          onChangeText={(text) => setUserData({ ...userData, name: text })}
        />
      </View>

      <View>
        <Text className="text-gray-700 mb-1 font-medium">Your Age</Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-3 bg-gray-50"
          placeholder="Enter your age"
          keyboardType="number-pad"
          value={userData.age}
          onChangeText={(text) => setUserData({ ...userData, age: text })}
        />
      </View>
    </View>
  );
};

export default UserInfoStep;
