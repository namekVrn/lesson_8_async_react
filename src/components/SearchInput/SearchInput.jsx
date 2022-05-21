import '../SearchInput/SearchInput.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { filterInput } from '../../redux/contacts/contacts-action';
const SearchInput = () => {
  const [filterName, setFilterName] = useState('');
  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items);

  const onChangeFilter = e => {
    console.log(e.target.value);
    setFilterName(e.target.value);
    dispatch(filterInput(e.target.value));
  };

  return (
    <div className="searchInput">
      <input
        className="searchInput__filter"
        type="text"
        name="filter"
        value={filterName}
        placeholder="Введите имя"
        onChange={onChangeFilter}
      />
      <p>{filterName}</p>
      <p>
        Всего номеров:{' '}
        <span className="searchInput__statsInfo">{items.length}</span>{' '}
      </p>
    </div>
  );
};
export default SearchInput;
