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
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";



const Card = ({ title }) => {
    
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.cardText}>{title}</Text>
      <Text>Fahim = 30 Tk</Text>
      <Text>Sakib = 100 Tk</Text>
    </TouchableOpacity>
  );
  
};

const SummaryScreen = (props) => {

    const navigation = useNavigation(); 

    const handleHome = () => {
      navigation.navigate("TourListScreen");
    };
    
  const data = [
    { id: "1", title: "Masum will Pay 130" },
    { id: "2", title: "Masum will Pay 130" },
    { id: "3", title: "Masum will Pay 130" },
  ];

  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require("../../assets/public/images/bg_crop.jpg")}
    >

      <FlatList style={{marginTop:30}}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card title={item.title} />}
      />
      <TouchableOpacity style={styles.buttonStyle} onPress={handleHome}>
        <Text style={{fontSize: 17, color: 'white'}}>Home</Text>
      </TouchableOpacity>
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
    justifyContent: "center",
    alignItems:"center",
    flexDirection: "column",
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
  cardButtonContainer:{
    display:"flex",
    flexDirection:"row"
  },
  editBtnImage: {
    width: 20,
    height: 20,
    padding:5
  },
  cardText: {
    fontSize: 18,
    color:"red"
  },
  buttonStyle:{
    backgroundColor: 'black',
    width: '60%',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 20,
    justifyContent:"flex-end",
    marginBottom:20
},
});

export default SummaryScreen;
