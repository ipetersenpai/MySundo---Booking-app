import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerListComponent } from "./DrawerList";
import Dashboard from "../../features/Home/screens/Dashboard";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const DashboardScreen = () => null;

export default function MessageDrawerStack() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerShown: false,
        swipeEnabled: true,
        swipeEdgeWidth: 150,
        drawerPosition: "right",
      }}
      drawerContent={DrawerListComponent}>
      <Stack.Screen name="Message List" component={DashboardScreen} />
    </Drawer.Navigator>
  );
}
