import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import ReduxThunk from 'redux-thunk'

import allReducers from './reducers';

const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage, // define which storage to use
}
const persistedReducer = persistReducer(persistConfig, allReducers) // create a persisted reducer

const store = createStore(
    persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
    // applyMiddleware(ReduxThunk) // add any middlewares here
    composeWithDevTools(
        applyMiddleware(ReduxThunk)
    )
)

const  persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step


export {store, persistor}



