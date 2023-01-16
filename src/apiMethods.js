import axios from "axios";
const baseUrl = "https://reqres.in/";

export const getUser = (api) => {
    return axios.get(`${baseUrl}${api}`)
};

export const deleteUser = (api,id) => {
    return axios.delete(`${baseUrl}${api}${id}`)
}