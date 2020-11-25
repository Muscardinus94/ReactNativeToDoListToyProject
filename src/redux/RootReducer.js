import {combineReducers} from "redux";
// import {persistReducer} from "redux-persist";
// import storage from "redux-persist/lib/storage";
import {AsyncStorage} from "react-native";

import ToDoReducer from "./ToDo/ToDo.reducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["toDo"],
}

const rootReducer = combineReducers({
  toDo: ToDoReducer,
})

// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;
