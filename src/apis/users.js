import axios from "./_api";

export const loginUser = (userBody) => axios.post("/users/login", userBody);
export const logoutUser = () => axios.get("/users/logout");
export const getMe = () => axios.get("/users/me");
