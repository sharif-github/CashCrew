import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { Button, View, TextInput, Image, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const UpdateInfo=(props:any)=>{
    
    return(
        <ImageBackground style={styles.mainContainer} source={require('../../assets/public/images/bg_crop.jpg')} >
            <View style={styles.header}>
                <Text style={{fontSize: 30, textAlign: 'center'}}>Update{'\n'}Information</Text>
            </View>

            <View style={styles.body}>
                <View style={styles.textInputContainer}>
                    <Text style={styles.emailPassTextStyle}>User Name:</Text>
                    <TextInput style={[styles.input, { marginBottom: 20 }]} placeholder=""></TextInput>
                </View>

                <View style={styles.textInputContainer}>
                    <Text style={styles.emailPassTextStyle}>Email:</Text>
                    <TextInput style={[styles.input]} placeholder=""></TextInput>
                </View>

                <View style={styles.textInputContainer}>
                    <Text style={styles.emailPassTextStyle}>Password:</Text>
                    <TextInput style={[styles.input]} placeholder=""></TextInput>
                </View>

                <View style={styles.textInputContainer}>
                    <Text style={styles.emailPassTextStyle}>Retype Password:</Text>
                    <TextInput style={[styles.input]} placeholder=""></TextInput>
                </View>

                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={{fontSize: 17, color: 'white'}}>Update</Text>
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
        // borderWidth: 4,
        borderColor: 'red',
    },
    body:{
        flex: 85,
        // borderWidth: 4,
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
    textInputContainer:{
        // borderWidth: 1,
        borderColor: 'green',
        height: '15%',
        marginHorizontal: 20,
        justifyContent: 'center',
        marginTop: 20,
    },
    emailPassTextStyle:{
        fontSize: 17,
    },
    buttonStyle:{
        backgroundColor: 'black',
        width: '60%',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        paddingVertical: 20,
        // borderRadius: 10,
    },


})
export default UpdateInfo;