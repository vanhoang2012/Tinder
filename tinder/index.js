/**
 * @format
 */
import React from 'react';
import {AppRegistry, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import store from './src/redux/store';
import 'react-native-gesture-handler';
import App from './src/navigations/HomeStack';
import {PersistGate} from 'redux-persist/es/integration/react';
import {persistStore} from 'redux-persist';
import Styles from './src/style/styles';

const persistor = persistStore(store);
const Root = () => (
  <Provider store={store}>
    {/* <PersistGate
      persistor={persistor}
      loading={
        <View style={Styles.container}>
          <Text>Loading</Text>
        </View>
      }> */}
    <App />
    {/* </PersistGate> */}
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
