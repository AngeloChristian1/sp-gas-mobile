import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const HomePage = () => {
  const navigation = useNavigation()
  return (
    <View
    className="items-center justify-center  h-full"
    // style={{backgroundColor:"white", width:"100%", height:"100%", padding:10, paddingTop:50}}
  >
    <Text className="text-black " style={{fontFamily:"poppins_bold"}}>SP GAS ltd</Text>
    <TouchableOpacity onPress></TouchableOpacity>
    <TouchableOpacity
    styles={{backgroundColor:"blue", padding:5}}
      onPress={() => navigation.navigate("Account")}
      className="rounded m-3 bg-blue-400 w-[80%] p-3"
    >
      <Text className=" text-center" style={{fontFamily:"poppins_bold"}}> Account</Text>
    </TouchableOpacity>
    
  </View>
  );
};

export default HomePage;
