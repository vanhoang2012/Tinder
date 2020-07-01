import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import DataReducer from './DataReducer';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'Data',
  storage: AsyncStorage,
};

export default combineReducers({
  data: persistReducer(persistConfig, DataReducer),
});
