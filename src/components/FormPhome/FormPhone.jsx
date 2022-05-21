import '../FormPhome/form.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import  {add}  from '../../redux/contacts/contacts-operaton'
const FormPhone = () => {
  const dispatch = useDispatch();
  const [phoneData, setPhoneData] = useState({ name: '', phone: '' });
  const onChange = e => {
    setPhoneData({
      ...phoneData,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitForm = e => {
    e.preventDefault();
    dispatch(add(phoneData));
    setPhoneData({ name: '', phone: '', date: '', id: '' });
  };

  return (
    <form className="form" onSubmit={onSubmitForm}>
      <input
        className="formPhome__input--name"
        type="text"
        name="name"
        onChange={onChange}
        value={phoneData.name}
        placeholder="Имя"
      />

      <input
        className="formPhome__input--tel"
        type="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        name="phone"
        onChange={onChange}
        value={phoneData.phone}
        placeholder="Телефон"
      />
      <button className="formPhone__btn" type="submit">
        Отправить
      </button>
    </form>
  );
};
export default FormPhone;
