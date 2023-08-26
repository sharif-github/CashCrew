import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { Button, View, TextInput, Image, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import Toast from "react-native-toast-message";

const LoginScreen = (props: any) => {
  const [username, setusername] = useState<string>("");
  const handleOnChangeusername = (text: string) => {
    setusername(text);
    console.log(username);
  };

  const [password, setPassword] = useState<string>("");
  const handleOnChangePassword = (text: string) => {
    setPassword(text);
  };

  const navigation = useNavigation();

  const handleSignUpButton = () => {
    navigation.navigate("SignUp");
  };
  const handleLoginButton = () => {
    console.log("working");
    const apiUrl = "http://localhost:3000/users/login";
    const data = {
      username: username,
      password: password,
    };
    console.log(data);
    axios
      .post(apiUrl, data, {
        headers: {
          "Content-Type": "application/json",
          
          // Add any other headers here as needed
        },
      })
      .then((response) => {
        
        if (response.status === 200) {
          const responseData = response.data;
          // Show the response message in a toast
          Toast.show({
            type: "success",
            text1: responseData.message,
            visibilityTime: 3000, // 3 seconds
          });
          navigation.navigate("TourListScreen");
        } else {
          // Show the error message in a toast for non-200 status codes
          Toast.show({
            type: "error",
            text1: "Login Failed",
            text2: "Please check your credentials.",
            visibilityTime: 3000, // 3 seconds
          });
          
        }
      })
      .catch((error) => {
        // Show an error message in a toast for network errors
        Toast.show({
          type: "error",
          text1: "An error occurred",
          text2: "Please try again later.",
          visibilityTime: 3000, // 3 seconds
        });
      });
  };
  const handleForgotPasswordButton = () => {
    navigation.navigate("UpdateInfo");
  };

  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require("../../assets/public/images/bg.jpg")}
    >
      <View style={styles.header}>
        <Text style={{ fontSize: 30 }}>Login</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.usernamePassContainer}>
          <Text style={styles.usernamePassTextStyle}>Username:</Text>
          <TextInput
            style={[styles.input, { marginBottom: 20 }]}
            value={username}
            onChangeText={handleOnChangeusername}
            placeholder=""
          ></TextInput>
        </View>
        <View style={styles.usernamePassContainer}>
          <Text style={styles.usernamePassTextStyle}>Password:</Text>
          <TextInput
            style={[styles.input]}
            secureTextEntry={true}
            value={password}
            onChangeText={handleOnChangePassword}
            placeholder=""
          ></TextInput>
          <TouchableOpacity style={{ alignItems: "flex-end" }}>
            <Text style={{ fontSize: 17 }} onPress={handleForgotPasswordButton}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text
            style={{ fontSize: 17, color: "white" }}
            onPress={handleLoginButton}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text
            style={{ fontSize: 17, color: "white" }}
            onPress={handleSignUpButton}
          >
            Sign UP
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 100,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 15,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "100%",
    // borderWidth: 1,
    borderColor: "red",
  },
  body: {
    flex: 85,
    // borderWidth: 1,
    width: "100%",
    height: "100%",
    borderColor: "red",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    // paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 10,
    fontSize: 20,
  },
  usernamePassContainer: {
    // borderWidth: 1,
    borderColor: "green",
    height: "15%",
    marginHorizontal: 20,
    justifyContent: "center",
    marginTop: 35,
  },
  usernamePassTextStyle: {
    fontSize: 17,
  },
  buttonStyle: {
    backgroundColor: "black",
    width: "60%",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 25,
    paddingVertical: 20,
    // borderRadius: 10,
  },
});
export default LoginScreen;
