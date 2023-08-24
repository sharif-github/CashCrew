import React from "react";
import editBtnImage from "../../assets/public/images/editBtn.png";
import deleteBtnImage from "../../assets/public/images/search.png";
import {
  ImageBackground,
  FlatList,
  View,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Card = ({ title }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Sharif</Text>
        <Text>ID: 5462</Text>
      </View>
      <TouchableOpacity style={{ backgroundColor: "black", padding: 10 }}>
        <Text style={{ color: "white", fontSize: 18 }}>+</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const AddFriendScreen = (props) => {
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
      <View
        style={{
          width: "90%",
          borderColor: "black",
          borderWidth: 5,
          marginTop: 30,
          borderRadius: 10,
          display:"flex",
          flexDirection:"row"
        }}
      >
        <Image source={deleteBtnImage} style={styles.editBtnImage} />
        <TextInput
          style={{ width: "100%",marginLeft:10 }}
          placeholder="SearchFriend"
        ></TextInput>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card title={item.title} />}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    width: "75%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
  cardText: {
    fontSize: 18,
    color: "red",
  },
  editBtnImage: {
    width: 25,
    height: "100%",
    marginLeft:5
  },
});

export default AddFriendScreen;
