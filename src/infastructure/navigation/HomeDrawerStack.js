import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerListComponent } from "./DrawerList";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Dashboard = () => null;
const Sundo = () => null;
const BookARide = () => null;
const BookForLater = () => null;
const BookForSomeone = () => null;

export default function HomeDrawerStack() {
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
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Sundo" component={Sundo} />
      <Stack.Screen name="Book A Ride" component={BookARide} />
      <Stack.Screen name="Book for Later" component={BookForLater} />
      <Stack.Screen name="Book for Someone" component={BookForSomeone} />
    </Drawer.Navigator>
  );
}
