// redux

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducers

import charList from "./reducers/GameDataPage/charList.reducer";

const reducer = combineReducers({
  charList,
});

// persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducer);

// middlewares
const middlewares = [thunk];

// store
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export type RootState = ReturnType<typeof store.getState>;

const makeStore = () => store;

const wrapper = createWrapper(makeStore);
const persistor = persistStore(store);

export { wrapper, persistor };
