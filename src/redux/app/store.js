import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { brandKitAppReducer, initialApp } from "../features/BrandKitAppReducerSlice.js";
import { collectionStorageReducer, initialStorageState } from "../features/CollectionStorageReducerSlice.js";
import { usersCollectionsReducer } from "../features/UserCollectionsReducerSlice.js";

const store = createStore(
  combineReducers({
    brandKitApp: brandKitAppReducer,
    collectionStorage: collectionStorageReducer,
    collections: usersCollectionsReducer,
  }),
  {
    brandKitApp: initialApp,
    collectionStorage: initialStorageState,
  },
  composeWithDevTools()
);

export default store;
