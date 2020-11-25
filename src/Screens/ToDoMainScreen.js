import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ToDo from "../components/ToDo";
import Finish from "../components/Finish";

const Tab = createMaterialTopTabNavigator();

const ToDoScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ToDo" component={ToDo} />
      <Tab.Screen name="Finish" component={Finish} />
    </Tab.Navigator>
  );
};

export default ToDoScreen;
