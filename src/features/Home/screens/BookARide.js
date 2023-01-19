import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "../components/BookARideStyles";

export default function BookARide({ navigation }) {
  return (
    <View style={styles.container1}>
      <View style={styles.inputFiled}>
        <TextInput style={styles.locationseatch} placeholder="Pick up at:" />

        <TextInput style={styles.locationseatch} placeholder="Drop off at:" />
      </View>

      <View style={styles.option1}>
        <View></View>
      </View>
    </View>
  );
}
