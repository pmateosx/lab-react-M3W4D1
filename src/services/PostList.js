import http from "./BaseServices";

export const getPostList = () => http.get('/posts')