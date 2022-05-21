import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import contactsReducer from './contacts/contacts-reducer';
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];
// const contactsConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const reducer = (state = initialState, { type, payload }) => {
//     console.log(state)
//   switch (type) {
//     case 'addNumberPhone':
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: [...state.contacts.items, payload],
//         },
//       };
//     default:
//       return state;
//   }
// };
// const itemsReduce = (state=[], {type, payload})=>{
//     switch(type){
//         case "addNumberPhone" :
//             return [...state, payload]
//         default :
//             return state
//     }

// }

//
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});
// let persistor = persistStore(store);
// const store = createStore(rootReducer, composeWithDevTools());
// export { store, persistor };
// export { store, persistor };
export default store 
