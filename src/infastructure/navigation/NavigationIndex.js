import React from "react";
import AppNavigation from "./AppNavigation";
import Account from "./Account";
import { NavigationContainer } from "@react-navigation/native";

export default function NavigationIndex() {
  return (
    <NavigationContainer>
      {false ? <AppNavigation /> : <Account />}
    </NavigationContainer>
  );
}
