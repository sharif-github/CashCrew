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
import LoginScreen from "./src/Screens/LoginScreen";
import SignUp from "./src/Screens/SignUp";
import UpdateInfo from "./src/Screens/UpdateInfo";
import TourlistScreen from "./src/Screens/TourlistScreen";
import TourExpenselistScreen from "./src/Screens/TourExpenseList";


const stack = createStackNavigator();

export default function App() {


  return (
    <View style={styles.container}>
      <NavigationContainer>
        <stack.Navigator screenOptions={{headerShown: false}}>
          {/* <stack.Screen name="Home" component={HomeScreen} /> */}
          <stack.Screen name="LoginScreen" component={LoginScreen} />
          <stack.Screen name="SignUp" component={SignUp} />
          <stack.Screen name="UpdateInfo" component={UpdateInfo} />
          <stack.Screen name="TourListScreen" component={TourlistScreen}/>
          <stack.Screen name="TourExpenselistScreen" component={TourExpenselistScreen}/>
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

