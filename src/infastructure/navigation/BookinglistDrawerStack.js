import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerListComponent } from "./DrawerList";
import Booklisting from "../../features/Booklisting/screens/Booklisting";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const ListScreen = () => <Booklisting />;

export default function BookinglistDrawerStack() {
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
      <Stack.Screen name="List" component={ListScreen} />
    </Drawer.Navigator>
  );
}
