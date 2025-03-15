import React from "react";
import { View, ScrollView, SafeAreaView, StatusBar } from "react-native";
import { useFocusEffect } from "expo-router";

import Header from "../components/Header";
import WelcomeSection from "../components/WelcomeSection";
import OnboardingButton from "../components/OnboardingButton";
import FeatureHighlights from "../components/FeatureHighlights";

export default function HomeScreen() {
  // Reset scroll position when screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      // Any setup code for when screen comes into focus
      return () => {
        // Any cleanup code for when screen goes out of focus
      };
    }, []),
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar barStyle="light-content" />
      <View className="flex-1">
        <Header />

        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          {/* Welcome Section with hero image and brief description */}
          <View className="px-4 py-6">
            <WelcomeSection />
          </View>

          {/* Call to Action Button */}
          <View className="items-center mb-8">
            <OnboardingButton
              text="Start Your Fitness Journey"
              className="w-64"
            />
          </View>

          {/* Feature Highlights Section */}
          <FeatureHighlights />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
