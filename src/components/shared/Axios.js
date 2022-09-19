import axios from "axios";
import token from "./UserID";

const AxiosInstance = axios.create({
    baseURL: "https://booksgrid.herokuapp.com/api/",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2MzMyMzE2LCJpYXQiOjE2NjE3NzIzMTYsImp0aSI6IjU5ODA3ZDU1OGQxOTRmNzRhMDk2Y2IxNTk1NjFjYjk2IiwidXNlcl9pZCI6MSwiaWQiOjEsImVtYWlsIjoiYmVud2ViZGV2MjlAZ21haWwuY29tIn0.EEtKuUJcXLDL3wVLeAjXQPuErd3Pd_uxoZMR3wnFoMY"
    },
    timeout: 15000

})

export default AxiosInstance


export const AuthInstance = axios.create({
    baseURL: "https://booksgrid.herokuapp.com/api"
})

export const AxiosUserInstance = axios.create({
    baseURL: "https://booksgrid.herokuapp.com/api",
    headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token && token.access}`
    }
})