import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LandingPage from "../../features/Accounts/screens/LandingPage";
import Login from "../../features/Accounts/screens/Login";
import CreateAccount from "../../features/Accounts/screens/CreateAccount";
import UserInformation from "../../features/Accounts/screens/UserInformation";
import ResetPassword1 from "../../features/Accounts/screens/ResetPassword1";
import ResetPassword2 from "../../features/Accounts/screens/ResetPassword2";
import ResetPassword3 from "../../features/Accounts/screens/ResetPassword3";

const Stack = createNativeStackNavigator();
const HeroScreen = () => <LandingPage />;
const LoginScreen = () => <Login />;
const UserInformationScreen = () => <UserInformation />;
const CreateAccountScreen = () => <CreateAccount />;
const ResetPassword1Screen = () => <ResetPassword1 />;
const ResetPassword2Screen = () => <ResetPassword2 />;
const ResetPassword3Screen = () => <ResetPassword3 />;

export default function Account() {
  return (
    <Stack.Navigator
      screenOptions={() => {
        return {
          headerShown: false,
        };
      }}>
      <Stack.Screen name="Hero Page" component={HeroScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Create Account" component={CreateAccountScreen} />
      <Stack.Screen name="Reset Password 1" component={ResetPassword1Screen} />
      <Stack.Screen name="Reset Password 2" component={ResetPassword2Screen} />
      <Stack.Screen name="Reset Password 3" component={ResetPassword3Screen} />
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Registration",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#25FFC4",
          },
        }}
        name="User Information"
        component={UserInformationScreen}
      />
    </Stack.Navigator>
  );
}
