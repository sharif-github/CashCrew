import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { Button, View, TextInput, Image, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const LoginScreen=(props:any)=>{
    const navigation = useNavigation();

    const handleSignUpButton=()=>{
        navigation.navigate('SignUp');
    }

    return(
        <ImageBackground style={styles.mainContainer} source={require('../../assets/public/images/bg.jpg')} >
            <View style={styles.header}>
                <Text style={{fontSize: 30}}>Login</Text>
            </View>

            <View style={styles.body}>
                <View style={styles.emailPassContainer}>
                    <Text style={styles.emailPassTextStyle}>Email:</Text>
                    <TextInput style={[styles.input, { marginBottom: 20 }]} placeholder=""></TextInput>
                </View>
                <View style={styles.emailPassContainer}>
                    <Text style={styles.emailPassTextStyle}>Password:</Text>
                    <TextInput style={[styles.input]} placeholder=""></TextInput>
                    <TouchableOpacity style={{alignItems: 'flex-end'}}>
                        <Text style={{fontSize: 17}}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={{fontSize: 17, color: 'white'}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={{fontSize: 17, color: 'white'}} onPress={handleSignUpButton}>Sign UP</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles=StyleSheet.create({
    mainContainer:{
        flex: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        flex: 15,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        // borderWidth: 1,
        borderColor: 'red',
    },
    body:{
        flex: 85,
        // borderWidth: 1,
        width: '100%',
        height: '100%',
        borderColor: 'red',
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        // paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    emailPassContainer:{
        // borderWidth: 1,
        borderColor: 'green',
        height: '15%',
        marginHorizontal: 20,
        justifyContent: 'center',
        marginTop: 35,
    },
    emailPassTextStyle:{
        fontSize: 17,
    },
    buttonStyle:{
        backgroundColor: 'black',
        width: '60%',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 25,
        paddingVertical: 20,
        // borderRadius: 10,
    }
    
})
export default LoginScreen;