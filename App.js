import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavigationIndex from "./src/infastructure/navigation/NavigationIndex";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationIndex />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
