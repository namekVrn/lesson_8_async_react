import {
  addContactsLoading,
  addNumberPhone,
  addError,
  deleteContactsLoading,
  deleteError,
  deleteNumberPhone,
  fetchContactsLoading,
  fetchNumberPhone,
  fetchError,
} from '../contacts/contacts-action';
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:3004';
export const fetchContacts = ()=> dispatch => {
  dispatch(fetchContactsLoading())
  axios.get("/posts").then(res=>dispatch(fetchNumberPhone(res.data))).catch(error=>dispatch(deleteError(error)))
}
export const add =
  ({ phone, name }) =>
  dispatch => {
    const contacts = {
      // id: uuid(),
      date: new Date().toLocaleDateString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      }),
      phone,
      name,
    };
    dispatch(addContactsLoading());
    axios
      .post('/posts', contacts)
      .then(res => dispatch(addNumberPhone(res.data)))
      .catch(error => dispatch(addError(error)));
  };

  export const deletePhone = id => dispatch => {
    dispatch(deleteContactsLoading())
    axios.delete(`/posts/${id}`)
    .then(res=>dispatch(deleteNumberPhone(id)))
    .catch(error => dispatch(deleteError(error)));
  }