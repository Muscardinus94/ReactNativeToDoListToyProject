import React from "react";
import { connect } from "react-redux";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ToDoElement from "./ToDoElement";

const Finish = ({ finishList }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={finishList}
        keyExtractor={(finishList) => String(finishList.id)}
        renderItem={({ item }) => <ToDoElement {...item} finish />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
  },
});

const mapStateToProps = ({ toDo }) => ({
  finishList: toDo.finishList,
});

export default connect(mapStateToProps)(Finish);
