import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState} from "react"
import {deletePhone, fetchContacts} from "redux/contacts/contacts-operaton"
import {addNumberPhone} from "redux/contacts/contacts-action"
import "../ItemPhone/itemPhone.css"
const ItemPhone = () => {
    const [itemState, setItemState] = useState([]);
    const items = useSelector(state=>state.contacts.items)
    const loading = useSelector(state=>state.contacts.loading)
    const filterName = useSelector(state=>state.contacts.filter)
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(fetchContacts())
    }, [])
   console.log(items)
    const deleteItem = (id)=>{
        if(id){
            dispatch(deletePhone(id))
        }
    }
    console.log('Загрузка',loading)
    return (
        <div className="itemPhone">
        {loading && <h1>загрузка</h1>}    
        {items && items.filter(({name, id})=>name.toLowerCase().includes(filterName)).map(el=> 
        <li key={el.id} className="itemPhone__item">
            <p className="itemPhone__item--name">Имя:{el.name}</p>
            <p className="itemPhone__item--phone">Телефон: {el.phone}</p>
            <p className="itemPhone__item--date">{el.date}</p>
            <button type="text" onClick={()=>deleteItem(el.id)}>Удалить</button>
        </li>)}
        </div>
    )
}
export default ItemPhone