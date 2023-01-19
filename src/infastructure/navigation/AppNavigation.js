import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import HomeDrawerStack from "./HomeDrawerStack";
import BookinglistDrawerStack from "./BookinglistDrawerStack";
import MessageDrawerStack from "./MessageDrawerStack";

const Tab = createBottomTabNavigator();
const MessageScreen = () => <MessageDrawerStack />;
const HomeScreen = () => <HomeDrawerStack />;
const ListScreen = () => <BookinglistDrawerStack />;

export default function AppNavigation() {
  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName={"Home"}>
      <Tab.Screen name="Message" component={MessageScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Booklisting" component={ListScreen} />
    </Tab.Navigator>
  );
}

const TAB_ICON = {
  Home: "home",
  Message: "chatbox-ellipses",
  Booklisting: "clipboard",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Icon name={iconName} size={size} color={color} />
    ),
    headerShown: false,
    tabBarHideOnKeyboard: true,
  };
};
