import FormPhone from './FormPhome/FormPhone';
import PhoneList from './PhoneList/PhoneList';
import './app.css';
export const App = () => {
  return (
   <div className="displayApp">
    <FormPhone/>
    <PhoneList/>
   </div>
  );
};
