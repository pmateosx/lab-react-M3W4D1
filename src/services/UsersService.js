import http from "./BaseServices";

export const getUsers =() => http.get('/users')
export const getUserId = (id) => http.get(`/users/${id}`)