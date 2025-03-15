import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import { Stack } from "expo-router";
import OnboardingHeader from "../../components/onboarding/OnboardingHeader";
import OnboardingForm from "../../components/onboarding/OnboardingForm";

export default function OnboardingScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar barStyle="light-content" />
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1">
        <OnboardingHeader />
        <View className="flex-1 px-4 py-6 items-center">
          <OnboardingForm />
        </View>
      </View>
    </SafeAreaView>
  );
}
