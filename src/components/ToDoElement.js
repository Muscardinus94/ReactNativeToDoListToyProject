import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { removeToDo, toggleToDoItem } from "../redux/ToDo/ToDo.actions";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const ToDoElement = ({
  id,
  item,
  checked,
  removeToDo,
  toggleToDoItem,
  finish,
}) => {
  return (
    <View style={styles.container}>
      <Fontisto
        name={`${checked ? "checkbox-active" : "checkbox-passive"}`}
        size={24}
        color="white"
        onPress={() => {
          !finish && toggleToDoItem(id);
        }}
      />
      <Text style={styles.toDoText} numberOfLines={1}>
        Muscardinus94 % {item}
      </Text>
      {!finish && (
        <Entypo
          name="circle-with-cross"
          size={24}
          color="white"
          onPress={() => removeToDo(id)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "white",
    height: 50,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  toDoText: {
    color: "white",
    width: 300,
    marginLeft: 10,
  },
});

export default connect(null, { removeToDo, toggleToDoItem })(ToDoElement);
