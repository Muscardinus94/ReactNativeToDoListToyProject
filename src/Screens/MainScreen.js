import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("ToDoMainScreen")}>
        <Text style={styles.textStyle}>TODO - LIST</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "white",
    fontSize: 25,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
  },
});

export default MainScreen;
