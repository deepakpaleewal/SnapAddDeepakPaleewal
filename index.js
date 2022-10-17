/**
 * @format
 */

import { AppRegistry, SafeAreaView } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/Store";

const AppConfig = () => (
    <Provider store={store}>
         {/* <SafeAreaView style={{flex:1}}> */}
            <App />
            {/* </SafeAreaView> */}
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppConfig);
