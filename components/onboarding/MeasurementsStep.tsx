import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ruler, Weight } from "lucide-react-native";
import { UserData } from "./OnboardingForm";

interface MeasurementsStepProps {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

const MeasurementsStep = ({ userData, setUserData }: MeasurementsStepProps) => {
  const toggleUnit = () => {
    setUserData({ ...userData, useMetric: !userData.useMetric });
  };

  return (
    <View className="mb-6">
      <View className="items-center mb-6">
        <Text className="text-xl font-bold text-gray-800">
          Your Measurements
        </Text>
        <Text className="text-gray-500 text-center mt-1">
          This helps us create personalized workouts
        </Text>
      </View>

      {/* Unit Toggle */}
      <View className="flex-row justify-center mb-6">
        <View className="flex-row bg-gray-200 rounded-full p-1">
          <TouchableOpacity
            onPress={() => setUserData({ ...userData, useMetric: true })}
            className={`px-4 py-2 rounded-full ${userData.useMetric ? "bg-blue-600" : ""}`}
          >
            <Text
              className={`${userData.useMetric ? "text-white" : "text-gray-700"} font-medium`}
            >
              Metric
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setUserData({ ...userData, useMetric: false })}
            className={`px-4 py-2 rounded-full ${!userData.useMetric ? "bg-blue-600" : ""}`}
          >
            <Text
              className={`${!userData.useMetric ? "text-white" : "text-gray-700"} font-medium`}
            >
              Imperial
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Height Input */}
      <View className="mb-4">
        <View className="flex-row items-center mb-1">
          <Ruler size={16} color="#4b5563" />
          <Text className="text-gray-700 ml-1 font-medium">Height</Text>
        </View>

        {userData.useMetric ? (
          <TextInput
            className="border border-gray-300 rounded-lg p-3 bg-gray-50"
            placeholder="Height in cm"
            keyboardType="number-pad"
            value={userData.height.cm}
            onChangeText={(text) =>
              setUserData({
                ...userData,
                height: { ...userData.height, cm: text },
              })
            }
          />
        ) : (
          <View className="flex-row space-x-2">
            <TextInput
              className="border border-gray-300 rounded-lg p-3 bg-gray-50 flex-1"
              placeholder="Feet"
              keyboardType="number-pad"
              value={userData.height.feet}
              onChangeText={(text) =>
                setUserData({
                  ...userData,
                  height: { ...userData.height, feet: text },
                })
              }
            />
            <TextInput
              className="border border-gray-300 rounded-lg p-3 bg-gray-50 flex-1"
              placeholder="Inches"
              keyboardType="number-pad"
              value={userData.height.inches}
              onChangeText={(text) =>
                setUserData({
                  ...userData,
                  height: { ...userData.height, inches: text },
                })
              }
            />
          </View>
        )}
      </View>

      {/* Weight Input */}
      <View>
        <View className="flex-row items-center mb-1">
          <Weight size={16} color="#4b5563" />
          <Text className="text-gray-700 ml-1 font-medium">Weight</Text>
        </View>

        {userData.useMetric ? (
          <TextInput
            className="border border-gray-300 rounded-lg p-3 bg-gray-50"
            placeholder="Weight in kg"
            keyboardType="number-pad"
            value={userData.weight.kg}
            onChangeText={(text) =>
              setUserData({
                ...userData,
                weight: { ...userData.weight, kg: text },
              })
            }
          />
        ) : (
          <TextInput
            className="border border-gray-300 rounded-lg p-3 bg-gray-50"
            placeholder="Weight in lbs"
            keyboardType="number-pad"
            value={userData.weight.lbs}
            onChangeText={(text) =>
              setUserData({
                ...userData,
                weight: { ...userData.weight, lbs: text },
              })
            }
          />
        )}
      </View>
    </View>
  );
};

export default MeasurementsStep;
