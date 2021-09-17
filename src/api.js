import axios from "axios";

export function postlogin(data){
    return axios.post(`http://localhost:8000/login`,data);
}

export function postregister(data){
    return axios.post(`http://localhost:8000/register`,data);
}

export function GetuserbyEmail(email){
    return axios.get(`http://localhost:8000/user/${email}`);
}

export function postsurvey(data){
    return axios.post(`http://localhost:8000/survey`,data);
}

export function GetuserbyID(id){
    return axios.get(`http://localhost:8000/users${id}`);
}

export function GetsurveybyEmail(email){
    return axios.post(`http://localhost:8000/survey${email}`);
}