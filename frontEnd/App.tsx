import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {useEffect} from "react";
import React from "react";

import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import HomeScreen from "./src/Screens/HomeScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import SignUp from "./src/Screens/SignUp";


const stack = createStackNavigator();

export default function App() {


  return (
    <View style={styles.container}>
      <NavigationContainer>
        <stack.Navigator screenOptions={{headerShown: false}}>
          {/* <stack.Screen name="Home" component={HomeScreen} /> */}
          <stack.Screen name="LoginScreen" component={LoginScreen} />
          <stack.Screen name="SignUp" component={SignUp} />
        </stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullFlag: {
    flex: 3,
    flexDirection: "row",
  },
  side: {
    backgroundColor: "#63c5f7",
    flex: 1,
  },
  middle: {
    backgroundColor: "white",
    flex: 1,
  },
  
});

