import React from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { sendToFinishList } from "../redux/ToDo/ToDo.actions";
import ToDoElement from "./ToDoElement";
import ToDoInput from "./ToDoInput";

const ToDo = ({ toDoList, sendToFinishList }) => {
  return (
    <View style={styles.container}>
      <ToDoInput />
      <FlatList
        data={toDoList}
        keyExtractor={(toDo) => String(toDo.id)}
        renderItem={({ item }) => <ToDoElement {...item} />}
      />
      <TouchableOpacity
        style={styles.completeButton}
        onPress={sendToFinishList}
      >
        <Text style={styles.completeText}>Command &gt; rm checkedList</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
    display: "flex",
    justifyContent: "flex-start",
  },
  completeButton: {
    borderWidth: 1,
    borderColor: "white",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  completeText: {
    color: "white",
  },
});

const mapStateToProps = ({ toDo }) => ({
  toDoList: toDo.toDoList,
});

export default connect(mapStateToProps, { sendToFinishList })(ToDo);
