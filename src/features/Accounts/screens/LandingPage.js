import React from "react";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { styles } from "../components/LandingPageStyles";
import CarouselComponent from "../../../components/CarouselComponents";
import { useNavigation } from "@react-navigation/native";

export default function LandingPage() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <Image
        style={styles.bgstyle}
        source={require("../../../../assets/background.jpg")}
        resizeMode="cover"
      />

      <View style={styles.carousel}>
        <CarouselComponent />
      </View>

      <View style={styles.backbutton}>
        <Text style={styles.Logo}>
          MY<Text style={{ color: "#ACFF43" }}>SUNDO</Text>
        </Text>
      </View>

      <View style={styles.pannel1}>
        <Text style={styles.fontstyle1}>Welcome to my SUNDO!</Text>
        <Text style={styles.fontstyle2}>
          Looking for a way to get around town? we've got you covered.
        </Text>

        <TouchableOpacity
          style={styles.SignUpbutton}
          onPress={() => {
            navigation.navigate("User Information");
          }}>
          <Text style={styles.signupfont}>SIGNUP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Loginbutton}
          onPress={() => {
            navigation.navigate("Login");
          }}>
          <Image
            source={require("../../../../assets/button.png")}
            resizeMode="cover"
            style={styles.sample}
          />

          <Text style={styles.loginfont}>LOGIN</Text>
        </TouchableOpacity>

        <View style={styles.line} />
        <Text style={styles.fontstyle3}>or connect using</Text>

        <View style={styles.container2}>
          <TouchableOpacity style={styles.icon1}>
            <Image
              source={require("../../../../assets/fb_logo.png")}
              resizeMode="cover"
              style={{ width: "70%", height: "85%" }}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon2}>
            <Image
              source={require("../../../../assets/email_logo.png")}
              resizeMode="contain"
              style={{ width: "90%", height: "90%" }}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon3}>
            <Image
              source={require("../../../../assets/in_logo.png")}
              resizeMode="contain"
              style={{ width: "90%", height: "90%" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
