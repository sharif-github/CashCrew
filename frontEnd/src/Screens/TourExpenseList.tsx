import React from "react";
import editBtnImage from "../../assets/public/images/editBtn.png";
import deleteBtnImage from "../../assets/public/images/deleteBtn.png";
import {
  ImageBackground,
  FlatList,
  View,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Card = ({ title }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View>
        <Text style={styles.cardText}>{title}</Text>
        <Text>Masum</Text>
      </View>

      <View style={styles.cardButtonContainer}>
        <TouchableOpacity>
          <Image source={editBtnImage} style={styles.editBtnImage} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={deleteBtnImage} style={styles.editBtnImage} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const TourExpenselistScreen = (props) => {
  const data = [
    { id: "1", title: "UIU to NB 1" },
    { id: "2", title: "UIU to NB 2" },
    { id: "3", title: "UIU to NB 3" },
  ];

  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require("../../assets/public/images/bg_crop.jpg")}
    >
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={{ fontSize: 17, color: "white" }}>Add Friend</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card title={item.title} />}
      />

      <TouchableOpacity style={styles.buttonStyle2}>
        <Text style={{ fontSize: 17, color: "white" }}>See Summary</Text>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs} placeholder="Expense Name"></TextInput>
        <TextInput style={styles.inputs} placeholder="Amount"></TextInput>
        <TouchableOpacity style={styles.inputAddBtn}><Text style={{fontSize: 20,color:"white"}}>+</Text></TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 100,
    backgroundColor: "rgba(100, 205, 18, 0.29)",
  },
  textColor: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "white",
    margin: 10,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardButtonContainer: {
    display: "flex",
    flexDirection: "row",
  },
  editBtnImage: {
    width: 20,
    height: 20,
    padding: 5,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonStyle: {
    backgroundColor: "black",
    width: "40%",
    alignItems: "center",
    alignSelf: "flex-start",
    padding: 10,
    justifyContent: "flex-end",
    marginTop: 30,
    marginLeft: 20,
  },
  buttonStyle2: {
    backgroundColor: "black",
    width: "40%",
    alignItems: "center",
    alignSelf: "flex-end",
    padding:10,
    marginRight:20,
    justifyContent: "flex-end",
  },
  inputs: {
    width: "30%",
    backgroundColor: "white",
    textAlign: 'center',
  },
  inputContainer:{
    display:"flex",
    flexDirection:"row",
    height:"5%",
    width:"100%",
    justifyContent:"space-around",
    
    marginBottom:5,
    marginTop:5
    
  },
  inputAddBtn:{
    width:30,
    height:"100%",
    backgroundColor:"black",
    alignItems:"center",
    justifyContent:"center"
  }
});

export default TourExpenselistScreen;
