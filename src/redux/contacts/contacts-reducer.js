import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {deleteContacts, addNumberCompleted,addNumberPhone, addContactsLoading, addError ,deleteContactsLoading, deleteError, deleteNumberPhone, fetchContactsLoading, fetchNumberPhone, fetchError} from '../contacts/contacts-action' // импорт action для функции createReducer - что бы не писать type
const itemsReduce = createReducer([], {
   
    [fetchNumberPhone] : (state, {payload}) => payload,
    [addNumberPhone]: (state, {payload}) => [payload, ...state],
    [deleteNumberPhone] : (state, {payload}) => state.filter(({id})=>id !== payload)
})
// const itemsReduce = (state = [], { type, payload }) => {
//   switch (type) {
//     case 'addNumberPhone':
//       return [payload, ...state ];
//       case 'deleteContacts': {
//         return state.filter(({id})=>id !== payload)
//       }
//     default:
//       return state;
//   }
// };
const filterReducer = createReducer('', {
    'filterInput': (state, {payload})=>{return payload}
})
const loading = createReducer(false, {
  [addNumberPhone]: ()=>false,
  [addContactsLoading]: ()=>true,
  [addError]: ()=>false,
  [deleteNumberPhone]: ()=>false,
  [deleteContactsLoading]: ()=>true,
  [deleteError]: ()=>false,
  [fetchNumberPhone]: ()=>false,
  [fetchContactsLoading]: ()=>true,
  [fetchError]: ()=>false,
})
// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case 'filterInput':
//       return payload;
//     default:
//       return state;
//   }
// };

const contacts = combineReducers({
  items: itemsReduce,
  filter: filterReducer,
  loading,
  
});
export default contacts;
