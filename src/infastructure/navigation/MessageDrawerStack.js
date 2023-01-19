import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerListComponent } from "./DrawerList";
import Message from "../../features/Message/screens/Message";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const MessageScreen = () => <Message />;

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
      <Stack.Screen name="Message List" component={MessageScreen} />
    </Drawer.Navigator>
  );
}
