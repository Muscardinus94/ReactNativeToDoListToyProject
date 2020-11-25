import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { StyleSheet} from 'react-native';
import MainScreen from "./src/Screens/MainScreen";
import ToDoMainScreen from "./src/Screens/ToDoMainScreen";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

import {store, persistor} from "./src/redux/store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="ToDoMainScreen" component={ToDoMainScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableOpacityStyle: {
    borderWidth: 1,
    backgroundColor: "black",
  },
  textStyle: {
    color: "white",
  }
});
