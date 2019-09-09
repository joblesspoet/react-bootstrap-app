import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../reduicers/index';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    blacklist:['home','user_profile'],
    whitelist:['auth','navigation']
}  
const persistedReducer = persistReducer(persistConfig, rootReducer)
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default () => {
    let store = createStoreWithMiddleware(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    let persistor = persistStore(store);    
  return { store, persistor }
};


/*
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

let store = createStoreWithMiddleware(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;*/