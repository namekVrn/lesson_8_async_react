import ItemPhone from '../ItemPhone/ItemPhone';
import SearchInput from '../SearchInput/SearchInput';
import '../PhoneList/phoneList.css'

const PhoneList = () => {
  return (
    <div className='phonelist'>
      <SearchInput />
      <ul className="phonelist__listItem">
        <ItemPhone />
      </ul>
    </div>
  );
};
export default PhoneList;
