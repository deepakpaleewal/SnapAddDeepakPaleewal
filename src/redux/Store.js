import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "@redux/CombinedReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";


const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default function configureStore() {
const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
let persistor = persistStore(store);
export { store, persistor };
// }
