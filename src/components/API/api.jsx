import axios from "axios";
axios.defaults.baseURL = "http://172.0.0.1:3004"
const fetchPhone = () => {
    return axios.get("/posts").then(response=>response.data)
}
const addPhone = (phone) =>{
    return axios.post("/posts", phone).then(({data})=>data)
}
const deletePhone = (id)=>{
    return axios.detele(`/posts${id}`)
}
export default {fetchPhone,addPhone, deletePhone }