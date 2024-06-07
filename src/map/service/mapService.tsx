import axios from 'axios'

const fetchAllMap = () => {
    return axios.get('')
}


//lấy vị trí từ api vd: { "code": "VN-01", "id": 609, "name": "An Giang"},
const fetchAllPlace =() =>{
    return axios.get('')
}


export {fetchAllMap, fetchAllPlace}
