
import { createAction } from '@reduxjs/toolkit';
import { createContext } from 'react';

//fetch
export const fetchContactsLoading = createAction("contacts/fetchContactsLoading");
export const fetchNumberPhone = createAction("contacts/fetchNumberPhone");
export const fetchError = createAction("contacts/fetchError");

//add
export const addContactsLoading = createAction("contacts/addContactsLoading");
export const addNumberPhone = createAction("contacts/addNumberPhone");
export const addError = createAction("contacts/addError");

///delete
export const deleteContactsLoading = createAction("contacts/deleteContactsLoading");
export const deleteError = createAction("contacts/deleteError");
export const deleteNumberPhone = createAction("contacts/deleteNumberPhone");

export const filterInput = createAction('filterInput'); 