import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Message() {
  return (
    <SafeAreaView>
      <Text>Message</Text>
      <Text>Swipe Right -></Text>
    </SafeAreaView>
  );
}
