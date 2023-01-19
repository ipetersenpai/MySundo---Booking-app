import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export const DrawerListComponent = () => <DrawerList />;
const Profile = () => <Icon name="person" size={20} />;
const About = () => <Icon name="information-circle" size={20} />;
const Coupons = () => <Icon name="person" size={20} />;
const RiderSafety = () => <Icon name="shield-checkmark" size={20} />;
const SignOut = () => <Icon name="exit" size={20} />;
const TellAfriend = () => <Icon name="share-social" size={20} />;
const HelpAndFeedback = () => <Icon name="md-help-circle" size={20} />;

const DrawerList = () => {
  return (
    <DrawerContentScrollView>
      <View className="flex-grow">
        <View className="flex-row space-x-2 p-2 items-center ">
          <Image
            source={require("../../../assets/fb_logo.png")}
            style={{ width: 50, height: 50 }}
          />
          <View>
            <Text>Peter Francis Robante</Text>
            <Text className="text-gray-300">robantepeterfran@gmail.com</Text>
          </View>
        </View>

        <View className="h-2 bg-[#25FFC4]" />

        <DrawerItem label="Profile" icon={Profile} />
        <DrawerItem label="About" icon={About} />
        <DrawerItem label="Coupons" icon={Coupons} />
        <DrawerItem label="Rider Safety" icon={RiderSafety} />
        <DrawerItem label="Sign Out" icon={SignOut} />
      </View>

      <View className="mt-64">
        <View className="h-1 bg-gray-400 mx-3" />
        <DrawerItem label="Tell a friend" icon={TellAfriend} />
        <DrawerItem label="Help and Feedback" icon={HelpAndFeedback} />
      </View>
    </DrawerContentScrollView>
  );
};
