import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { addToDo, sendToFinishList } from "../redux/ToDo/ToDo.actions";

const ToDoInput = ({ addToDo, sendToFinishList }) => {
  const [toDoText, setToDoText] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.InputContainer}>
        <Text style={styles.InputIconText}>ToDo &gt; </Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.InputStyle}
          onChangeText={setToDoText}
          value={toDoText}
          onSubmitEditing={() => {
            if (toDoText === "rm checkedList") {
              sendToFinishList();
              setToDoText("");
              return;
            }
            addToDo(toDoText);
            setToDoText("");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "white",
    marginBottom: 20,
    height: 50,
  },
  InputContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    padding: 10,
  },
  InputIconText: {
    color: "white",
  },
  InputStyle: {
    color: "white",
    flex: 1,
  },
});

export default connect(null, { addToDo, sendToFinishList })(ToDoInput);
