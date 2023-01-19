import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerListComponent } from "./DrawerList";
import Dashboard from "../../features/Home/screens/Dashboard";
import BookARide from "../../features/Home/screens/BookARide";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const DashboardScreen = () => <Dashboard />;
const SundoScreen = () => null;
const BookARideScreen = () => <BookARide />;
const BookForLaterScreen = () => null;
const BookForSomeoneScreen = () => null;

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
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Sundo" component={SundoScreen} />
      <Stack.Screen name="Book A Ride" component={BookARideScreen} />
      <Stack.Screen name="Book for Later" component={BookForLaterScreen} />
      <Stack.Screen name="Book for Someone" component={BookForSomeoneScreen} />
    </Drawer.Navigator>
  );
}
